import { Component } from 'angular2/core';
import { Keg } from './keg.model';
import { EditKegComponent } from './edit-keg.component';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  directives: [EditKegComponent],
  template: `
  <div [class.low]="keg.pints < 10">
    <h2>{{ keg.name }}</h2>
      <h4>{{ keg.brand }}</h4>
      <h4>Price: &#36;{{ keg.price }}</h4>
      <h4>ABV: {{ keg.alcohol }}&#37;</h4>
      <h4>Pints Left: {{ keg.pints }}</h4>
    <button (click)="editKeg()">Edit</button>
    <edit-keg *ngIf="beingEdited" [keg]="keg"></edit-keg>
    <button (click)="tapKeg()">Tap It!</button>
    <button (click)="pourPint()">Pour pint</button>
  </div>
  `
})
export class KegComponent {
  public keg: Keg;
  public beingEdited: boolean = false;
  tapKeg() {
    this.keg.tap();
  }
  pourPint() {
    this.keg.pints--;
  }
  editKeg() {
    this.beingEdited = (!this.beingEdited);
  }
}
