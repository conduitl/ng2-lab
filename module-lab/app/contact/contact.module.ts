import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AwesomePipe } from './awesome.pipe';
import { ContactComponent } from './contact.component';
import { HighlightDirective } from './highlight.directive';
import { ContactService } from './contact.service';

import { routing } from './contact.routing';

@NgModule({
  imports:      [ CommonModule, FormsModule, routing ],
  declarations: [ ContactComponent, HighlightDirective, AwesomePipe ],
  providers:    [ ContactService ]
})
export class ContactModule { }
