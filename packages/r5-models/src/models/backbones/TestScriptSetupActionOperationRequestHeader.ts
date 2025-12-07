import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITestScriptSetupActionOperationRequestHeader,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestScriptSetupActionOperationRequestHeader */
const TEST_SCRIPT_SETUP_ACTION_OPERATION_REQUEST_HEADER_PROPERTIES = [
  'field',
  '_field',
  'value',
  '_value',
] as const;

/**
 * TestScriptSetupActionOperationRequestHeader - Each operation can have one or more header elements
 *
 * @see https://hl7.org/fhir/R4/testscriptsetupactionoperationrequestheader.html
 *
 * @example
 * const testScriptSetupActionOperationRequestHeader = new TestScriptSetupActionOperationRequestHeader({
 *   // ... properties
 * });
 */
export class TestScriptSetupActionOperationRequestHeader extends BackboneElement implements ITestScriptSetupActionOperationRequestHeader {

  // ============================================================================
  // Properties
  // ============================================================================

  /** HTTP header field name */
  field: string;

  /** Extension for field */
  _field?: IElement;

  /** HTTP headerfield value */
  value: string;

  /** Extension for value */
  _value?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptSetupActionOperationRequestHeader>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_SETUP_ACTION_OPERATION_REQUEST_HEADER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptSetupActionOperationRequestHeader from a JSON object
   */
  static fromJSON(json: ITestScriptSetupActionOperationRequestHeader): TestScriptSetupActionOperationRequestHeader {
    return new TestScriptSetupActionOperationRequestHeader(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptSetupActionOperationRequestHeader with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptSetupActionOperationRequestHeader>): TestScriptSetupActionOperationRequestHeader {
    return new TestScriptSetupActionOperationRequestHeader({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptSetupActionOperationRequestHeader by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptSetupActionOperationRequestHeader) => Partial<ITestScriptSetupActionOperationRequestHeader>): TestScriptSetupActionOperationRequestHeader {
    const currentData = this.toJSON();
    return new TestScriptSetupActionOperationRequestHeader({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptSetupActionOperationRequestHeader)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptSetupActionOperationRequestHeader {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_SETUP_ACTION_OPERATION_REQUEST_HEADER_PROPERTIES);
    return result as ITestScriptSetupActionOperationRequestHeader;
  }

  /**
   * Create a deep clone of this TestScriptSetupActionOperationRequestHeader
   */
  clone(): TestScriptSetupActionOperationRequestHeader {
    return new TestScriptSetupActionOperationRequestHeader(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptSetupActionOperationRequestHeader
   */
  toString(): string {
    const parts: string[] = ['TestScriptSetupActionOperationRequestHeader'];
    return parts.join(', ');
  }
}
