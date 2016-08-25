import { NgModule,
         ModuleWithProviders } from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { AwesomePipe }         from './awesome.pipe';
import { HighlightDirective }  from './highlight.directive';
import { TitleComponent }      from './title.component';
import { UserService }         from './user.service';
@NgModule({
  imports:      [ CommonModule ],
  declarations: [ AwesomePipe, HighlightDirective, TitleComponent ],
  exports:      [ AwesomePipe, HighlightDirective, TitleComponent,
                  CommonModule, FormsModule ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ UserService ]
    };
  }
}
