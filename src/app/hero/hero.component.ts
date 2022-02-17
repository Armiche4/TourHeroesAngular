import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-plantilla',
  template:`
  <h1>{{title}}</h1>
  <h2>My favorite hero is: {{myHero}}</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.name }}
    </li>
  </ul>
`,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Plantilla';
  heroes:Hero[] = [
   {"id":1, "name":'Windstorm'},
   {"id":11, "name":'Bombasto'},
   {"id":12, "name":'Magneta'},
   {"id":13, "name":'Tornado'},

  ];
  myHero = this.heroes[0];

}
