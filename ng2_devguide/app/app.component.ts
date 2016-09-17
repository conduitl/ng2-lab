import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>Dev Guide</h1>
    <nav>
      <a routerLink="/user-input" routerLinkActive="active">User Input</a>
      <a routerLink="/forms" routerLinkActive="active">Forms</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }