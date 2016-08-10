import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';


@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <keg-list [kegList]="kegs"></keg-list>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
      var newKeg = new Keg("Farmhouse Ale", "Commons", 15, 8);
      var newKeg2 = new Keg("Pale Ale", "Deschutes", 8, 6);
      var newKeg3 = new Keg("Pilsner", "Bear Republic", 9, 5);
      newKeg3.tap();
      this.kegs = [newKeg, newKeg2, newKeg3];
  }
}
