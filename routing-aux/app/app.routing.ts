import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { ChatComponent } from './chat.component';

const appRoutes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'chat', component: ChatComponent
    },
    {
        path: 'chat', component: ChatComponent, outlet:"aux"
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);