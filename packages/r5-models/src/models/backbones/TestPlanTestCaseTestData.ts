import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IElement,
  IReference,
  ITestPlanTestCaseTestData,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestPlanTestCaseTestData */
const TEST_PLAN_TEST_CASE_TEST_DATA_PROPERTIES = [
  'type',
  'content',
  'sourceString',
  '_sourceString',
  'sourceReference',
] as const;

/**
 * TestPlanTestCaseTestData - The test data used in the test case
 *
 * @see https://hl7.org/fhir/R4/testplantestcasetestdata.html
 *
 * @example
 * const testPlanTestCaseTestData = new TestPlanTestCaseTestData({
 *   // ... properties
 * });
 */
export class TestPlanTestCaseTestData extends BackboneElement implements ITestPlanTestCaseTestData {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of test data description, e.g. 'synthea' */
  type: ICoding;

  /** The actual test resources when they exist */
  content?: IReference;

  /** Pointer to a definition of test resources - narrative or structured e.g. synthetic data generation, etc */
  sourceString?: string;

  /** Extension for sourceString */
  _sourceString?: IElement;

  /** Pointer to a definition of test resources - narrative or structured e.g. synthetic data generation, etc */
  sourceReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestPlanTestCaseTestData>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_PLAN_TEST_CASE_TEST_DATA_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestPlanTestCaseTestData from a JSON object
   */
  static fromJSON(json: ITestPlanTestCaseTestData): TestPlanTestCaseTestData {
    return new TestPlanTestCaseTestData(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestPlanTestCaseTestData with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestPlanTestCaseTestData>): TestPlanTestCaseTestData {
    return new TestPlanTestCaseTestData({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestPlanTestCaseTestData by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestPlanTestCaseTestData) => Partial<ITestPlanTestCaseTestData>): TestPlanTestCaseTestData {
    const currentData = this.toJSON();
    return new TestPlanTestCaseTestData({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestPlanTestCaseTestData)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestPlanTestCaseTestData {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_PLAN_TEST_CASE_TEST_DATA_PROPERTIES);
    return result as ITestPlanTestCaseTestData;
  }

  /**
   * Create a deep clone of this TestPlanTestCaseTestData
   */
  clone(): TestPlanTestCaseTestData {
    return new TestPlanTestCaseTestData(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestPlanTestCaseTestData
   */
  toString(): string {
    const parts: string[] = ['TestPlanTestCaseTestData'];
    return parts.join(', ');
  }
}
