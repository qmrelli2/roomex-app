import { Component, OnInit, inject } from '@angular/core';
import { FormComponent } from 'src/app/components/form/form.component';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  standalone: true,
  imports: [FormComponent],
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public moviesService = inject(MoviesService);

  ngOnInit(): void {
    this.moviesService.resetMovies();
    this.moviesService.setPoster();
  }
}
