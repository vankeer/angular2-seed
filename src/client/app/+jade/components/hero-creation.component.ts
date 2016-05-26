import { Component, EventEmitter, Output } from '@angular/core';
import { Hero } from "../model/hero.model";

@Component({
  moduleId: module.id,
  selector: 'hero-creation',
  templateUrl: './hero-creation.component.html',
  styleUrls: ['./hero-creation.component.css']
})
export class HeroCreationComponent {
  hero: Hero;
  @Output() onCreate: EventEmitter<Hero>;

  constructor() {
    this.initHero();
    this.onCreate = new EventEmitter<Hero>();
  }

  changeName(newName: string) {
    this.hero.name = newName;
  }

  changePowerLevel(newPowerLevel: number) {
    this.hero.powerLevel = newPowerLevel;
  }

  createHero() {
    if (this.hero.name && this.hero.powerLevel) {
      this.onCreate.emit(this.hero);
      this.initHero();
    }
  }

  private initHero() {
    this.hero = {
      name: "",
      powerLevel: 0
    };
  }
}
