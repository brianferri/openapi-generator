/*
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.Client;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Disabled;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;


/**
 * API tests for AnotherFakeApi
 */
@Disabled
public class AnotherFakeApiTest {

    private final AnotherFakeApi api = new AnotherFakeApi();

    
    /**
     * To test special tags
     *
     * To test special tags and operation ID starting with number
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void call123testSpecialTagsTest() throws ApiException {
        Client client = null;
        Client response = 
        api.call123testSpecialTags(client);
        
        // TODO: test validations
    }
    
}
