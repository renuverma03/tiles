import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import {
    provideTranslateService,
    TranslateLoader,
    TranslateStore,
  } from '@ngx-translate/core';
  import { HttpClient, provideHttpClient } from '@angular/common/http';
  import { TranslateHttpLoader } from '@ngx-translate/http-loader';
   
  const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader =
  (http: HttpClient) => new TranslateHttpLoader(http, './public/i18n/', '.ts');
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideTranslateService({
      defaultLanguage: 'es',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
]
};
