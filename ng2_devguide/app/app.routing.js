"use strict";
var router_1 = require('@angular/router');
var user_input_component_1 = require('./user-input/user-input.component');
var hero_form_component_1 = require('./forms/hero-form.component');
var heroes_component_1 = require('./heroes/heroes.component');
var appRoutes = [
    {
        path: 'user-input', component: user_input_component_1.UserInputComponent
    },
    {
        path: 'hero-form', component: hero_form_component_1.HeroFormComponent
    },
    {
        path: 'di', component: heroes_component_1.HeroesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map