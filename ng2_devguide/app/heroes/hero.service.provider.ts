let heroServiceFactory = (logger: Logger, userService: UserService) => {
    return new HeroService(logger, userService.user.isAuthorized);
};

export let heroServiceProvider = 
    {
        provide: HeroService,
        useFactory: heroServiceFactory,
        deps: [Logger, UserService]
    };