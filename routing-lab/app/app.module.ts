import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { HeroesModule } from './heroes/heroes.module';
import { CrisisListComponent } from './crisis-list.component';

import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports:      [ BrowserModule, routing, HeroesModule ],
  declarations: [ AppComponent, CrisisListComponent, PageNotFoundComponent ],
  providers:    [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
