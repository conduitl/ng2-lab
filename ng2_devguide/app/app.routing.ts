import { Routes, RouterModule } from '@angular/router';

import { UserInputComponent } from './user-input/user-input.component';
import { HeroFormComponent } from './forms/hero-form.component';
import { HeroesComponent } from './heroes/heroes.component';

const appRoutes: Routes = [
    {
        path: 'user-input', component: UserInputComponent
    },
    {
        path: 'hero-form', component: HeroFormComponent
    },
    {
        path: 'di', component: HeroesComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);