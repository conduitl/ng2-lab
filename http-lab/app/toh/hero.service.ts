import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes'; //Url to web API

    constructor (private http: Http) {}

    getHeroes(): Observable<Hero[]> {
        return this.http.get(this.heroesUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        let errMsg = (error.message ) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}