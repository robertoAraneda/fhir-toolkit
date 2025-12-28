import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ITestReportSetupAction,
  ITestReportSetupActionAssert,
  ITestReportSetupActionOperation,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TestReportSetupAction */
const TEST_REPORT_SETUP_ACTION_PROPERTIES = [
  'operation',
  'assert',
] as const;

/**
 * TestReportSetupAction - A setup operation or assert that was executed
 *
 * @see https://hl7.org/fhir/R4B/testreportsetupaction.html
 *
 * @example
 * const testReportSetupAction = new TestReportSetupAction({
 *   // ... properties
 * });
 */
export class TestReportSetupAction extends BackboneElement implements ITestReportSetupAction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The operation to perform */
  operation?: ITestReportSetupActionOperation;

  /** The assertion to perform */
  assert?: ITestReportSetupActionAssert;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestReportSetupAction>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_REPORT_SETUP_ACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestReportSetupAction from a JSON object
   */
  static fromJSON(json: ITestReportSetupAction): TestReportSetupAction {
    return new TestReportSetupAction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestReportSetupAction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestReportSetupAction>): TestReportSetupAction {
    return new TestReportSetupAction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestReportSetupAction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestReportSetupAction) => Partial<ITestReportSetupAction>): TestReportSetupAction {
    const currentData = this.toJSON();
    return new TestReportSetupAction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestReportSetupAction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestReportSetupAction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_REPORT_SETUP_ACTION_PROPERTIES);
    return result as ITestReportSetupAction;
  }

  /**
   * Create a deep clone of this TestReportSetupAction
   */
  clone(): TestReportSetupAction {
    return new TestReportSetupAction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestReportSetupAction
   */
  toString(): string {
    const parts: string[] = ['TestReportSetupAction'];
    return parts.join(', ');
  }
}
