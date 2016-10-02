import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeroData } from './toh/hero-data';

import { HeroModule } from './toh/hero.module';

import { AppComponent }   from './app.component';
import { WikiComponent } from './wiki/wiki.component';

@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      HeroModule,
      InMemoryWebApiModule.forRoot(HeroData)
  ],
  declarations: [ 
    AppComponent,
    WikiComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
