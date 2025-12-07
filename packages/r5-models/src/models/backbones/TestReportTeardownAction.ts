import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ITestReportSetupActionOperation,
  ITestReportTeardownAction,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestReportTeardownAction */
const TEST_REPORT_TEARDOWN_ACTION_PROPERTIES = [
  'operation',
] as const;

/**
 * TestReportTeardownAction - One or more teardown operations performed
 *
 * @see https://hl7.org/fhir/R4/testreportteardownaction.html
 *
 * @example
 * const testReportTeardownAction = new TestReportTeardownAction({
 *   // ... properties
 * });
 */
export class TestReportTeardownAction extends BackboneElement implements ITestReportTeardownAction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The teardown operation performed */
  operation: ITestReportSetupActionOperation;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestReportTeardownAction>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_REPORT_TEARDOWN_ACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestReportTeardownAction from a JSON object
   */
  static fromJSON(json: ITestReportTeardownAction): TestReportTeardownAction {
    return new TestReportTeardownAction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestReportTeardownAction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestReportTeardownAction>): TestReportTeardownAction {
    return new TestReportTeardownAction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestReportTeardownAction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestReportTeardownAction) => Partial<ITestReportTeardownAction>): TestReportTeardownAction {
    const currentData = this.toJSON();
    return new TestReportTeardownAction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestReportTeardownAction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestReportTeardownAction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_REPORT_TEARDOWN_ACTION_PROPERTIES);
    return result as ITestReportTeardownAction;
  }

  /**
   * Create a deep clone of this TestReportTeardownAction
   */
  clone(): TestReportTeardownAction {
    return new TestReportTeardownAction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestReportTeardownAction
   */
  toString(): string {
    const parts: string[] = ['TestReportTeardownAction'];
    return parts.join(', ');
  }
}
