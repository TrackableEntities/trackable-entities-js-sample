import { Component, Input, OnInit } from '@angular/core';
import { ITrackable, TrackableSet, TrackingState } from 'trackable-entities';

import { Product } from '../models/product';


@Component({
  selector: 'app-child-trackable',
  templateUrl: './child-trackable.component.html',
  styleUrls: ['./child-trackable.component.css']
})
export class ChildTrackableComponent implements OnInit {

  @Input() products: TrackableSet<Product>;

  constructor() { }

  ngOnInit() {
  }

  stringifyState(state: TrackingState): string {
    switch (state) {
      case TrackingState.Added:
        return 'Added';
        case TrackingState.Deleted:
        return 'Deleted';
        case TrackingState.Modified:
        return 'Modified';
      default:
      return 'Unchanged';
    }
  }

  getModified(entity: ITrackable) {
    return entity.modifiedProperties.size > 0 ? `(${[...entity.modifiedProperties][0]})` : '';
  }
}
