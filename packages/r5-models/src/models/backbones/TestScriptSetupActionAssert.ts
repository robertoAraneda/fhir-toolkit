import { BackboneElement } from '../base/BackboneElement.js';
import type {
  AssertionDirectionTypeType,
  AssertionManualCompletionTypeType,
  AssertionOperatorTypeType,
  AssertionResponseTypesType,
  IElement,
  ITestScriptSetupActionAssert,
  ITestScriptSetupActionAssertRequirement,
  TestScriptRequestMethodCodeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestScriptSetupActionAssert */
const TEST_SCRIPT_SETUP_ACTION_ASSERT_PROPERTIES = [
  'label',
  '_label',
  'description',
  '_description',
  'direction',
  '_direction',
  'compareToSourceId',
  '_compareToSourceId',
  'compareToSourceExpression',
  '_compareToSourceExpression',
  'compareToSourcePath',
  '_compareToSourcePath',
  'contentType',
  '_contentType',
  'defaultManualCompletion',
  '_defaultManualCompletion',
  'expression',
  '_expression',
  'headerField',
  '_headerField',
  'minimumId',
  '_minimumId',
  'navigationLinks',
  '_navigationLinks',
  'operator',
  '_operator',
  'path',
  '_path',
  'requestMethod',
  '_requestMethod',
  'requestURL',
  '_requestURL',
  'resource',
  '_resource',
  'response',
  '_response',
  'responseCode',
  '_responseCode',
  'sourceId',
  '_sourceId',
  'stopTestOnFail',
  '_stopTestOnFail',
  'validateProfileId',
  '_validateProfileId',
  'value',
  '_value',
  'warningOnly',
  '_warningOnly',
  'requirement',
] as const;

/**
 * TestScriptSetupActionAssert - The assertion to perform
 *
 * @see https://hl7.org/fhir/R5/testscriptsetupactionassert.html
 *
 * @example
 * const testScriptSetupActionAssert = new TestScriptSetupActionAssert({
 *   // ... properties
 * });
 */
export class TestScriptSetupActionAssert extends BackboneElement implements ITestScriptSetupActionAssert {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Tracking/logging assertion label */
  label?: string;

  /** Extension for label */
  _label?: IElement;

  /** Tracking/reporting assertion description */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** response | request */
  direction?: AssertionDirectionTypeType;

  /** Extension for direction */
  _direction?: IElement;

  /** Id of the source fixture to be evaluated */
  compareToSourceId?: string;

  /** Extension for compareToSourceId */
  _compareToSourceId?: IElement;

  /** The FHIRPath expression to evaluate against the source fixture */
  compareToSourceExpression?: string;

  /** Extension for compareToSourceExpression */
  _compareToSourceExpression?: IElement;

  /** XPath or JSONPath expression to evaluate against the source fixture */
  compareToSourcePath?: string;

  /** Extension for compareToSourcePath */
  _compareToSourcePath?: IElement;

  /** Mime type to compare against the 'Content-Type' header */
  contentType?: string;

  /** Extension for contentType */
  _contentType?: IElement;

  /** fail | pass | skip | stop */
  defaultManualCompletion?: AssertionManualCompletionTypeType;

  /** Extension for defaultManualCompletion */
  _defaultManualCompletion?: IElement;

  /** The FHIRPath expression to be evaluated */
  expression?: string;

  /** Extension for expression */
  _expression?: IElement;

  /** HTTP header field name */
  headerField?: string;

  /** Extension for headerField */
  _headerField?: IElement;

  /** Fixture Id of minimum content resource */
  minimumId?: string;

  /** Extension for minimumId */
  _minimumId?: IElement;

  /** Perform validation on navigation links? */
  navigationLinks?: boolean;

  /** Extension for navigationLinks */
  _navigationLinks?: IElement;

  /** equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval | manualEval */
  operator?: AssertionOperatorTypeType;

  /** Extension for operator */
  _operator?: IElement;

  /** XPath or JSONPath expression */
  path?: string;

  /** Extension for path */
  _path?: IElement;

  /** delete | get | options | patch | post | put | head */
  requestMethod?: TestScriptRequestMethodCodeType;

  /** Extension for requestMethod */
  _requestMethod?: IElement;

  /** Request URL comparison value */
  requestURL?: string;

  /** Extension for requestURL */
  _requestURL?: IElement;

  /** Resource type */
  resource?: string;

  /** Extension for resource */
  _resource?: IElement;

  /** continue | switchingProtocols | okay | created | accepted | nonAuthoritativeInformation | noContent | resetContent | partialContent | multipleChoices | movedPermanently | found | seeOther | notModified | useProxy | temporaryRedirect | permanentRedirect | badRequest | unauthorized | paymentRequired | forbidden | notFound | methodNotAllowed | notAcceptable | proxyAuthenticationRequired | requestTimeout | conflict | gone | lengthRequired | preconditionFailed | contentTooLarge | uriTooLong | unsupportedMediaType | rangeNotSatisfiable | expectationFailed | misdirectedRequest | unprocessableContent | upgradeRequired | internalServerError | notImplemented | badGateway | serviceUnavailable | gatewayTimeout | httpVersionNotSupported */
  response?: AssertionResponseTypesType;

  /** Extension for response */
  _response?: IElement;

  /** HTTP response code to test */
  responseCode?: string;

  /** Extension for responseCode */
  _responseCode?: IElement;

  /** Fixture Id of source expression or headerField */
  sourceId?: string;

  /** Extension for sourceId */
  _sourceId?: IElement;

  /** If this assert fails, will the current test execution stop? */
  stopTestOnFail: boolean;

  /** Extension for stopTestOnFail */
  _stopTestOnFail?: IElement;

  /** Profile Id of validation profile reference */
  validateProfileId?: string;

  /** Extension for validateProfileId */
  _validateProfileId?: IElement;

  /** The value to compare to */
  value?: string;

  /** Extension for value */
  _value?: IElement;

  /** Will this assert produce a warning only on error? */
  warningOnly: boolean;

  /** Extension for warningOnly */
  _warningOnly?: IElement;

  /** Links or references to the testing requirements */
  requirement?: ITestScriptSetupActionAssertRequirement[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptSetupActionAssert>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_SETUP_ACTION_ASSERT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptSetupActionAssert from a JSON object
   */
  static fromJSON(json: ITestScriptSetupActionAssert): TestScriptSetupActionAssert {
    return new TestScriptSetupActionAssert(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptSetupActionAssert with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptSetupActionAssert>): TestScriptSetupActionAssert {
    return new TestScriptSetupActionAssert({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptSetupActionAssert by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptSetupActionAssert) => Partial<ITestScriptSetupActionAssert>): TestScriptSetupActionAssert {
    const currentData = this.toJSON();
    return new TestScriptSetupActionAssert({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptSetupActionAssert)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptSetupActionAssert {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_SETUP_ACTION_ASSERT_PROPERTIES);
    return result as ITestScriptSetupActionAssert;
  }

  /**
   * Create a deep clone of this TestScriptSetupActionAssert
   */
  clone(): TestScriptSetupActionAssert {
    return new TestScriptSetupActionAssert(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptSetupActionAssert
   */
  toString(): string {
    const parts: string[] = ['TestScriptSetupActionAssert'];
    return parts.join(', ');
  }
}
