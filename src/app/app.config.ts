import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { OktaAuthModule } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';

const oktaAuthConfig = new OktaAuth({
  issuer:'https://ncrvoyixtools.okta.com/oauth2/default',
  clientId:'0oa1q1nf1w9WxvHqY1d8',
  redirectUri:'http://localhost:4200/login/callback',
});

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      OktaAuthModule.forRoot({
        oktaAuth : oktaAuthConfig
      })
    ),
    provideRouter(routes)
  ]
};
