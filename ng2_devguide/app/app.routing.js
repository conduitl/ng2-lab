"use strict";
var router_1 = require('@angular/router');
var user_input_component_1 = require('./user-input.component');
var forms_component_1 = require('./forms/forms.component');
var appRoutes = [
    {
        path: 'user-input', component: user_input_component_1.UserInputComponent
    },
    {
        path: 'forms', component: forms_component_1.FormsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map