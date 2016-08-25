import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { TitleComponent } from './title.component';
import { HighlightDirective } from './highlight.directive';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HighlightDirective, TitleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
