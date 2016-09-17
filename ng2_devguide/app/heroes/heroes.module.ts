import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list.component';

import { HeroService } from './hero.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HeroesComponent,
        HeroListComponent
    ],
    exports: [
        HeroesComponent
    ],
    providers: [
        HeroService
    ]
})
export class HeroesModule { }