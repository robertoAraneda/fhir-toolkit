import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IReference,
  ITestPlanDependency,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestPlanDependency */
const TEST_PLAN_DEPENDENCY_PROPERTIES = [
  'description',
  '_description',
  'predecessor',
] as const;

/**
 * TestPlanDependency - The required criteria to execute the test plan - e.g. preconditions, previous tests
 *
 * @see https://hl7.org/fhir/R4/testplandependency.html
 *
 * @example
 * const testPlanDependency = new TestPlanDependency({
 *   // ... properties
 * });
 */
export class TestPlanDependency extends BackboneElement implements ITestPlanDependency {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Description of the dependency criterium */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Link to predecessor test plans */
  predecessor?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestPlanDependency>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_PLAN_DEPENDENCY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestPlanDependency from a JSON object
   */
  static fromJSON(json: ITestPlanDependency): TestPlanDependency {
    return new TestPlanDependency(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestPlanDependency with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestPlanDependency>): TestPlanDependency {
    return new TestPlanDependency({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestPlanDependency by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestPlanDependency) => Partial<ITestPlanDependency>): TestPlanDependency {
    const currentData = this.toJSON();
    return new TestPlanDependency({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestPlanDependency)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestPlanDependency {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_PLAN_DEPENDENCY_PROPERTIES);
    return result as ITestPlanDependency;
  }

  /**
   * Create a deep clone of this TestPlanDependency
   */
  clone(): TestPlanDependency {
    return new TestPlanDependency(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestPlanDependency
   */
  toString(): string {
    const parts: string[] = ['TestPlanDependency'];
    return parts.join(', ');
  }
}
