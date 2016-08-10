import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div>
    <h2>{{ keg.name }}</h2>
      <h2>{{ keg.brand }}</h2>
      <h2>Price: &#36;{{ keg.price }}</h2>
      <h2>ABV: {{ keg.alcohol }}&#37;</h2>
    <button (click)="tapKeg()">Tap It!</button>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
  tapKeg() {
    this.keg.tap();
  }
}
