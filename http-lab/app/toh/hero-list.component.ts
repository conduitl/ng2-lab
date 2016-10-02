import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-list',
    templateUrl: 'app/toh/hero-list.component.html'
})
export class HeroListComponent implements OnInit {
    errorMessage: string;
    heroes: Hero[];
    mode = 'Observable';

    constructor( private heroService: HeroService ) {}

    ngOnInit() { this.getHeroes(); }

    getHeroes() {
        this.heroService.getHeroes()
            .subscribe(
                heroes => this.heroes = heroes,
                error => this.errorMessage = <any>error
            );
    }

    // addHero (name: string) {
    //     if (!name) { return; }
    //     this.heroService.addHero(name)
    //         .subscribe(
    //             hero => this.heroes.push(hero),
    //             error => this.errorMessage = <any>error
    //         );
    // }
}