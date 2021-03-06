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
var TemplateLabComponent = (function () {
    function TemplateLabComponent() {
        this.hero = {
            firstName: 'Tom'
        };
        this.heroImageUrl = 'http://cache.lego.com/r/catalogs/-/media/catalogs/characters/dc/mugshots/mugshot%202016/76061_1to1_mf_batman_336.png?l.r2=-798905063';
        this.isUnchanged = true;
    }
    TemplateLabComponent = __decorate([
        core_1.Component({
            selector: 'template-lab',
            templateUrl: 'app/template-syntax/template-lab.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TemplateLabComponent);
    return TemplateLabComponent;
}());
exports.TemplateLabComponent = TemplateLabComponent;
//# sourceMappingURL=template-lab.component.js.map