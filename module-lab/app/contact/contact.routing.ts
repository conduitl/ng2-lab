import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';


export const routing = RouterModule.forChild([
    { path: 'contact', component: ContactComponent }
]);