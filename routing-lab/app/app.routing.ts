import { Routes, RouterModule } from '@angular/router';

import { CrisisListComponent } from './crisis-list.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
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
    { path: 'heroes', 
      component: HeroListComponent,
      data: {
          title: 'Heroes List'
      }
    },
    { 
        path:'hero/:id',
        component: HeroDetailComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);