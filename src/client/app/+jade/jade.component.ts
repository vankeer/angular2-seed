import { Component } from '@angular/core';
import {Hero} from "./model/hero.model";
import {HeroDetailComponent} from "./components/hero-detail.component";
import {HeroCreationComponent} from "./components/hero-creation.component";

/**
 * This class represents the lazy loaded JadeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-jade',
  templateUrl: 'jade.component.html',
  styleUrls: ['jade.component.css'],
  directives: [HeroDetailComponent, HeroCreationComponent]
})
export class JadeComponent {
  heroes: Hero[];

  constructor() {
    this.heroes = [
      {
        name: "Spiderman",
        powerLevel: 1
      },
      {
        name: "Superman",
        powerLevel: 10
      },
      {
        name: "Jademan",
        powerLevel: 9001
      }
    ];
  }

  newHero(hero: Hero) {
    console.log(hero);
    this.heroes.push(hero);
  }
}
