import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';
import type { ITestScriptSetupActionOperationRequestHeader } from './ITestScriptSetupActionOperationRequestHeader.js';
import type { TestScriptRequestMethodCodeType } from '../../valuesets/index.js';

/**
 * TestScriptSetupActionOperation Interface
 * 
 * The setup operation to perform
 * 
 *
 * @see https://hl7.org/fhir/R4B/testscriptsetupactionoperation.html
 */
export interface ITestScriptSetupActionOperation extends IBackboneElement {
  /**
   * The operation code type that will be executed
   */
  type?: ICoding;

  /**
   * Resource type
   */
  resource?: string;
  /**
   * Extension for resource
   */
  _resource?: IElement;

  /**
   * Tracking/logging operation label
   */
  label?: string;
  /**
   * Extension for label
   */
  _label?: IElement;

  /**
   * Tracking/reporting operation description
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Mime type to accept in the payload of the response, with charset etc.
   */
  accept?: string;
  /**
   * Extension for accept
   */
  _accept?: IElement;

  /**
   * Mime type of the request payload contents, with charset etc.
   */
  contentType?: string;
  /**
   * Extension for contentType
   */
  _contentType?: IElement;

  /**
   * Server responding to the request
   */
  destination?: number;
  /**
   * Extension for destination
   */
  _destination?: IElement;

  /**
   * Whether or not to send the request url in encoded format
   */
  encodeRequestUrl: boolean;
  /**
   * Extension for encodeRequestUrl
   */
  _encodeRequestUrl?: IElement;

  /**
   * delete | get | options | patch | post | put | head
   */
  method?: TestScriptRequestMethodCodeType;
  /**
   * Extension for method
   */
  _method?: IElement;

  /**
   * Server initiating the request
   */
  origin?: number;
  /**
   * Extension for origin
   */
  _origin?: IElement;

  /**
   * Explicitly defined path parameters
   */
  params?: string;
  /**
   * Extension for params
   */
  _params?: IElement;

  /**
   * Each operation can have one or more header elements
   */
  requestHeader?: ITestScriptSetupActionOperationRequestHeader[];

  /**
   * Fixture Id of mapped request
   */
  requestId?: string;
  /**
   * Extension for requestId
   */
  _requestId?: IElement;

  /**
   * Fixture Id of mapped response
   */
  responseId?: string;
  /**
   * Extension for responseId
   */
  _responseId?: IElement;

  /**
   * Fixture Id of body for PUT and POST requests
   */
  sourceId?: string;
  /**
   * Extension for sourceId
   */
  _sourceId?: IElement;

  /**
   * Id of fixture used for extracting the [id],  [type], and [vid] for GET requests
   */
  targetId?: string;
  /**
   * Extension for targetId
   */
  _targetId?: IElement;

  /**
   * Request URL
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

}
