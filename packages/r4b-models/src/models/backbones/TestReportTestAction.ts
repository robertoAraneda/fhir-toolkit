import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ITestReportSetupActionAssert,
  ITestReportSetupActionOperation,
  ITestReportTestAction,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TestReportTestAction */
const TEST_REPORT_TEST_ACTION_PROPERTIES = [
  'operation',
  'assert',
] as const;

/**
 * TestReportTestAction - A test operation or assert that was performed
 *
 * @see https://hl7.org/fhir/R4/testreporttestaction.html
 *
 * @example
 * const testReportTestAction = new TestReportTestAction({
 *   // ... properties
 * });
 */
export class TestReportTestAction extends BackboneElement implements ITestReportTestAction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The operation performed */
  operation?: ITestReportSetupActionOperation;

  /** The assertion performed */
  assert?: ITestReportSetupActionAssert;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestReportTestAction>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_REPORT_TEST_ACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestReportTestAction from a JSON object
   */
  static fromJSON(json: ITestReportTestAction): TestReportTestAction {
    return new TestReportTestAction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestReportTestAction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestReportTestAction>): TestReportTestAction {
    return new TestReportTestAction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestReportTestAction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestReportTestAction) => Partial<ITestReportTestAction>): TestReportTestAction {
    const currentData = this.toJSON();
    return new TestReportTestAction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestReportTestAction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestReportTestAction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_REPORT_TEST_ACTION_PROPERTIES);
    return result as ITestReportTestAction;
  }

  /**
   * Create a deep clone of this TestReportTestAction
   */
  clone(): TestReportTestAction {
    return new TestReportTestAction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestReportTestAction
   */
  toString(): string {
    const parts: string[] = ['TestReportTestAction'];
    return parts.join(', ');
  }
}
