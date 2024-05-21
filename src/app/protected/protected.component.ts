import { Component, inject } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';

@Component({
  selector: 'app-protected',
  standalone: true,
  imports: [],
  template: `
    <p>
      sample page which is protected
    </p>
  `,
  styles: ``
})
export class ProtectedComponent {

}
