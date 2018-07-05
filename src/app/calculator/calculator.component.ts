import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/service/api.service';
import {ShippingModel} from '../interfaces/shipping-model';
import {Package} from '../interfaces/package';
import {CalculationResult} from '../interfaces/calculation-result';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  categories: any[] = [];
  originCountriesList: any[] = [];
  destCountriesList: any[] = [];
  showTaxes = false;
  showShippingCosts = false;
  model: ShippingModel;
  calculationResult: CalculationResult;

  constructor(private apigClient: ApiService) { }

  ngOnInit() {
    this.model = this.createNewShipping();
    this.calculationResult = this.createNewCalculationResult();
    this.apigClient.categoriesGet().then((result) => {
      this.categories = result;
    });
    this.apigClient.countriesOriginGet().then((result) => {
      this.originCountriesList = result;
    });
    this.apigClient.countriesDestGet().then((result) => {
      this.destCountriesList = result;
    });
  }

  addPackage() {
    this.model.packages.push(this.createNewPackage());
  }

  removePackage(index) {
    this.model.packages.splice(index, 1);
  }

  calculate() {
    this.apigClient.makeQuoteProductPost(this.model).then((result: CalculationResult) => {
      this.calculationResult = result ? this.createNewCalculationResult(result) : this.createNewCalculationResult();
    });
  }

  clearAll() {
    this.model = this.createNewShipping();
    this.calculationResult = this.createNewCalculationResult();
  }

  createNewCalculationResult(data?): CalculationResult {
    const results = {
      totalTaxes: 0,
      totalShipping: 0,
      totalPrice: 0,
      fullAdress: '',
      productPrice: data && data.productPrice || 0,
      deliveryTimeDays: data && data.deliveryTimeDays || 0,
      shippingCosts: {
        international: data && data.shippingCosts && data.shippingCosts.international || 0,
        domestic: data && data.shippingCosts && data.shippingCosts.domestic || 0
      },
      taxes: {
        salesTax: data && data.taxes && data.taxes.salesTax || 0,
        vat: data && data.taxes && data.taxes.vat || 0
      },
      destinationWH: {
        name: data && data.destinationWH && data.destinationWH.name || undefined,
        addr1: data && data.destinationWH && data.destinationWH.addr1 || undefined,
        addr2: data && data.destinationWH && data.destinationWH.addr2 || undefined,
        city: data && data.destinationWH && data.destinationWH.city || undefined,
        state: data && data.destinationWH && data.destinationWH.state || undefined,
        zip: data && data.destinationWH && data.destinationWH.zip || undefined,
        Phone: data && data.destinationWH && data.destinationWH.Phone || undefined
      }
    };

    const address = [];
    if (results.destinationWH.city) {address.push(results.destinationWH.city); }
    if (results.destinationWH.state) {address.push(results.destinationWH.state); }
    if (results.destinationWH.zip) {address.push(results.destinationWH.zip); }
    results.fullAdress = address.join(',');

    results.totalTaxes = results.taxes.salesTax + results.taxes.vat;
    results.totalShipping = results.shippingCosts.international + results.shippingCosts.domestic;
    results.totalPrice = results.productPrice + results.totalTaxes + results.totalShipping;

    return results;
  }

  createNewShipping(): ShippingModel {
    return {
      'category': '',
      'price': '',
      'localShippingCost': '',
      'origin': '',
      'dest': '',
      'packages': [
        this.createNewPackage()
      ]
    };
  }

  createNewPackage(): Package {
    return {
      'height': '',
      'width': '',
      'depth': '',
      'weight': ''
    };
  }

}
