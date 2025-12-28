import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITestReportTest,
  ITestReportTestAction,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TestReportTest */
const TEST_REPORT_TEST_PROPERTIES = [
  'name',
  '_name',
  'description',
  '_description',
  'action',
] as const;

/**
 * TestReportTest - A test executed from the test script
 *
 * @see https://hl7.org/fhir/R4B/testreporttest.html
 *
 * @example
 * const testReportTest = new TestReportTest({
 *   // ... properties
 * });
 */
export class TestReportTest extends BackboneElement implements ITestReportTest {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Tracking/logging name of this test */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Tracking/reporting short description of the test */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** A test operation or assert that was performed */
  action: ITestReportTestAction[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestReportTest>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_REPORT_TEST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestReportTest from a JSON object
   */
  static fromJSON(json: ITestReportTest): TestReportTest {
    return new TestReportTest(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestReportTest with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestReportTest>): TestReportTest {
    return new TestReportTest({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestReportTest by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestReportTest) => Partial<ITestReportTest>): TestReportTest {
    const currentData = this.toJSON();
    return new TestReportTest({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestReportTest)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestReportTest {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_REPORT_TEST_PROPERTIES);
    return result as ITestReportTest;
  }

  /**
   * Create a deep clone of this TestReportTest
   */
  clone(): TestReportTest {
    return new TestReportTest(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestReportTest
   */
  toString(): string {
    const parts: string[] = ['TestReportTest'];
    return parts.join(', ');
  }
}
