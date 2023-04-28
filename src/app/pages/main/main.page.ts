import { Component } from '@angular/core';
import { FormComponent } from 'src/app/components/form/form.component';

@Component({
  standalone: true,
  imports: [FormComponent],
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {}
