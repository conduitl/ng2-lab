import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroFormComponent } from './hero-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        HeroFormComponent
    ],
    exports: [
        HeroFormComponent
    ]
})
export class HeroFormModule { }