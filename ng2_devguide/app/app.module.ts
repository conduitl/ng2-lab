import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Routing */
//import { routing } from './app.routing';

/* Components */
import { AppComponent }  from './app.component';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent } from './keyup.component';
import { LoopbackComponent } from './loop-back.component';
import { LittleTourComponent } from './little-tour.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    ClickMeComponent, 
    KeyUpComponent,
    LoopbackComponent,
    LittleTourComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
