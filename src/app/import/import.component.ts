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
  containerPop = '';
  productsPop = '';
  containers = [];
  products = [];
  containerProductsList = [];
  currentContainerDocumentsList = [];
  currentProductDocumentsList = [];
  currentContainer = {};
  currentProduct = {};
  currentContainerDocumentsPopap = false;
  currentProductProblemPopap = false;
  currentProductDocumentsPopap = false;

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

  close() {
    setTimeout(() => {
      this.containerPop = '';
      this.productsPop = '';
      $('body').removeClass('no-scroll');
    }, 100);
  }

}
