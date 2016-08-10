import { Component } from 'angular2/core';

export class Keg {
  public tapped: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public alcohol: number){}
    tap() {
      this.tapped = true;
  }
}
