import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { routing } from './app.routing';

/* Components */
import { AppComponent }  from './app.component';
import { UserInputComponent } from './user-input.component';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent } from './keyup.component';
import { LoopbackComponent } from './loop-back.component';
import { LittleTourComponent } from './little-tour.component';

/* Module Imports */
import { HeroFormModule } from './forms/hero-form.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    HeroFormModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    UserInputComponent,
    ClickMeComponent, 
    KeyUpComponent,
    LoopbackComponent,
    LittleTourComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
