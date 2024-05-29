import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OKTA_AUTH } from '@okta/okta-angular';

export const customGuardGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const oktaAuth = inject(OKTA_AUTH);

  const isAuthenticated = await oktaAuth.isAuthenticated();
  if(isAuthenticated){
    return true;
  }else{
    oktaAuth.setOriginalUri(state.url);
    router.navigate(['/']);
    return true;
  }
};
