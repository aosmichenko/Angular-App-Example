import {Package} from './package';

export interface ShippingModel {
  category: string;
  price: string;
  localShippingCost: string;
  localSalesTax: string;
  origin: string;
  dest: string;
  packages: Package[];
}
