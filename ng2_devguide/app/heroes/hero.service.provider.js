"use strict";
var heroServiceFactory = function (logger, userService) {
    return new HeroService(logger, userService.user.isAuthorized);
};
exports.heroServiceProvider = {
    provide: HeroService,
    useFactory: heroServiceFactory,
    deps: [Logger, UserService]
};
//# sourceMappingURL=hero.service.provider.js.map