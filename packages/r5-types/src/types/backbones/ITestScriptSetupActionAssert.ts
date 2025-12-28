import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ITestScriptSetupActionAssertRequirement } from './ITestScriptSetupActionAssertRequirement.js';
import type { AssertionDirectionTypeType, AssertionManualCompletionTypeType, AssertionOperatorTypeType, AssertionResponseTypesType, TestScriptRequestMethodCodeType } from '../../valuesets/index.js';

/**
 * TestScriptSetupActionAssert Interface
 * 
 * The assertion to perform
 * 
 *
 * @see https://hl7.org/fhir/R5/testscriptsetupactionassert.html
 */
export interface ITestScriptSetupActionAssert extends IBackboneElement {
  /**
   * Tracking/logging assertion label
   */
  label?: string;
  /**
   * Extension for label
   */
  _label?: IElement;

  /**
   * Tracking/reporting assertion description
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * response | request
   */
  direction?: AssertionDirectionTypeType;
  /**
   * Extension for direction
   */
  _direction?: IElement;

  /**
   * Id of the source fixture to be evaluated
   */
  compareToSourceId?: string;
  /**
   * Extension for compareToSourceId
   */
  _compareToSourceId?: IElement;

  /**
   * The FHIRPath expression to evaluate against the source fixture
   */
  compareToSourceExpression?: string;
  /**
   * Extension for compareToSourceExpression
   */
  _compareToSourceExpression?: IElement;

  /**
   * XPath or JSONPath expression to evaluate against the source fixture
   */
  compareToSourcePath?: string;
  /**
   * Extension for compareToSourcePath
   */
  _compareToSourcePath?: IElement;

  /**
   * Mime type to compare against the 'Content-Type' header
   */
  contentType?: string;
  /**
   * Extension for contentType
   */
  _contentType?: IElement;

  /**
   * fail | pass | skip | stop
   */
  defaultManualCompletion?: AssertionManualCompletionTypeType;
  /**
   * Extension for defaultManualCompletion
   */
  _defaultManualCompletion?: IElement;

  /**
   * The FHIRPath expression to be evaluated
   */
  expression?: string;
  /**
   * Extension for expression
   */
  _expression?: IElement;

  /**
   * HTTP header field name
   */
  headerField?: string;
  /**
   * Extension for headerField
   */
  _headerField?: IElement;

  /**
   * Fixture Id of minimum content resource
   */
  minimumId?: string;
  /**
   * Extension for minimumId
   */
  _minimumId?: IElement;

  /**
   * Perform validation on navigation links?
   */
  navigationLinks?: boolean;
  /**
   * Extension for navigationLinks
   */
  _navigationLinks?: IElement;

  /**
   * equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval | manualEval
   */
  operator?: AssertionOperatorTypeType;
  /**
   * Extension for operator
   */
  _operator?: IElement;

  /**
   * XPath or JSONPath expression
   */
  path?: string;
  /**
   * Extension for path
   */
  _path?: IElement;

  /**
   * delete | get | options | patch | post | put | head
   */
  requestMethod?: TestScriptRequestMethodCodeType;
  /**
   * Extension for requestMethod
   */
  _requestMethod?: IElement;

  /**
   * Request URL comparison value
   */
  requestURL?: string;
  /**
   * Extension for requestURL
   */
  _requestURL?: IElement;

  /**
   * Resource type
   */
  resource?: string;
  /**
   * Extension for resource
   */
  _resource?: IElement;

  /**
   * continue | switchingProtocols | okay | created | accepted | nonAuthoritativeInformation | noContent | resetContent | partialContent | multipleChoices | movedPermanently | found | seeOther | notModified | useProxy | temporaryRedirect | permanentRedirect | badRequest | unauthorized | paymentRequired | forbidden | notFound | methodNotAllowed | notAcceptable | proxyAuthenticationRequired | requestTimeout | conflict | gone | lengthRequired | preconditionFailed | contentTooLarge | uriTooLong | unsupportedMediaType | rangeNotSatisfiable | expectationFailed | misdirectedRequest | unprocessableContent | upgradeRequired | internalServerError | notImplemented | badGateway | serviceUnavailable | gatewayTimeout | httpVersionNotSupported
   */
  response?: AssertionResponseTypesType;
  /**
   * Extension for response
   */
  _response?: IElement;

  /**
   * HTTP response code to test
   */
  responseCode?: string;
  /**
   * Extension for responseCode
   */
  _responseCode?: IElement;

  /**
   * Fixture Id of source expression or headerField
   */
  sourceId?: string;
  /**
   * Extension for sourceId
   */
  _sourceId?: IElement;

  /**
   * If this assert fails, will the current test execution stop?
   */
  stopTestOnFail: boolean;
  /**
   * Extension for stopTestOnFail
   */
  _stopTestOnFail?: IElement;

  /**
   * Profile Id of validation profile reference
   */
  validateProfileId?: string;
  /**
   * Extension for validateProfileId
   */
  _validateProfileId?: IElement;

  /**
   * The value to compare to
   */
  value?: string;
  /**
   * Extension for value
   */
  _value?: IElement;

  /**
   * Will this assert produce a warning only on error?
   */
  warningOnly: boolean;
  /**
   * Extension for warningOnly
   */
  _warningOnly?: IElement;

  /**
   * Links or references to the testing requirements
   */
  requirement?: ITestScriptSetupActionAssertRequirement[];

}
