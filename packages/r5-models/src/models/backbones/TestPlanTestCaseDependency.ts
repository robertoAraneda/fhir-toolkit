import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IReference,
  ITestPlanTestCaseDependency,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestPlanTestCaseDependency */
const TEST_PLAN_TEST_CASE_DEPENDENCY_PROPERTIES = [
  'description',
  '_description',
  'predecessor',
] as const;

/**
 * TestPlanTestCaseDependency - Required criteria to execute the test case
 *
 * @see https://hl7.org/fhir/R5/testplantestcasedependency.html
 *
 * @example
 * const testPlanTestCaseDependency = new TestPlanTestCaseDependency({
 *   // ... properties
 * });
 */
export class TestPlanTestCaseDependency extends BackboneElement implements ITestPlanTestCaseDependency {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Description of the criteria */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Link to predecessor test plans */
  predecessor?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestPlanTestCaseDependency>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_PLAN_TEST_CASE_DEPENDENCY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestPlanTestCaseDependency from a JSON object
   */
  static fromJSON(json: ITestPlanTestCaseDependency): TestPlanTestCaseDependency {
    return new TestPlanTestCaseDependency(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestPlanTestCaseDependency with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestPlanTestCaseDependency>): TestPlanTestCaseDependency {
    return new TestPlanTestCaseDependency({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestPlanTestCaseDependency by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestPlanTestCaseDependency) => Partial<ITestPlanTestCaseDependency>): TestPlanTestCaseDependency {
    const currentData = this.toJSON();
    return new TestPlanTestCaseDependency({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestPlanTestCaseDependency)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestPlanTestCaseDependency {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_PLAN_TEST_CASE_DEPENDENCY_PROPERTIES);
    return result as ITestPlanTestCaseDependency;
  }

  /**
   * Create a deep clone of this TestPlanTestCaseDependency
   */
  clone(): TestPlanTestCaseDependency {
    return new TestPlanTestCaseDependency(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestPlanTestCaseDependency
   */
  toString(): string {
    const parts: string[] = ['TestPlanTestCaseDependency'];
    return parts.join(', ');
  }
}
