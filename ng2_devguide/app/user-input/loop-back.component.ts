import { Component } from '@angular/core';
@Component({
    selector: 'loop-back',
    template: `
        <h3>loopback example</h3>
        <input #box (keyup)="0">
        <p>{{box.value}}</p>
    `
})
export class LoopbackComponent { } 