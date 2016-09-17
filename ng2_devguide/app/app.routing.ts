import { Routes, RouterModule } from '@angular/router';

import { UserInputComponent } from './user-input.component';

const appRoutes: Routes = [
    {
        path: 'user-input', component: UserInputComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);