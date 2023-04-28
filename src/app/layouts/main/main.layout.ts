import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { MoviePosterComponent } from 'src/app/components/movie-poster/movie-poster.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  standalone: true,
  imports: [
    RouterOutlet,
    MoviePosterComponent,
    NavbarComponent,
    FooterComponent,
    NgFor,
    AsyncPipe,
  ],
  templateUrl: './main.layout.html',
  styleUrls: ['./main.layout.scss'],
})
export class MainLayout {}
