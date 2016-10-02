import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroListComponent } from './hero-list.component';

import { HeroService } from './hero.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HeroListComponent
    ],
    exports: [
        HeroListComponent
    ],
    providers: [
        HeroService
    ]
})
export class HeroModule { }