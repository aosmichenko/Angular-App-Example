export interface CalculationResult {
  productPrice: number;
  deliveryTimeDays: number;
  shippingCosts: {
    international: number;
    domestic: number;
  };
  taxes: {
    salesTax: number;
    vat: number;
  };
  destinationWH: {
    name: string;
    addr1: string;
    addr2: string;
    city: string;
    state: string;
    zip: string;
    Phone: string;
  };
}
