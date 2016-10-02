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
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/map');
require('rxjs/add/operator/debounceTime');
var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.baseWeatherURL = 'http://api.openweathermap.org/data/2.5/find?q=';
        this.urlSuffix = "&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73";
        this.searchInput = new forms_1.FormControl('');
        this.searchInput.valueChanges
            .debounceTime(200)
            .switchMap(function (city) { return _this.getWeather(city); })
            .subscribe(function (res) {
            console.log('Observable response');
            console.log(res);
            if (res['cod'] === '404')
                return;
            if (!res.list) {
                _this.temperature = 'City is not found';
            }
            else {
                _this.temperature =
                    ("Current temperature is " + res.list[0].main.temp + "F, ") +
                        ("humidity: " + res.list[0].main.humidity + "%");
            }
        }, function (err) { return console.log("Can't get weather. Error code: %s, URL: %s", err.message, err.url); }, function () { return console.log("Weather is retrieved"); });
    }
    AppComponent.prototype.getWeather = function (city) {
        return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
            .map(function (res) {
            console.log(res);
            return res.json();
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h2>Observable weather</h2>\n    <input type=\"text\" placeholder=\"Enter city\" [formControl]=\"searchInput\">\n    <h3>{{ temperature}}</h3>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map