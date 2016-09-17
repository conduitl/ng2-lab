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
var common_1 = require('@angular/common');
var user_input_component_1 = require('./user-input.component');
var click_me_component_1 = require('./click-me.component');
var keyup_component_1 = require('./keyup.component');
var loop_back_component_1 = require('./loop-back.component');
var little_tour_component_1 = require('./little-tour.component');
var UserInputModule = (function () {
    function UserInputModule() {
    }
    UserInputModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                user_input_component_1.UserInputComponent,
                click_me_component_1.ClickMeComponent,
                keyup_component_1.KeyUpComponent,
                loop_back_component_1.LoopbackComponent,
                little_tour_component_1.LittleTourComponent,
            ],
            exports: [
                user_input_component_1.UserInputComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UserInputModule);
    return UserInputModule;
}());
exports.UserInputModule = UserInputModule;
//# sourceMappingURL=user-input.module.js.map