import { Routes, RouterModule } from '@angular/router';

import { UserInputComponent } from './user-input/user-input.component';
import { HeroFormComponent } from './forms/hero-form.component'

const appRoutes: Routes = [
    {
        path: 'user-input', component: UserInputComponent
    },
    {
        path: 'hero-form', component: HeroFormComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);