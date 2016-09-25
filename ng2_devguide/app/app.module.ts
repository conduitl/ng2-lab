import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { routing } from './app.routing';

/* Components */
import { AppComponent }  from './app.component';

/* Module Imports */
import { HeroFormModule } from './forms/hero-form.module';
import { UserInputModule } from './user-input/user-input.module';
import { HeroesModule } from './heroes/heroes.module';
import { TemplateModule } from './template-syntax/template.module';
import { AttrModule } from './attribute-directives/attr.module';

/* Providers */
import { Logger } from './logger.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    HeroFormModule,
    UserInputModule,
    HeroesModule,
    TemplateModule,
    AttrModule,
    routing
  ],
  declarations: [ 
    AppComponent
  ],
  providers: [
    Logger
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
