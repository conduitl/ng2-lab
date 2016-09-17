import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>Dev Guide</h1>
    <nav>
      <a routerLink="/user-input" routerLinkActive="active">User Input</a>
      <a routerLink="/hero-form" routerLinkActive="active">Forms</a>
      <a routerLink="/di" routerLinkActive="active">Dependency Injection</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }