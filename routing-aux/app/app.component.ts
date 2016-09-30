import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>Auxiliary Routes</h1>
    <a [routerLink]="['']">Home</a>
    <a [routerLink]="['chat']">Chat</a>
    <a [routerLink]=" [ { outlets: { primary: 'home', aux: 'chat' } } ] ">Open Chat</a>
    <a [routerLink]=" [ { outlets: { aux: null } } ] ">Close Chat</a>
    <br />
    <router-outlet></router-outlet>
    <router-outlet name="aux"></router-outlet>
  `
})
export class AppComponent { }
