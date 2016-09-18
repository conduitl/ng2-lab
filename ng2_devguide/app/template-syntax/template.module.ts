import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateLabComponent } from './template-lab.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TemplateLabComponent
    ],
    exports: [
        TemplateLabComponent
    ]
})
export class TemplateModule { }