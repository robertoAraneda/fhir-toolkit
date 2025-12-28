import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITestPlanTestCaseTestRun,
  ITestPlanTestCaseTestRunScript,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestPlanTestCaseTestRun */
const TEST_PLAN_TEST_CASE_TEST_RUN_PROPERTIES = [
  'narrative',
  '_narrative',
  'script',
] as const;

/**
 * TestPlanTestCaseTestRun - The actual test to be executed
 *
 * @see https://hl7.org/fhir/R5/testplantestcasetestrun.html
 *
 * @example
 * const testPlanTestCaseTestRun = new TestPlanTestCaseTestRun({
 *   // ... properties
 * });
 */
export class TestPlanTestCaseTestRun extends BackboneElement implements ITestPlanTestCaseTestRun {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The narrative description of the tests */
  narrative?: string;

  /** Extension for narrative */
  _narrative?: IElement;

  /** The test cases in a structured language e.g. gherkin, Postman, or FHIR TestScript */
  script?: ITestPlanTestCaseTestRunScript;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestPlanTestCaseTestRun>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_PLAN_TEST_CASE_TEST_RUN_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestPlanTestCaseTestRun from a JSON object
   */
  static fromJSON(json: ITestPlanTestCaseTestRun): TestPlanTestCaseTestRun {
    return new TestPlanTestCaseTestRun(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestPlanTestCaseTestRun with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestPlanTestCaseTestRun>): TestPlanTestCaseTestRun {
    return new TestPlanTestCaseTestRun({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestPlanTestCaseTestRun by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestPlanTestCaseTestRun) => Partial<ITestPlanTestCaseTestRun>): TestPlanTestCaseTestRun {
    const currentData = this.toJSON();
    return new TestPlanTestCaseTestRun({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestPlanTestCaseTestRun)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestPlanTestCaseTestRun {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_PLAN_TEST_CASE_TEST_RUN_PROPERTIES);
    return result as ITestPlanTestCaseTestRun;
  }

  /**
   * Create a deep clone of this TestPlanTestCaseTestRun
   */
  clone(): TestPlanTestCaseTestRun {
    return new TestPlanTestCaseTestRun(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestPlanTestCaseTestRun
   */
  toString(): string {
    const parts: string[] = ['TestPlanTestCaseTestRun'];
    return parts.join(', ');
  }
}
