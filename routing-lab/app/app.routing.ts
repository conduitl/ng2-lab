import { Routes, RouterModule } from '@angular/router';

import { CrisisListComponent } from './crisis-list.component';

import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
    { 
        path: '',
        redirectTo: 'crisis-list',
        pathMatch: 'full'
    },
    { 
        path: 'crisis-list', component: CrisisListComponent 
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);