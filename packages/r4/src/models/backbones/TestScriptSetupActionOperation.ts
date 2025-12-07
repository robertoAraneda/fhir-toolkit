import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IElement,
  ITestScriptSetupActionOperation,
  ITestScriptSetupActionOperationRequestHeader,
  TestScriptRequestMethodCodeType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to TestScriptSetupActionOperation */
const TEST_SCRIPT_SETUP_ACTION_OPERATION_PROPERTIES = [
  'type',
  'resource',
  '_resource',
  'label',
  '_label',
  'description',
  '_description',
  'accept',
  '_accept',
  'contentType',
  '_contentType',
  'destination',
  '_destination',
  'encodeRequestUrl',
  '_encodeRequestUrl',
  'method',
  '_method',
  'origin',
  '_origin',
  'params',
  '_params',
  'requestHeader',
  'requestId',
  '_requestId',
  'responseId',
  '_responseId',
  'sourceId',
  '_sourceId',
  'targetId',
  '_targetId',
  'url',
  '_url',
] as const;

/**
 * TestScriptSetupActionOperation - The setup operation to perform
 *
 * @see https://hl7.org/fhir/R4/testscriptsetupactionoperation.html
 *
 * @example
 * const testScriptSetupActionOperation = new TestScriptSetupActionOperation({
 *   // ... properties
 * });
 */
export class TestScriptSetupActionOperation extends BackboneElement implements ITestScriptSetupActionOperation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The operation code type that will be executed */
  type?: ICoding;

  /** Resource type */
  resource?: string;

  /** Extension for resource */
  _resource?: IElement;

  /** Tracking/logging operation label */
  label?: string;

  /** Extension for label */
  _label?: IElement;

  /** Tracking/reporting operation description */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Mime type to accept in the payload of the response, with charset etc. */
  accept?: string;

  /** Extension for accept */
  _accept?: IElement;

  /** Mime type of the request payload contents, with charset etc. */
  contentType?: string;

  /** Extension for contentType */
  _contentType?: IElement;

  /** Server responding to the request */
  destination?: number;

  /** Extension for destination */
  _destination?: IElement;

  /** Whether or not to send the request url in encoded format */
  encodeRequestUrl: boolean;

  /** Extension for encodeRequestUrl */
  _encodeRequestUrl?: IElement;

  /** delete | get | options | patch | post | put | head */
  method?: TestScriptRequestMethodCodeType;

  /** Extension for method */
  _method?: IElement;

  /** Server initiating the request */
  origin?: number;

  /** Extension for origin */
  _origin?: IElement;

  /** Explicitly defined path parameters */
  params?: string;

  /** Extension for params */
  _params?: IElement;

  /** Each operation can have one or more header elements */
  requestHeader?: ITestScriptSetupActionOperationRequestHeader[];

  /** Fixture Id of mapped request */
  requestId?: string;

  /** Extension for requestId */
  _requestId?: IElement;

  /** Fixture Id of mapped response */
  responseId?: string;

  /** Extension for responseId */
  _responseId?: IElement;

  /** Fixture Id of body for PUT and POST requests */
  sourceId?: string;

  /** Extension for sourceId */
  _sourceId?: IElement;

  /** Id of fixture used for extracting the [id],  [type], and [vid] for GET requests */
  targetId?: string;

  /** Extension for targetId */
  _targetId?: IElement;

  /** Request URL */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptSetupActionOperation>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_SETUP_ACTION_OPERATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptSetupActionOperation from a JSON object
   */
  static fromJSON(json: ITestScriptSetupActionOperation): TestScriptSetupActionOperation {
    return new TestScriptSetupActionOperation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptSetupActionOperation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptSetupActionOperation>): TestScriptSetupActionOperation {
    return new TestScriptSetupActionOperation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptSetupActionOperation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptSetupActionOperation) => Partial<ITestScriptSetupActionOperation>): TestScriptSetupActionOperation {
    const currentData = this.toJSON();
    return new TestScriptSetupActionOperation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptSetupActionOperation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptSetupActionOperation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_SETUP_ACTION_OPERATION_PROPERTIES);
    return result as ITestScriptSetupActionOperation;
  }

  /**
   * Create a deep clone of this TestScriptSetupActionOperation
   */
  clone(): TestScriptSetupActionOperation {
    return new TestScriptSetupActionOperation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptSetupActionOperation
   */
  toString(): string {
    const parts: string[] = ['TestScriptSetupActionOperation'];
    return parts.join(', ');
  }
}
