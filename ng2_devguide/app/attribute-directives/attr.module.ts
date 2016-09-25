import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttrComponent } from './attr.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AttrComponent
    ],
    exports: [
        AttrComponent
    ]
})
export class AttrModule { }