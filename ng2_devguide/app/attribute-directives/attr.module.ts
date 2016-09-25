import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttrComponent } from './attr.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AttrComponent,
        HighlightDirective
    ],
    exports: [
        AttrComponent
    ]
})
export class AttrModule { }