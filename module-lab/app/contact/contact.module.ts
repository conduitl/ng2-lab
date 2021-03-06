import { NgModule }      from '@angular/core';
import { SharedModule }  from '../shared/shared.module';

import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';

import { routing } from './contact.routing';

@NgModule({
  imports:      [ SharedModule, routing ],
  declarations: [ ContactComponent ],
  providers:    [ ContactService ]
})
export class ContactModule { }
