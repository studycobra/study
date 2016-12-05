(function(app) {
  'use strict';

  var HEROES = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
  ];

  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: 
        '<h1>{{title}}</h1>' +
        '<h2>My Heroes</h2>' +
        '<ul class="heroes">' +
        '<li *ngFor="let hero of heroes"' +
        '[class.selected]="hero === selectedHero"' +
        '(click)="onSelect(hero)">' +
        '<span class="badge">{{hero.id}}</span> {{hero.name}}' +
        '</li>' +
        '</ul>' +
        '<my-hero-detail [hero]="selectedHero"></my-hero-detail>'
    })
    .Class({
      constructor: function() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
        this.selectedHero = new app.Hero(11, "Mr. Nice");
        this.onSelect = function(hero) {
          this.selectedHero = hero;
        };
      }
    });
})(window.app || (window.app = {}));


