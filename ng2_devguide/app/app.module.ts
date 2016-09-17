import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { routing } from './app.routing';

/* Components */
import { AppComponent }  from './app.component';
import { UserInputComponent } from './user-input.component';
import { FormsComponent } from './forms.component';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent } from './keyup.component';
import { LoopbackComponent } from './loop-back.component';
import { LittleTourComponent } from './little-tour.component';
@NgModule({
  imports:      [ 
    BrowserModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    UserInputComponent,
    FormsComponent, 
    ClickMeComponent, 
    KeyUpComponent,
    LoopbackComponent,
    LittleTourComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
