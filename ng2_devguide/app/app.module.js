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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
/* Routing */
var app_routing_1 = require('./app.routing');
/* Components */
var app_component_1 = require('./app.component');
var user_input_component_1 = require('./user-input.component');
var click_me_component_1 = require('./click-me.component');
var keyup_component_1 = require('./keyup.component');
var loop_back_component_1 = require('./loop-back.component');
var little_tour_component_1 = require('./little-tour.component');
/* 5. Forms */
var forms_component_1 = require('./forms/forms.component');
var hero_form_component_1 = require('./forms/hero-form.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                user_input_component_1.UserInputComponent,
                forms_component_1.FormsComponent,
                click_me_component_1.ClickMeComponent,
                keyup_component_1.KeyUpComponent,
                loop_back_component_1.LoopbackComponent,
                little_tour_component_1.LittleTourComponent,
                hero_form_component_1.HeroFormComponent // 5. Forms from here
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map