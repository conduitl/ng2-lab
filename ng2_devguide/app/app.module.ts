import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* Routing */
import { routing } from './app.routing';

/* Components */
import { AppComponent }  from './app.component';
import { UserInputComponent } from './user-input.component';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent } from './keyup.component';
import { LoopbackComponent } from './loop-back.component';
import { LittleTourComponent } from './little-tour.component';

/* 5. Forms */
import { FormsComponent } from './forms/forms.component';
import { HeroFormComponent } from './forms/hero-form.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [ 
    AppComponent,
    UserInputComponent,
    FormsComponent, 
    ClickMeComponent, 
    KeyUpComponent,
    LoopbackComponent,
    LittleTourComponent,
    HeroFormComponent     // 5. Forms from here
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
