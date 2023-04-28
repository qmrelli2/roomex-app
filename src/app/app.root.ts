import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.root.html',
  styleUrls: ['./app.root.scss'],
})
export class AppRoot {}
