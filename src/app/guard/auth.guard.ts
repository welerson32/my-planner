import { inject } from "@angular/core";
import { OidcSecurityService } from "angular-auth-oidc-client";
import { map, take } from "rxjs";

export const isAuthenticated = () => {
  const oidcSecurityService = inject(OidcSecurityService);

  return oidcSecurityService.isAuthenticated$.pipe(
    take(1),
    map(({ isAuthenticated: loggedIn }) => {
      if (loggedIn) {
        return true;
      }
      oidcSecurityService.authorize();
      return false;
    })
  );
};
