import { Routes } from '@angular/router';
import { MainPage } from './pages/main/main.page';
import { MainLayout } from './layouts/main/main.layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'enter',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'enter',
        loadComponent: () =>
          import('./pages/main/main.page').then((m) => m.MainPage),
      },
      {
        path: 'thank-you',
        loadComponent: () =>
          import('./pages/result/result.page').then((m) => m.ResultPage),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'enter',
    pathMatch: 'full',
  },
];
