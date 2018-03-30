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

  constructor(private apigClient: ApiService) { }

  ngOnInit() {
    this.apigClient.getImportContainers().then((result) => {
      this.containers = result;
      this.containers.forEach((container) => {
        container.eta = this.reformatDateStr(container.eta);
      });
    });

    this.apigClient.getImportProductsList().then((result) => {
      this.products = result;
      this.products.forEach((product) => {
        product.arrivedDate = this.reformatDateStr(product.arrivedDate);
        product.customsStatusDate = this.reformatDateStr(product.customsStatusDate);
      });
    });
  }

  openContainerPop(id, s) {
    this.apigClient.getImportContainer(id).then((result) => {
      this.currentContainer = result;
      this.currentContainer.eta = this.reformatDateStr(this.currentContainer.eta);
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
  }

  openContainerDocumentsPopap() {
    this.currentContainerDocumentsPopap = true;
  }

  closeContainerDocumentsPopap() {
    this.currentContainerDocumentsPopap = false;
  }

  approveContainer(id) {
    this.apigClient.setContainerApprove(id).then((result) => {
      console.log(result);
    });
  }

  openProductsPop(id, s) {
    this.apigClient.getImportProduct(id).then((result) => {
      this.currentProduct = result;
      this.currentProduct.customsStatusDate = this.reformatDateStr(this.currentProduct.customsStatusDate);
      this.currentProduct.arrivedDate = this.reformatDateStr(this.currentProduct.arrivedDate);
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

  reformatDateStr(dateStr) {
    if (!dateStr) {
      return dateStr;
    }
    const dateArr = dateStr.split('-');
    return [dateArr[2], dateArr[0], dateArr[1]].join('-');
  }

}
