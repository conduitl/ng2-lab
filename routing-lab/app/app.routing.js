"use strict";
var router_1 = require('@angular/router');
var crisis_list_component_1 = require('./crisis-list.component');
var hero_list_component_1 = require('./hero-list.component');
var hero_detail_component_1 = require('./hero-detail.component');
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
    { path: 'heroes',
        component: hero_list_component_1.HeroListComponent,
        data: {
            title: 'Heroes List'
        }
    },
    {
        path: 'hero/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map