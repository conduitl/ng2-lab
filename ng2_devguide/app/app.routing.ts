import { Routes, RouterModule } from '@angular/router';

import { UserInputComponent } from './user-input.component';
import { FormsComponent } from './forms/forms.component';

const appRoutes: Routes = [
    {
        path: 'user-input', component: UserInputComponent
    },
    {
        path: 'forms', component: FormsComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);