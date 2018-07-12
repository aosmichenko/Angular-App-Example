export interface CalculationResult {
  productPrice: number;
  totalPrice: number;
  totalTaxes: number;
  totalShipping: number;
  fullAdress: string;
  deliveryTimeDays: number;
  shippingCosts: {
    international: number;
    domestic: number;
  };
  taxes: {
    salesTax: number;
    customs: number;
    buying: number;
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