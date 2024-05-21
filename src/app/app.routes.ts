import { Routes } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent,
        canActivate : [OktaAuthGuard]
    },
    {
        path: 'protected',
        loadChildren: () => import('./protected/routes').then(m => m.PROTECTED_FEATURE_ROUTES),
        canActivate : [OktaAuthGuard]
    },
    {
        path : 'login/callback',
        component : OktaCallbackComponent
    },
];
