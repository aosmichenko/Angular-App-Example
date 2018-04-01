import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/service/api.service';

declare var $: any;

@Component({
  selector: 'app-last-mile',
  templateUrl: './last-mile.component.html',
  styleUrls: ['./last-mile.component.css']
})
export class LastMileComponent implements OnInit {
  deliveryPop = '';
  deliveries = [];
  currentDeliveryDocumentsList = [];
  currentDelivery: any = {};
  currentDeliveryDocumentsPopap = false;

  constructor(private apigClient: ApiService) { }

  ngOnInit() {
    this.apigClient.getDeliveries().then((result) => {
      this.deliveries = result;
    });
  }

  openDeliveryPop(id, s) {
    this.apigClient.getDelivery(id).then((result) => {
      this.currentDelivery = result;
      this.deliveryPop = s;
      $('body').addClass('no-scroll');
    });

    this.apigClient.getDeliveryResourcesList(id).then((result) => {
      this.currentDeliveryDocumentsList = result.filter((r) => r.type === 'document');
    });
  }

  saveDelivery(id) {
    console.log(this.currentDelivery.scheduledDeliveryDate);
    this.apigClient.setDeliverySave(id).then((result) => {
      console.log(result);
    });
  }

  openDeliveryDocumentsPopap() {
    this.currentDeliveryDocumentsPopap = true;
  }

  closeDeliveryDocumentsPopap() {
    this.currentDeliveryDocumentsPopap = false;
  }

  close() {
    setTimeout(() => {
      this.deliveryPop = '';
      $('body').removeClass('no-scroll');
    }, 100);
  }

}
