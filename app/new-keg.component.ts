import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="task-form">
    <h3>Add a new keg:</h3>
    <input placeholder="Name" #newName>
    <input placeholder="Brand" #newBrand>
    <input placeholder="Price" #newPrice>
    <input placeholder="ABV" #newAlcoholByVolume>
    <button (click)="addKeg(newName, newBrand, newPrice, newAlcoholByVolume)" >Add</button>
  </div>
  `
})
export class NewKegComponent{
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userNewAlcoholByVolume: HTMLInputElement){
    var newKeg = new Keg(userName.value, userBrand.value, parseInt(userPrice.value), parseInt(userNewAlcoholByVolume.value));
    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userNewAlcoholByVolume.value = "";
    this.onSubmitNewKeg.emit(newKeg);
  }
}
