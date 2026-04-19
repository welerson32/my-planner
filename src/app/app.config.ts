import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authConfig } from './auth/auth.config';
import { provideAuth, withAppInitializerAuthCheck } from 'angular-auth-oidc-client';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), importProvidersFrom(BrowserAnimationsModule), provideAuth(authConfig, withAppInitializerAuthCheck()), provideHttpClient()],
};
