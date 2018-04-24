import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/service/api.service';

declare var $: any;

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  currentSection = 'Containers';
  containerProductImagesPopap = '';
  containerProductDocumentsPopap = '';
  containerPop = '';
  productsPop = '';
  containers = [];
  products = [];
  containerProductsList = [];
  currentContainerDocumentsList = [];
  currentProductDocumentsList = [];
  currentContainer: any = {};
  currentProduct: any = {};
  currentContainerDocumentsPopap = false;
  currentProductProblemPopap = false;
  currentProductDocumentsPopap = false;
  currentContainerWhlocations = [];

  constructor(private apigClient: ApiService) { }

  ngOnInit() {
    this.apigClient.getImportContainers().then((result) => {
      this.containers = result;
    });

    this.apigClient.getImportProductsList().then((result) => {
      this.products = result;
    });
  }

  openContainerPop(id, s) {
    this.apigClient.getImportContainer(id).then((result) => {
      this.currentContainer = result;
      this.containerPop = s;
      $('body').addClass('no-scroll');
    });

    this.apigClient.getImportContainerProductsList(id).then((result) => {
      this.containerProductsList = result;
      this.containerProductsList.forEach((product) => {
        this.loadProductResources(id, product.id, product);
      });
    });

    this.apigClient.getContainerResourcesList(id).then((result) => {
      this.currentContainerDocumentsList = result.filter((r) => r.type === 'document');
    });

    this.apigClient.getWhlocations(id).then((result) => {
      this.currentContainerWhlocations = result;
    });
  }

  openContainerDocumentsPopap() {
    this.currentContainerDocumentsPopap = true;
  }

  closeContainerDocumentsPopap() {
    this.currentContainerDocumentsPopap = false;
  }

  approveContainer(container) {
    this.apigClient.setContainerApprove(container.id, container.manifestNumber, container.wh.id).then((result) => {
      console.log(result);
    });
  }

  openProductsPop(id, s) {
    this.apigClient.getImportProduct(id).then((result) => {
      this.currentProduct = result;
      this.productsPop = s;
      $('body').addClass('no-scroll');
    });

    this.apigClient.getImportProductResourcesList(id).then((result) => {
      this.currentProductDocumentsList = result.filter((r) => r.type === 'document');
    });
  }

  approveProduct(id) {
    this.apigClient.setProductApprove(id).then((result) => {
      console.log(result);
    });
  }

  openProblemsPopap() {
    this.currentProductProblemPopap = true;
    this.currentProductDocumentsPopap = false;
  }

  closeProblemsPopap() {
    this.currentProductProblemPopap = false;
  }

  openDocumentsPopap() {
    this.currentProductDocumentsPopap = true;
    this.currentProductProblemPopap = false;
  }

  closeDocumentsPopap() {
    this.currentProductDocumentsPopap = false;
  }

  loadProductResources(containerid, productid, product) {
    this.apigClient.getImportContainerProductResources(containerid, productid).then((result) => {
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
      this.productsPop = '';
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
