import { TrackingState } from 'trackable-entities';
import { Product } from './models/product';
import { Component } from '@angular/core';
import { TrackableSet } from 'trackable-entities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trackable Entities Sample';
  tracking = false;

  foodEntities = new TrackableSet(
    new Product(0, 'Bacon', 0),
    new Product(0, 'Lettuce', 0),
    new Product(0, 'Tomatoes', 0),
  );

  toggleTracking() {
    this.foodEntities.tracking = !this.foodEntities.tracking;
    this.tracking = this.foodEntities.tracking;
  }

  addProduct(food: string) {
    this.foodEntities.add(new Product(0, food, 0));
  }

  increasePrice() {
    this.foodEntities.forEach(p => p.unitPrice = p.unitPrice + 1);
  }

  deleteProduct() {
    if (this.tracking === true) {
      const deleted = [...this.foodEntities].filter(p => p.trackingState !== TrackingState.Deleted);
      if (deleted.length > 0) {
        const last = deleted[deleted.length - 1];
        last.trackingState = TrackingState.Deleted;
      }
    }
  }
}
