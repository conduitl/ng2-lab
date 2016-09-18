import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';

import { Logger } from '../logger.service';

@Injectable()
export class HeroService {
    constructor(private logger: Logger) { }

    getHeroes() {
        this.logger.log('Getting heroes ...'); 
        return HEROES; 
    }
}