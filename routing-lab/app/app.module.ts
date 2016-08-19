import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { HeroListComponent } from './hero-list.component';
import { CrisisListComponent } from './crisis-list.component';

import { HeroDetailComponent } from './hero-detail.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, HeroListComponent, CrisisListComponent, HeroDetailComponent, PageNotFoundComponent ],
  providers:    [ appRoutingProviders ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
