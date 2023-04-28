import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { DataService } from 'src/app/services/data.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgIf,
    NgClass,
    NgFor,
    AsyncPipe,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  private router = inject(Router);
  private dataService = inject(DataService);
  public movieService = inject(MoviesService);
  private formBuilder = inject(FormBuilder);

  public form = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    country: new FormControl(''),
    postCode: new FormControl(''),
    favoriteMovie: new FormControl(''),
  });

  filteredOptions = ['test', 'test2'];

  countryList: any[] = [
    {
      value: 1,
      text: 'Ireland',
    },
    {
      value: 2,
      text: 'United Kingdom',
    },
  ];
  submitted = false;

  constructor() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z0]+$')]],
      username: ['', [Validators.email]],
      country: ['', [Validators.required]],
      postCode: [''],
      favoriteMovie: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.form.controls['favoriteMovie'].valueChanges.subscribe((val: any) => {
      if (val) {
        this.movieService.makeSearch(val);
      } else {
        this.movieService.resetMovies();
        this.movieService.setPoster();
      }
    });

    this.form.controls['country'].valueChanges.subscribe((val: any) => {
      this.form.controls['postCode'].reset();
      if (val === 1) {
        this.form.controls['postCode'].setValidators([
          Validators.minLength(6),
          Validators.maxLength(10),
        ]);
      } else {
        this.form.controls['postCode'].setValidators([
          Validators.required,
          Validators.pattern(
            '^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabdhjlnp-uw-z]{2}$'
          ),
        ]);
      }

      this.form.controls['postCode'].updateValueAndValidity();
    });
  }

  onOptionHover(movie: any) {
    this.movieService.setPoster(movie.Poster);
  }

  onOptionClick() {
    this.movieService.resetMovies();
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.dataService.saveForm(this.form.value);
    this.router.navigate(['thank-you']);
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
