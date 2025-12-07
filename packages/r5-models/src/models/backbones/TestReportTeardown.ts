import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ITestReportTeardown,
  ITestReportTeardownAction,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestReportTeardown */
const TEST_REPORT_TEARDOWN_PROPERTIES = [
  'action',
] as const;

/**
 * TestReportTeardown - The results of running the series of required clean up steps
 *
 * @see https://hl7.org/fhir/R4/testreportteardown.html
 *
 * @example
 * const testReportTeardown = new TestReportTeardown({
 *   // ... properties
 * });
 */
export class TestReportTeardown extends BackboneElement implements ITestReportTeardown {

  // ============================================================================
  // Properties
  // ============================================================================

  /** One or more teardown operations performed */
  action: ITestReportTeardownAction[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestReportTeardown>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_REPORT_TEARDOWN_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestReportTeardown from a JSON object
   */
  static fromJSON(json: ITestReportTeardown): TestReportTeardown {
    return new TestReportTeardown(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestReportTeardown with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestReportTeardown>): TestReportTeardown {
    return new TestReportTeardown({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestReportTeardown by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestReportTeardown) => Partial<ITestReportTeardown>): TestReportTeardown {
    const currentData = this.toJSON();
    return new TestReportTeardown({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestReportTeardown)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestReportTeardown {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_REPORT_TEARDOWN_PROPERTIES);
    return result as ITestReportTeardown;
  }

  /**
   * Create a deep clone of this TestReportTeardown
   */
  clone(): TestReportTeardown {
    return new TestReportTeardown(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestReportTeardown
   */
  toString(): string {
    const parts: string[] = ['TestReportTeardown'];
    return parts.join(', ');
  }
}
