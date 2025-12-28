import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITestReportSetupActionOperation,
  TestReportActionResultType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestReportSetupActionOperation */
const TEST_REPORT_SETUP_ACTION_OPERATION_PROPERTIES = [
  'result',
  '_result',
  'message',
  '_message',
  'detail',
  '_detail',
] as const;

/**
 * TestReportSetupActionOperation - The operation to perform
 *
 * @see https://hl7.org/fhir/R5/testreportsetupactionoperation.html
 *
 * @example
 * const testReportSetupActionOperation = new TestReportSetupActionOperation({
 *   // ... properties
 * });
 */
export class TestReportSetupActionOperation extends BackboneElement implements ITestReportSetupActionOperation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** pass | skip | fail | warning | error */
  result: TestReportActionResultType;

  /** Extension for result */
  _result?: IElement;

  /** A message associated with the result */
  message?: string;

  /** Extension for message */
  _message?: IElement;

  /** A link to further details on the result */
  detail?: string;

  /** Extension for detail */
  _detail?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestReportSetupActionOperation>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_REPORT_SETUP_ACTION_OPERATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestReportSetupActionOperation from a JSON object
   */
  static fromJSON(json: ITestReportSetupActionOperation): TestReportSetupActionOperation {
    return new TestReportSetupActionOperation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestReportSetupActionOperation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestReportSetupActionOperation>): TestReportSetupActionOperation {
    return new TestReportSetupActionOperation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestReportSetupActionOperation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestReportSetupActionOperation) => Partial<ITestReportSetupActionOperation>): TestReportSetupActionOperation {
    const currentData = this.toJSON();
    return new TestReportSetupActionOperation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestReportSetupActionOperation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestReportSetupActionOperation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_REPORT_SETUP_ACTION_OPERATION_PROPERTIES);
    return result as ITestReportSetupActionOperation;
  }

  /**
   * Create a deep clone of this TestReportSetupActionOperation
   */
  clone(): TestReportSetupActionOperation {
    return new TestReportSetupActionOperation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestReportSetupActionOperation
   */
  toString(): string {
    const parts: string[] = ['TestReportSetupActionOperation'];
    return parts.join(', ');
  }
}
