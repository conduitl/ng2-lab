import { Component } from '@angular/core';

@Component({
    selector: 'template-lab',
    templateUrl: 'app/template-syntax/template-lab.component.html' 
})
export class TemplateLabComponent { 
    hero = {
        firstName: 'Tom'
    }
    heroImageUrl = 'http://cache.lego.com/r/catalogs/-/media/catalogs/characters/dc/mugshots/mugshot%202016/76061_1to1_mf_batman_336.png?l.r2=-798905063';
    isUnchanged = true;
}