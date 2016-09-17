import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { routing } from './app.routing';

/* Components */
import { AppComponent }  from './app.component';

/* Module Imports */
import { HeroFormModule } from './forms/hero-form.module';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
  imports:      [ 
    BrowserModule,
    HeroFormModule,
    UserInputModule,
    routing
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
