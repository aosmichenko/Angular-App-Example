/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var apigClientFactory = {};
apigClientFactory.newClient = function (config) {
    var apigClient = { };
    if(config === undefined) {
        config = {
            accessKey: '',
            secretKey: '',
            sessionToken: '',
            region: '',
            apiKey: 'ryBi6yAlSV50dDmGAgF395xR5VbW0IQY7sdGlBqi',
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if(config.accessKey === undefined) {
        config.accessKey = '';
    }
    if(config.secretKey === undefined) {
        config.secretKey = '';
    }
    if(config.apiKey === undefined) {
        config.apiKey = '';
    }
    if(config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if(config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if(config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if(config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }

    
    // extract endpoint and path from url
    var invokeUrl = 'https://m74o0zf8dc.execute-api.eu-west-1.amazonaws.com/dev';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);

    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }

    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
    
    
    
    apigClient.v1ExportContainersGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ExportContainersGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/containers').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportContainersGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportContainersOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ExportContainersOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/containers').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportContainersOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportContainersContaineridGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['containerid'], ['body']);
        
        var v1ExportContainersContaineridGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/containers/{containerid}').expand(apiGateway.core.utils.parseParametersToObject(params, ['containerid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportContainersContaineridGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportContainersContaineridPatch = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['containerid'], ['body']);
        
        var v1ExportContainersContaineridPatchRequest = {
            verb: 'patch'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/containers/{containerid}').expand(apiGateway.core.utils.parseParametersToObject(params, ['containerid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportContainersContaineridPatchRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportContainersContaineridOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ExportContainersContaineridOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/containers/{containerid}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportContainersContaineridOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportContainersContaineridProductsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['containerid'], ['body']);
        
        var v1ExportContainersContaineridProductsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/containers/{containerid}/products').expand(apiGateway.core.utils.parseParametersToObject(params, ['containerid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportContainersContaineridProductsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportContainersContaineridProductsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ExportContainersContaineridProductsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/containers/{containerid}/products').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportContainersContaineridProductsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportContainersContaineridProductsProductidGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['productid', 'containerid'], ['body']);
        
        var v1ExportContainersContaineridProductsProductidGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/containers/{containerid}/products/{productid}').expand(apiGateway.core.utils.parseParametersToObject(params, ['productid', 'containerid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportContainersContaineridProductsProductidGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportContainersContaineridProductsProductidPatch = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['productid', 'containerid'], ['body']);
        
        var v1ExportContainersContaineridProductsProductidPatchRequest = {
            verb: 'patch'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/containers/{containerid}/products/{productid}').expand(apiGateway.core.utils.parseParametersToObject(params, ['productid', 'containerid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportContainersContaineridProductsProductidPatchRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportContainersContaineridProductsProductidOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ExportContainersContaineridProductsProductidOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/containers/{containerid}/products/{productid}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportContainersContaineridProductsProductidOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportContainersContaineridProductsProductidResourcesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['productid', 'containerid'], ['body']);
        
        var v1ExportContainersContaineridProductsProductidResourcesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/containers/{containerid}/products/{productid}/resources').expand(apiGateway.core.utils.parseParametersToObject(params, ['productid', 'containerid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportContainersContaineridProductsProductidResourcesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportContainersContaineridProductsProductidResourcesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ExportContainersContaineridProductsProductidResourcesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/containers/{containerid}/products/{productid}/resources').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportContainersContaineridProductsProductidResourcesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportContainersContaineridResourcesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['containerid'], ['body']);
        
        var v1ExportContainersContaineridResourcesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/containers/{containerid}/resources').expand(apiGateway.core.utils.parseParametersToObject(params, ['containerid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportContainersContaineridResourcesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportContainersContaineridResourcesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ExportContainersContaineridResourcesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/containers/{containerid}/resources').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportContainersContaineridResourcesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportShipmentsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ExportShipmentsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/shipments').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportShipmentsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportShipmentsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ExportShipmentsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/shipments').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportShipmentsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportShipmentsShipmentidGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['shipmentid'], ['body']);
        
        var v1ExportShipmentsShipmentidGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/shipments/{shipmentid}').expand(apiGateway.core.utils.parseParametersToObject(params, ['shipmentid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportShipmentsShipmentidGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportShipmentsShipmentidPatch = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['shipmentid'], ['body']);
        
        var v1ExportShipmentsShipmentidPatchRequest = {
            verb: 'patch'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/shipments/{shipmentid}').expand(apiGateway.core.utils.parseParametersToObject(params, ['shipmentid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportShipmentsShipmentidPatchRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportShipmentsShipmentidOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ExportShipmentsShipmentidOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/shipments/{shipmentid}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportShipmentsShipmentidOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportShipmentsShipmentidContainersGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['shipmentid'], ['body']);
        
        var v1ExportShipmentsShipmentidContainersGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/shipments/{shipmentid}/containers').expand(apiGateway.core.utils.parseParametersToObject(params, ['shipmentid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportShipmentsShipmentidContainersGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportShipmentsShipmentidContainersOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ExportShipmentsShipmentidContainersOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/shipments/{shipmentid}/containers').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportShipmentsShipmentidContainersOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportShipmentsShipmentidResourcesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['shipmentid'], ['body']);
        
        var v1ExportShipmentsShipmentidResourcesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/shipments/{shipmentid}/resources').expand(apiGateway.core.utils.parseParametersToObject(params, ['shipmentid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportShipmentsShipmentidResourcesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ExportShipmentsShipmentidResourcesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ExportShipmentsShipmentidResourcesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/export/shipments/{shipmentid}/resources').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ExportShipmentsShipmentidResourcesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportContainersGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ImportContainersGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/containers').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportContainersGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportContainersOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ImportContainersOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/containers').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportContainersOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportContainersContaineridGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['containerid'], ['body']);
        
        var v1ImportContainersContaineridGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/containers/{containerid}').expand(apiGateway.core.utils.parseParametersToObject(params, ['containerid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportContainersContaineridGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportContainersContaineridPatch = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['containerid'], ['body']);
        
        var v1ImportContainersContaineridPatchRequest = {
            verb: 'patch'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/containers/{containerid}').expand(apiGateway.core.utils.parseParametersToObject(params, ['containerid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportContainersContaineridPatchRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportContainersContaineridOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ImportContainersContaineridOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/containers/{containerid}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportContainersContaineridOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportContainersContaineridProductsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['containerid'], ['body']);
        
        var v1ImportContainersContaineridProductsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/containers/{containerid}/products').expand(apiGateway.core.utils.parseParametersToObject(params, ['containerid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportContainersContaineridProductsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportContainersContaineridProductsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ImportContainersContaineridProductsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/containers/{containerid}/products').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportContainersContaineridProductsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportContainersContaineridProductsProductidGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['productid', 'containerid'], ['body']);
        
        var v1ImportContainersContaineridProductsProductidGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/containers/{containerid}/products/{productid}').expand(apiGateway.core.utils.parseParametersToObject(params, ['productid', 'containerid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportContainersContaineridProductsProductidGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportContainersContaineridProductsProductidPatch = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['productid', 'containerid'], ['body']);
        
        var v1ImportContainersContaineridProductsProductidPatchRequest = {
            verb: 'patch'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/containers/{containerid}/products/{productid}').expand(apiGateway.core.utils.parseParametersToObject(params, ['productid', 'containerid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportContainersContaineridProductsProductidPatchRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportContainersContaineridProductsProductidOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ImportContainersContaineridProductsProductidOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/containers/{containerid}/products/{productid}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportContainersContaineridProductsProductidOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportContainersContaineridProductsProductidResourcesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['productid', 'containerid'], ['body']);
        
        var v1ImportContainersContaineridProductsProductidResourcesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/containers/{containerid}/products/{productid}/resources').expand(apiGateway.core.utils.parseParametersToObject(params, ['productid', 'containerid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportContainersContaineridProductsProductidResourcesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportContainersContaineridProductsProductidResourcesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ImportContainersContaineridProductsProductidResourcesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/containers/{containerid}/products/{productid}/resources').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportContainersContaineridProductsProductidResourcesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportContainersContaineridResourcesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['containerid'], ['body']);
        
        var v1ImportContainersContaineridResourcesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/containers/{containerid}/resources').expand(apiGateway.core.utils.parseParametersToObject(params, ['containerid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportContainersContaineridResourcesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportContainersContaineridResourcesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ImportContainersContaineridResourcesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/containers/{containerid}/resources').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportContainersContaineridResourcesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportContainersContaineridWhlocationsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['containerid'], ['body']);
        
        var v1ImportContainersContaineridWhlocationsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/containers/{containerid}/whlocations').expand(apiGateway.core.utils.parseParametersToObject(params, ['containerid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportContainersContaineridWhlocationsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportContainersContaineridWhlocationsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ImportContainersContaineridWhlocationsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/containers/{containerid}/whlocations').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportContainersContaineridWhlocationsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportProductsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ImportProductsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/products').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportProductsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportProductsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ImportProductsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/products').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportProductsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportProductsProductidGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['productid'], ['body']);
        
        var v1ImportProductsProductidGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/products/{productid}').expand(apiGateway.core.utils.parseParametersToObject(params, ['productid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportProductsProductidGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportProductsProductidPatch = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['productid'], ['body']);
        
        var v1ImportProductsProductidPatchRequest = {
            verb: 'patch'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/products/{productid}').expand(apiGateway.core.utils.parseParametersToObject(params, ['productid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportProductsProductidPatchRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportProductsProductidOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ImportProductsProductidOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/products/{productid}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportProductsProductidOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportProductsProductidResourcesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['productid'], ['body']);
        
        var v1ImportProductsProductidResourcesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/products/{productid}/resources').expand(apiGateway.core.utils.parseParametersToObject(params, ['productid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportProductsProductidResourcesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1ImportProductsProductidResourcesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1ImportProductsProductidResourcesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/import/products/{productid}/resources').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1ImportProductsProductidResourcesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1LastmileDeliveriesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1LastmileDeliveriesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/lastmile/deliveries').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1LastmileDeliveriesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1LastmileDeliveriesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1LastmileDeliveriesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/lastmile/deliveries').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1LastmileDeliveriesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1LastmileDeliveriesDeliveryidGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['deliveryid'], ['body']);
        
        var v1LastmileDeliveriesDeliveryidGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/lastmile/deliveries/{deliveryid}').expand(apiGateway.core.utils.parseParametersToObject(params, ['deliveryid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1LastmileDeliveriesDeliveryidGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1LastmileDeliveriesDeliveryidPatch = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['deliveryid'], ['body']);
        
        var v1LastmileDeliveriesDeliveryidPatchRequest = {
            verb: 'patch'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/lastmile/deliveries/{deliveryid}').expand(apiGateway.core.utils.parseParametersToObject(params, ['deliveryid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1LastmileDeliveriesDeliveryidPatchRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1LastmileDeliveriesDeliveryidOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1LastmileDeliveriesDeliveryidOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/lastmile/deliveries/{deliveryid}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1LastmileDeliveriesDeliveryidOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1LastmileDeliveriesDeliveryidResourcesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['deliveryid'], ['body']);
        
        var v1LastmileDeliveriesDeliveryidResourcesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/lastmile/deliveries/{deliveryid}/resources').expand(apiGateway.core.utils.parseParametersToObject(params, ['deliveryid'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1LastmileDeliveriesDeliveryidResourcesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.v1LastmileDeliveriesDeliveryidResourcesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var v1LastmileDeliveriesDeliveryidResourcesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/v1/lastmile/deliveries/{deliveryid}/resources').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(v1LastmileDeliveriesDeliveryidResourcesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    

    return apigClient;
};
