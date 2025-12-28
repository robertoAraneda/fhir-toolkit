import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  ITestPlanTestCaseAssertion,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestPlanTestCaseAssertion */
const TEST_PLAN_TEST_CASE_ASSERTION_PROPERTIES = [
  'type',
  'object',
  'result',
] as const;

/**
 * TestPlanTestCaseAssertion - Test assertions or expectations
 *
 * @see https://hl7.org/fhir/R5/testplantestcaseassertion.html
 *
 * @example
 * const testPlanTestCaseAssertion = new TestPlanTestCaseAssertion({
 *   // ... properties
 * });
 */
export class TestPlanTestCaseAssertion extends BackboneElement implements ITestPlanTestCaseAssertion {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Assertion type - for example 'informative' or 'required'  */
  type?: ICodeableConcept[];

  /** The focus or object of the assertion */
  object?: ICodeableReference[];

  /** The actual result assertion */
  result?: ICodeableReference[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestPlanTestCaseAssertion>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_PLAN_TEST_CASE_ASSERTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestPlanTestCaseAssertion from a JSON object
   */
  static fromJSON(json: ITestPlanTestCaseAssertion): TestPlanTestCaseAssertion {
    return new TestPlanTestCaseAssertion(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestPlanTestCaseAssertion with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestPlanTestCaseAssertion>): TestPlanTestCaseAssertion {
    return new TestPlanTestCaseAssertion({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestPlanTestCaseAssertion by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestPlanTestCaseAssertion) => Partial<ITestPlanTestCaseAssertion>): TestPlanTestCaseAssertion {
    const currentData = this.toJSON();
    return new TestPlanTestCaseAssertion({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestPlanTestCaseAssertion)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestPlanTestCaseAssertion {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_PLAN_TEST_CASE_ASSERTION_PROPERTIES);
    return result as ITestPlanTestCaseAssertion;
  }

  /**
   * Create a deep clone of this TestPlanTestCaseAssertion
   */
  clone(): TestPlanTestCaseAssertion {
    return new TestPlanTestCaseAssertion(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestPlanTestCaseAssertion
   */
  toString(): string {
    const parts: string[] = ['TestPlanTestCaseAssertion'];
    return parts.join(', ');
  }
}
