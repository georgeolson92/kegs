import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { TappedPipe } from './tapped.pipe';
import { NewKegComponent } from './new-keg.component';


@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegComponent, NewKegComponent],
  pipes: [TappedPipe],
  template: `
  <h1>Current Tap List</h1>
    <keg-display *ngFor="#currentKeg of kegList | tapped:filterTapped" [keg]="currentKeg">
    </keg-display>
  <h1>Untapped Beer</h1>
    <keg-display *ngFor="#currentKeg of kegList | tapped:filterUntapped" [keg]="currentKeg">
    </keg-display>
    <new-keg  (onSubmitNewKeg)="addKeg($event)"></new-keg>
    <edit-keg *ngIf="selectedTask" [task]="selectedTask"></edit-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public filterUntapped: boolean=false;
  public filterTapped: boolean=true;

  addKeg(keg: Keg){
    this.kegList.push(keg);
  }
}
