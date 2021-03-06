"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var KeyUpComponent = (function () {
    function KeyUpComponent() {
        this.values = '';
        this.values2 = '';
    }
    // without strong typing
    KeyUpComponent.prototype.onKey = function (value) {
        this.values += value + ' | ';
    };
    KeyUpComponent = __decorate([
        core_1.Component({
            selector: 'key-up',
            template: "\n        <h2>keyup examples</h2>\n        <h3>captures all keyup events</h3>\n        <input #box (keyup)=\"onKey(box.value)\">\n        <p>{{values}}</p>\n        <h3>press [enter] when done or click elsewhere on page</h3>\n        <input #box2 \n            (keyup.enter)=\"values2=box2.value\"\n            (blur)=\"values2=box2.value\">\n        <p>{{values2}}</p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], KeyUpComponent);
    return KeyUpComponent;
}());
exports.KeyUpComponent = KeyUpComponent;
//# sourceMappingURL=keyup.component.js.map