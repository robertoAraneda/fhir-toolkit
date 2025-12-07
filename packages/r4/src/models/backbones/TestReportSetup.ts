import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ITestReportSetup,
  ITestReportSetupAction,
} from '@fhir-toolkit/r4-types';

/** Properties specific to TestReportSetup */
const TEST_REPORT_SETUP_PROPERTIES = [
  'action',
] as const;

/**
 * TestReportSetup - The results of the series of required setup operations before the tests were executed
 *
 * @see https://hl7.org/fhir/R4/testreportsetup.html
 *
 * @example
 * const testReportSetup = new TestReportSetup({
 *   // ... properties
 * });
 */
export class TestReportSetup extends BackboneElement implements ITestReportSetup {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A setup operation or assert that was executed */
  action: ITestReportSetupAction[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestReportSetup>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_REPORT_SETUP_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestReportSetup from a JSON object
   */
  static fromJSON(json: ITestReportSetup): TestReportSetup {
    return new TestReportSetup(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestReportSetup with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestReportSetup>): TestReportSetup {
    return new TestReportSetup({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestReportSetup by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestReportSetup) => Partial<ITestReportSetup>): TestReportSetup {
    const currentData = this.toJSON();
    return new TestReportSetup({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestReportSetup)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestReportSetup {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_REPORT_SETUP_PROPERTIES);
    return result as ITestReportSetup;
  }

  /**
   * Create a deep clone of this TestReportSetup
   */
  clone(): TestReportSetup {
    return new TestReportSetup(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestReportSetup
   */
  toString(): string {
    const parts: string[] = ['TestReportSetup'];
    return parts.join(', ');
  }
}
