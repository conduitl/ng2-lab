import { Component } from '@angular/core';

import './rxjs-operators'; // not in module instead?

@Component({
  selector: 'http-lab',
  template: `
    <h1>HTTP Lab</h1>
    <hero-list></hero-list>
  `
})
export class AppComponent { }
