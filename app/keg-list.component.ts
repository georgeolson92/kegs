import { Component} from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { TappedPipe } from './tapped.pipe';


@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  directives: [KegComponent],
  pipes: [TappedPipe],
  template: `
  <h1>Current Tap List</h1>
    <keg-display *ngFor="#currentKeg of kegList | tapped:filterTapped" [keg]="currentKeg">
    </keg-display>
  <h1>Untapped Beer</h1>
    <keg-display *ngFor="#currentKeg of kegList | tapped:filterUntapped" [keg]="currentKeg">
    </keg-display>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public filterUntapped: boolean=false;
  public filterTapped: boolean=true;

}
