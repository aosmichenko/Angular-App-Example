import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/service/api.service';

declare var $: any;

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {
  currentSection = 'Incoming shipment';
  currentShipmentImagesPopap = false;
  currentShipmentDocumentsPopap = false;
  currentShipmentProblemPopap = false;
  currentContainerDocumentsPopap = false;
  containerPop = '';
  shipmentsPop = '';
  containerProductDocumentsPopap = '';
  containerProductImagesPopap = '';
  containers = [];
  shipments = [];
  shipmentContainer;
  shipmentContainersList = [];
  containerProductsList = [];
  currentContainerDocumentsList = [];
  currentShipmentDocumentsList = [];
  currentShipmentImagesList = [];
  currentShipment: any = {};
  currentContainer: any = {};

  constructor(private apigClient: ApiService) { }

  ngOnInit() {
    this.apigClient.getShipmentsList().then((result) => {
      this.shipments = result;
    });

    this.apigClient.getContainers().then((result) => {
      this.containers = result;
    });

  }

  openShipmentsPop(id, s) {
    this.apigClient.getShipment(id).then((result) => {
      this.currentShipment = result;
      this.shipmentsPop = s;
      $('body').addClass('no-scroll');
    });

    this.apigClient.getShipmentContainersList(id).then((result) => {
      this.shipmentContainersList = result;
    });

    this.apigClient.getShipmentResourcesList(id).then((result) => {
      this.currentShipmentDocumentsList = result.filter((r) => r.type === 'document');
      this.currentShipmentImagesList = result.filter((r) => r.type === 'image');
    });
  }

  openImagesPopap() {
    this.currentShipmentImagesPopap = true;
    this.currentShipmentDocumentsPopap = false;
    this.currentShipmentProblemPopap = false;
  }

  closeImagesPopap() {
    this.currentShipmentImagesPopap = false;
  }

  openDocumentsPopap() {
    this.currentShipmentDocumentsPopap = true;
    this.currentShipmentImagesPopap = false;
    this.currentShipmentProblemPopap = false;
  }

  closeDocumentsPopap() {
    this.currentShipmentDocumentsPopap = false;
  }

  openProblemsPopap() {
    this.currentShipmentProblemPopap = true;
    this.currentShipmentDocumentsPopap = false;
    this.currentShipmentImagesPopap = false;
  }

  closeProblemsPopap() {
    this.currentShipmentProblemPopap = false;
  }

  openContainerDocumentsPopap() {
    this.currentContainerDocumentsPopap = true;
  }

  closeContainerDocumentsPopap() {
    this.currentContainerDocumentsPopap = false;
  }

  openContainerPop(id, s) {
    this.apigClient.getContainer(id).then((result) => {
      this.currentContainer = result;
      this.containerPop = s;
      $('body').addClass('no-scroll');
    });

    this.apigClient.getContainerProductsList(id).then((result) => {
      this.containerProductsList = result;
      this.containerProductsList.forEach((product) => {
        this.loadProductResources(id, product.id, product);
      });
    });

    this.apigClient.getContainerResourcesList(id).then((result) => {
      this.currentContainerDocumentsList = result.filter((r) => r.type === 'document');
    });
  }

  setShipmentContainer(id) {
    this.apigClient.setShipmentContainer(id, this.shipmentContainer).then((result) => {
      console.log(result);
    });
  }

  closeContainer(container) {
    this.apigClient.setContainerClose(container.id, container.number, container.sealNumber, container.BOLNumber, container.size).then((result) => {
      console.log(result);
    });
  }

  removeProductFromContainer(containerid, productid) {
    this.apigClient.removeProductFromContainer(containerid, productid).then((result) => {
      console.log(result);
    });
  }

  loadProductResources(containerid, productid, product) {
    this.apigClient.getExportContainerProductResources(containerid, productid).then((result) => {
      product.documentsList = result.filter((r) => r.type === 'document');
      product.imagesList = result.filter((r) => r.type === 'image');
    });
  }

  openContainerProductImagesPopap(containerProduct) {
    if (containerProduct.imagesList && containerProduct.imagesList.length) {
      this.containerProductImagesPopap = containerProduct.id + containerProduct.hsCode;
    }
    this.containerProductDocumentsPopap = '';
  }

  closeContainerProductImagesPopap() {
    this.containerProductImagesPopap = '';
  }

  openContainerProductDocumentsPopap(containerProduct) {
    if (containerProduct.documentsList && containerProduct.documentsList.length) {
      this.containerProductDocumentsPopap = containerProduct.id + containerProduct.hsCode;
    }
    this.containerProductImagesPopap = '';
  }

  closeContainerProductDocumentsPopap() {
    this.containerProductDocumentsPopap = '';
  }

  close() {
    setTimeout(() => {
      this.containerPop = '';
      this.shipmentsPop = '';
      this.containerProductDocumentsPopap = '';
      this.containerProductImagesPopap = '';
      $('body').removeClass('no-scroll');
    }, 100);

  }

  getTotalValue(packages = []) {
    return '$' + packages.reduce((totalValue, item) => {
      return totalValue + (item.value ? +item.value.replace('$', '') : 0);
    }, 0);
  }

}
