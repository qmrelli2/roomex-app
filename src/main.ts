import { bootstrapApplication } from '@angular/platform-browser';
import { HttpParams, provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppRoot } from './app/app.root';
import { withInterceptors } from '@angular/common/http';
import { environment } from './environments/environment.development';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppRoot, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([
        (req, next) => {
            const newReq = req.clone({
                params: (req.params ? req.params : new HttpParams()).set('apikey', environment.apiKey),
            });
            return next(newReq);
        },
    ])),
    importProvidersFrom(BrowserAnimationsModule)
],
}).catch((err) => console.error(err));
