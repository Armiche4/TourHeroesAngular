import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //template: `
    //<h1>{{title}}</h1>
    //<h2>My favorite hero es: {{myHero}}</h2>
    //`
})
export class AppComponent {
  title = 'er titulo';
  myHero = 'Lobezno';
}
