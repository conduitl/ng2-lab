import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AwesomePipe } from './awesome.pipe';
import { ContactComponent } from './contact.component';
import { HighlightDirective } from './highlight.directive';
import { ContactService } from './contact.service';

@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ ContactComponent, HighlightDirective, AwesomePipe ],
  providers:    [ ContactComponent ],
  bootstrap:    [ ContactService ]
})
export class ContactModule { }
