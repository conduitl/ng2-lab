"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var chat_component_1 = require('./chat.component');
var appRoutes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: home_component_1.HomeComponent
    },
    {
        path: 'chat', component: chat_component_1.ChatComponent
    },
    {
        path: 'chat', component: chat_component_1.ChatComponent, outlet: "aux"
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map