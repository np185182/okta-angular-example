import { Component, inject } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { filter, map } from 'rxjs';
import { AuthState } from '@okta/okta-auth-js';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [AsyncPipe, RouterOutlet, RouterLink]
})
export class AppComponent {

  private oktaStateService = inject(OktaAuthStateService);
  private oktaAuth = inject(OKTA_AUTH);

  public isAuthenticated$ = this.oktaStateService.authState$.pipe(
    filter((s:AuthState)=> !!s),
    map((s:AuthState)=> s.isAuthenticated ?? false)
  );

  public async signIn() : Promise<void>{
    await this.oktaAuth.signInWithRedirect();
  }  
  
  public async signOut() : Promise<void>{
    await this.oktaAuth.signOut();
  }

}
