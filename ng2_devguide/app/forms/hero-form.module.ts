import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormsComponent } from './forms.component';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        FormsComponent,
        HeroFormComponent
    ],
    exports: [
        FormsComponent
    ]
})
export class HeroFormModule { }