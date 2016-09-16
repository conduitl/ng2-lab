import { Component } from '@angular/core';
@Component({
    selector: 'key-up',
    template: `
        <input #box (keyup)="onKey(box.value)">
        <p>{{values}}</p>
    `
})
export class KeyUpComponent {
    values = '';

    // without strong typing
    onKey(value: string) {
        this.values += value + ' | ';
    }
}