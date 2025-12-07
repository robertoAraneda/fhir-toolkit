import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IReference,
  ITestPlanTestCase,
  ITestPlanTestCaseAssertion,
  ITestPlanTestCaseDependency,
  ITestPlanTestCaseTestData,
  ITestPlanTestCaseTestRun,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestPlanTestCase */
const TEST_PLAN_TEST_CASE_PROPERTIES = [
  'sequence',
  '_sequence',
  'scope',
  'dependency',
  'testRun',
  'testData',
  'assertion',
] as const;

/**
 * TestPlanTestCase - The test cases that constitute this plan
 *
 * @see https://hl7.org/fhir/R4/testplantestcase.html
 *
 * @example
 * const testPlanTestCase = new TestPlanTestCase({
 *   // ... properties
 * });
 */
export class TestPlanTestCase extends BackboneElement implements ITestPlanTestCase {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Sequence of test case in the test plan */
  sequence?: number;

  /** Extension for sequence */
  _sequence?: IElement;

  /** The scope or artifact covered by the case */
  scope?: IReference[];

  /** Required criteria to execute the test case */
  dependency?: ITestPlanTestCaseDependency[];

  /** The actual test to be executed */
  testRun?: ITestPlanTestCaseTestRun[];

  /** The test data used in the test case */
  testData?: ITestPlanTestCaseTestData[];

  /** Test assertions or expectations */
  assertion?: ITestPlanTestCaseAssertion[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestPlanTestCase>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_PLAN_TEST_CASE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestPlanTestCase from a JSON object
   */
  static fromJSON(json: ITestPlanTestCase): TestPlanTestCase {
    return new TestPlanTestCase(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestPlanTestCase with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestPlanTestCase>): TestPlanTestCase {
    return new TestPlanTestCase({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestPlanTestCase by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestPlanTestCase) => Partial<ITestPlanTestCase>): TestPlanTestCase {
    const currentData = this.toJSON();
    return new TestPlanTestCase({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestPlanTestCase)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestPlanTestCase {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_PLAN_TEST_CASE_PROPERTIES);
    return result as ITestPlanTestCase;
  }

  /**
   * Create a deep clone of this TestPlanTestCase
   */
  clone(): TestPlanTestCase {
    return new TestPlanTestCase(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestPlanTestCase
   */
  toString(): string {
    const parts: string[] = ['TestPlanTestCase'];
    return parts.join(', ');
  }
}
