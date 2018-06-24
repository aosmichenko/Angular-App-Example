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
      this.calculationResult = result ? result : this.createNewCalculationResult();
    });
  }

  clearAll() {
    this.model = this.createNewShipping();
    this.calculationResult = this.createNewCalculationResult();
  }

  createNewCalculationResult(): CalculationResult {
    return {
      productPrice: undefined,
      deliveryTimeDays: undefined,
      shippingCosts: {
        international: undefined,
        domestic: undefined
      },
      taxes: {
        salesTax: undefined,
        vat: undefined
      },
      destinationWH: {
        name: undefined,
        addr1: undefined,
        addr2: undefined,
        city: undefined,
        state: undefined,
        zip: undefined,
        Phone: undefined
      }
    };
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
