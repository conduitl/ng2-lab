import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInputComponent } from './user-input.component';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent } from './keyup.component';
import { LoopbackComponent } from './loop-back.component';
import { LittleTourComponent } from './little-tour.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        UserInputComponent,
        ClickMeComponent, 
        KeyUpComponent,
        LoopbackComponent,
        LittleTourComponent,
    ],
    exports: [
        UserInputComponent
    ]
})
export class UserInputModule { }