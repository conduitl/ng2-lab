"use strict";
var router_1 = require('@angular/router');
var crisis_list_component_1 = require('./crisis-list.component');
var page_not_found_component_1 = require('./page-not-found.component');
var appRoutes = [
    {
        path: '',
        redirectTo: 'crisis-list',
        pathMatch: 'full'
    },
    {
        path: 'crisis-list', component: crisis_list_component_1.CrisisListComponent
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map