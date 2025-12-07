import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TestScriptSetupActionOperation } from '../../models/backbones/TestScriptSetupActionOperation.js';
import type {
  ICoding,
  ITestScriptSetupActionOperation,
  ITestScriptSetupActionOperationRequestHeader,
  TestScriptRequestMethodCodeType,
} from '@fhir-toolkit/r5-types';

/**
 * TestScriptSetupActionOperationBuilder - Fluent builder for TestScriptSetupActionOperation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const testScriptSetupActionOperation = new TestScriptSetupActionOperationBuilder()
 *   .setType(value)
 *   .addRequestHeader({ ... })
 *   .build();
 */
export class TestScriptSetupActionOperationBuilder extends BackboneElementBuilder<TestScriptSetupActionOperation, ITestScriptSetupActionOperation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The operation code type that will be executed
   */
  setType(type: ICoding): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set resource
   * Resource type
   */
  setResource(resource: string): this {
    this.data.resource = resource;
    return this;
  }

  /**
   * Set label
   * Tracking/logging operation label
   */
  setLabel(label: string): this {
    this.data.label = label;
    return this;
  }

  /**
   * Set description
   * Tracking/reporting operation description
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set accept
   * Mime type to accept in the payload of the response, with charset etc
   */
  setAccept(accept: string): this {
    this.data.accept = accept;
    return this;
  }

  /**
   * Set contentType
   * Mime type of the request payload contents, with charset etc
   */
  setContentType(contentType: string): this {
    this.data.contentType = contentType;
    return this;
  }

  /**
   * Set destination
   * Server responding to the request
   */
  setDestination(destination: number): this {
    this.data.destination = destination;
    return this;
  }

  /**
   * Set encodeRequestUrl
   * Whether or not to send the request url in encoded format
   */
  setEncodeRequestUrl(encodeRequestUrl: boolean): this {
    this.data.encodeRequestUrl = encodeRequestUrl;
    return this;
  }

  /**
   * Set method
   * delete | get | options | patch | post | put | head
   */
  setMethod(method: TestScriptRequestMethodCodeType): this {
    this.data.method = method;
    return this;
  }

  /**
   * Set origin
   * Server initiating the request
   */
  setOrigin(origin: number): this {
    this.data.origin = origin;
    return this;
  }

  /**
   * Set params
   * Explicitly defined path parameters
   */
  setParams(params: string): this {
    this.data.params = params;
    return this;
  }

  /**
   * Set requestId
   * Fixture Id of mapped request
   */
  setRequestId(requestId: string): this {
    this.data.requestId = requestId;
    return this;
  }

  /**
   * Set responseId
   * Fixture Id of mapped response
   */
  setResponseId(responseId: string): this {
    this.data.responseId = responseId;
    return this;
  }

  /**
   * Set sourceId
   * Fixture Id of body for PUT and POST requests
   */
  setSourceId(sourceId: string): this {
    this.data.sourceId = sourceId;
    return this;
  }

  /**
   * Set targetId
   * Id of fixture used for extracting the [id],  [type], and [vid] for GET requests
   */
  setTargetId(targetId: string): this {
    this.data.targetId = targetId;
    return this;
  }

  /**
   * Set url
   * Request URL
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add requestHeader
   * Each operation can have one or more header elements
   */
  addRequestHeader(requestHeader: ITestScriptSetupActionOperationRequestHeader): this {
    return this.addToArray('requestHeader', requestHeader);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TestScriptSetupActionOperation instance
   */
  build(): TestScriptSetupActionOperation {
    return new TestScriptSetupActionOperation(this.data);
  }

  /**
   * Build and validate the TestScriptSetupActionOperation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TestScriptSetupActionOperation> {
    const testScriptSetupActionOperation = this.build();
    await testScriptSetupActionOperation.validateOrThrow();
    return testScriptSetupActionOperation;
  }
}
