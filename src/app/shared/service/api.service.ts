import { Injectable } from '@angular/core';
declare var apigClientFactory;

@Injectable()
export class ApiService {
  apigClient;

  constructor() {
    this.apigClient = apigClientFactory.newClient();
  }

  getContainers() {
    return this.apigClient.v1ExportContainersGet().then((result) => {
      return result.data.containers;
    }, (error) => {
      console.log(error);
    });
  }

  getShipmentsList() {
    return this.apigClient.v1ExportShipmentsGet().then((result) => {
      return result.data.shipments;
    }, (error) => {
      console.log(error);
    });
  }

  getShipment(shipmentid) {
    return this.apigClient.v1ExportShipmentsShipmentidGet({shipmentid}).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  getShipmentContainersList(shipmentid) {
    return this.apigClient.v1ExportShipmentsShipmentidContainersGet({shipmentid}).then((result) => {
      return result.data.containers;
    }, (error) => {
      console.log(error);
    });
  }

  setShipmentContainer(shipmentid, containerid) {
    const body = {'status': '3', 'containerid': containerid};
    return this.apigClient.v1ExportShipmentsShipmentidPatch({shipmentid}, body).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  removeProductFromContainer(containerid, productid) {
    return this.apigClient.v1ExportContainersContaineridProductsProductidPatch({containerid, productid}, {'status': '0'}).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  getShipmentResourcesList(shipmentid) {
    return this.apigClient.v1ExportShipmentsShipmentidResourcesGet({shipmentid}).then((result) => {
      return result.data.resources;
    }, (error) => {
      console.log(error);
    });
  }

  getContainerResourcesList(containerid) {
    return this.apigClient.v1ExportContainersContaineridResourcesGet({containerid}).then((result) => {
      return result.data.resources;
    }, (error) => {
      console.log(error);
    });
  }

  getContainer(containerid) {
    return this.apigClient.v1ExportContainersContaineridGet({containerid}).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  getContainerProductsList(containerid) {
    return this.apigClient.v1ExportContainersContaineridProductsGet({containerid}).then((result) => {
      return result.data.products;
    }, (error) => {
      console.log(error);
    });
  }

  setContainerClose(containerid, number, sealNumber, BOLNumber, size) {
    const body = {
      'status': '2',
      'number': number,
      'sealNumber': sealNumber,
      'size': size,
      'BOLNumber': BOLNumber
    };
    return this.apigClient.v1ExportContainersContaineridPatch({containerid}, body).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  getImportContainers() {
    return this.apigClient.v1ImportContainersGet().then((result) => {
      return result.data.containers;
    }, (error) => {
      console.log(error);
    });
  }

  getImportContainer(containerid) {
    return this.apigClient.v1ImportContainersContaineridGet({containerid}).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  getWhlocations(containerid) {
    return this.apigClient.v1ImportContainersContaineridWhlocationsGet({containerid}).then((result) => {
      return result.data.whlocations;
    }, (error) => {
      console.log(error);
    });
  }

  getImportContainerResourcesList(containerid) {
    return this.apigClient.v1ImportContainersContaineridResourcesGet({containerid}).then((result) => {
      return result.data.resources;
    }, (error) => {
      console.log(error);
    });
  }

  setContainerApprove(containerid, manifestNumber, whId) {
    const body = {
      'status': '3',
      'manifestNumber': manifestNumber,
      'wh': {'id': whId}
    };
    return this.apigClient.v1ImportContainersContaineridPatch({containerid}, body).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  getImportContainerProductsList(containerid) {
    return this.apigClient.v1ImportContainersContaineridProductsGet({containerid}).then((result) => {
      return result.data.products;
    }, (error) => {
      console.log(error);
    });
  }

  getImportProductsList() {
    return this.apigClient.v1ImportProductsGet().then((result) => {
      return result.data.products;
    }, (error) => {
      console.log(error);
    });
  }

  getImportProduct(productid) {
    return this.apigClient.v1ImportProductsProductidGet({productid}).then((result) => {
      return result.data.shipments;
    }, (error) => {
      console.log(error);
    });
  }

  setProductApprove(productid) {
    return this.apigClient.v1ImportProductsProductidPatch({productid}, {'status': '3'}).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  getImportProductResourcesList(productid) {
    return this.apigClient.v1ImportProductsProductidResourcesGet({productid}).then((result) => {
      return result.data.resources;
    }, (error) => {
      console.log(error);
    });
  }

  getDeliveries() {
    return this.apigClient.v1LastmileDeliveriesGet().then((result) => {
      return result.data.deliveries;
    }, (error) => {
      console.log(error);
    });
  }

  getDelivery(deliveryid) {
    return this.apigClient.v1LastmileDeliveriesDeliveryidGet({deliveryid}).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  setDeliverySave(deliveryid) {
    return this.apigClient.v1LastmileDeliveriesDeliveryidPatch({deliveryid}, {'status': '2'}).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  getDeliveryResourcesList(deliveryid) {
    return this.apigClient.v1LastmileDeliveriesDeliveryidResourcesGet({deliveryid}).then((result) => {
      return result.data.resources;
    }, (error) => {
      console.log(error);
    });
  }

  getImportContainerProductResources(containerid, productid) {
    return this.apigClient.v1ImportContainersContaineridProductsProductidResourcesGet({containerid, productid}).then((result) => {
      return result.data.resources;
    }, (error) => {
      console.log(error);
    });
  }

  getExportContainerProductResources(containerid, productid) {
    return this.apigClient.v1ExportContainersContaineridProductsProductidResourcesGet({containerid, productid}).then((result) => {
      return result.data.resources;
    }, (error) => {
      console.log(error);
    });
  }

}
