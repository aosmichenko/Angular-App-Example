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
    return this.apigClient.v1ExportShipmentsShipmentidGet({shipmentid: shipmentid}).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  getShipmentContainersList(shipmentid) {
    return this.apigClient.v1ExportShipmentsShipmentidContainersGet({shipmentid: shipmentid}).then((result) => {
      return result.data.containers;
    }, (error) => {
      console.log(error);
    });
  }

  setShipmentContainer(shipmentid, containerid) {
    const body = {'status': '3', 'containerid': containerid};
    return this.apigClient.v1ExportShipmentsShipmentidPatch({shipmentid: shipmentid}, body).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  removeProductFromContainer(containerid, productid) {
    return this.apigClient.v1ExportContainersContaineridProductsProductidPatch({containerid: containerid, productid: productid}, {'status': '0'}).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  getShipmentResourcesList(shipmentid) {
    return this.apigClient.v1ExportShipmentsShipmentidResourcesGet({shipmentid: shipmentid}).then((result) => {
      return result.data.resources;
    }, (error) => {
      console.log(error);
    });
  }

  getContainerResourcesList(containerid) {
    return this.apigClient.v1ExportContainersContaineridResourcesGet({containerid: containerid}).then((result) => {
      return result.data.resources;
    }, (error) => {
      console.log(error);
    });
  }

  getContainer(containerid) {
    return this.apigClient.v1ExportContainersContaineridGet({containerid: containerid}).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  getContainerProductsList(containerid) {
    return this.apigClient.v1ExportContainersContaineridProductsGet({containerid: containerid}).then((result) => {
      return result.data.products;
    }, (error) => {
      console.log(error);
    });
  }

  setContainerClose(containerid) {
    return this.apigClient.v1ExportContainersContaineridPatch({containerid: containerid}, {'status': '2'}).then((result) => {
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
    return this.apigClient.v1ImportContainersContaineridGet({containerid: containerid}).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  getImportContainerResourcesList(containerid) {
    return this.apigClient.v1ImportContainersContaineridResourcesGet({containerid: containerid}).then((result) => {
      return result.data.resources;
    }, (error) => {
      console.log(error);
    });
  }

  setContainerApprove(containerid) {
    return this.apigClient.v1ImportContainersContaineridPatch({containerid: containerid}, {'status': '3'}).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  getImportContainerProductsList(containerid) {
    return this.apigClient.v1ImportContainersContaineridProductsGet({containerid: containerid}).then((result) => {
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
    return this.apigClient.v1ImportProductsProductidGet({productid: productid}).then((result) => {
      return result.data.shipments;
    }, (error) => {
      console.log(error);
    });
  }

  setProductApprove(productid) {
    return this.apigClient.v1ImportProductsProductidPatch({productid: productid}, {'status': '3'}).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  getImportProductResourcesList(productid) {
    return this.apigClient.v1ImportProductsProductidResourcesGet({productid: productid}).then((result) => {
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
    return this.apigClient.v1LastmileDeliveriesDeliveryidGet({deliveryid: deliveryid}).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  setDeliverySave(deliveryid) {
    return this.apigClient.v1LastmileDeliveriesDeliveryidPatch({deliveryid: deliveryid}, {'status': '2'}).then((result) => {
      return result.data;
    }, (error) => {
      console.log(error);
    });
  }

  getDeliveryResourcesList(deliveryid) {
    return this.apigClient.v1LastmileDeliveriesDeliveryidResourcesGet({deliveryid: deliveryid}).then((result) => {
      return result.data.resources;
    }, (error) => {
      console.log(error);
    });
  }

}
