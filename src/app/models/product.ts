import { TrackableEntity } from 'trackable-entities';
import { Category } from './category';

export class Product extends TrackableEntity {
  productId: number;
  productName: string;
  unitPrice: number;
  categoryId: number;
  category: Category;

  constructor();
  constructor(productId: number, productName: string, unitPrice: number, category?: Category);
  constructor(productId?: number, productName?: string, unitPrice?: number, category?: Category) {
    super();
    this.productId = productId;
    this.productName = productName;
    this.unitPrice = unitPrice;
    this.category = category;
    return super.proxify(this);
  }
}
