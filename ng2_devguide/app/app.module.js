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
/* Routing */
var app_routing_1 = require('./app.routing');
/* Components */
var app_component_1 = require('./app.component');
/* Module Imports */
var hero_form_module_1 = require('./forms/hero-form.module');
var user_input_module_1 = require('./user-input/user-input.module');
var heroes_module_1 = require('./heroes/heroes.module');
var template_module_1 = require('./template-syntax/template.module');
var attr_module_1 = require('./attribute-directives/attr.module');
/* Providers */
var logger_service_1 = require('./logger.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                hero_form_module_1.HeroFormModule,
                user_input_module_1.UserInputModule,
                heroes_module_1.HeroesModule,
                template_module_1.TemplateModule,
                attr_module_1.AttrModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                logger_service_1.Logger
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map