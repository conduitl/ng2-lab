import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { HeroModule } from './toh/hero.module';

import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      HeroModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
