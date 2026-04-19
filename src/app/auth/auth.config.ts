import { PassedInitialConfig } from 'angular-auth-oidc-client';
import { environment } from '../../environments/environment';

export const authConfig: PassedInitialConfig = {
  config: {
    authority: environment.COGNITO_URL,
    redirectUrl: environment.COGNITO_REDIRECT_URL,
    clientId: environment.COGNITO_CLIENT_ID,
    scope: environment.COGNITO_SCOPE,
    responseType: environment.COGNITO_RESPONSE_TYPE
  }
}
