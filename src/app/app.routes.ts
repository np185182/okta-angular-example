import { Routes } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { ProductsComponent } from './products/products.component';
import { customGuardGuard } from './custom-guard.guard';

export const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent,
        canActivate : [customGuardGuard],

    },
    {
        path: 'protected',
        loadChildren: () => import('./protected/routes').then(m => m.PROTECTED_FEATURE_ROUTES),
        canActivate : [customGuardGuard]
    },
    {
        path : 'login/callback',
        component : OktaCallbackComponent
    },
];
