import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent }  from './app.component';
import { TitleComponent } from './title.component';
import { HighlightDirective } from './highlight.directive';
import { UserService } from './user.service';

/* Feature Modules */
import { ContactModule } from './contact/contact.module'

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, ContactModule, routing ],
  declarations: [ AppComponent, HighlightDirective, TitleComponent ],
  providers:    [ UserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
