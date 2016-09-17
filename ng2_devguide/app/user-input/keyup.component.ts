import { Component } from '@angular/core';
@Component({
    selector: 'key-up',
    template: `
        <h2>keyup examples</h2>
        <h3>captures all keyup events</h3>
        <input #box (keyup)="onKey(box.value)">
        <p>{{values}}</p>
        <h3>press [enter] when done or click elsewhere on page</h3>
        <input #box2 
            (keyup.enter)="values2=box2.value"
            (blur)="values2=box2.value">
        <p>{{values2}}</p>
    `
})
export class KeyUpComponent {
    values = '';
    values2 = '';

    // without strong typing
    onKey(value: string) {
        this.values += value + ' | ';
    }
}