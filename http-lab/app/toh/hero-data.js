"use strict";
var HeroData = (function () {
    function HeroData() {
    }
    HeroData.prototype.createDb = function () {
        var heroes = [
            { id: '1', name: 'Windstorm' },
            { id: '2', name: 'Bombasto' },
            { id: '3', name: 'Magneta' },
            { id: '4', name: 'Tornado' }
        ];
        return { heroes: heroes };
    };
    return HeroData;
}());
exports.HeroData = HeroData;
//# sourceMappingURL=hero-data.js.map