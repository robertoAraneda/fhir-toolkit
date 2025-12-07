import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITestScriptTest,
  ITestScriptTestAction,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TestScriptTest */
const TEST_SCRIPT_TEST_PROPERTIES = [
  'name',
  '_name',
  'description',
  '_description',
  'action',
] as const;

/**
 * TestScriptTest - A test in this script
 *
 * @see https://hl7.org/fhir/R4/testscripttest.html
 *
 * @example
 * const testScriptTest = new TestScriptTest({
 *   // ... properties
 * });
 */
export class TestScriptTest extends BackboneElement implements ITestScriptTest {

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

  /** A test operation or assert to perform */
  action: ITestScriptTestAction[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptTest>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_TEST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptTest from a JSON object
   */
  static fromJSON(json: ITestScriptTest): TestScriptTest {
    return new TestScriptTest(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptTest with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptTest>): TestScriptTest {
    return new TestScriptTest({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptTest by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptTest) => Partial<ITestScriptTest>): TestScriptTest {
    const currentData = this.toJSON();
    return new TestScriptTest({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptTest)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptTest {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_TEST_PROPERTIES);
    return result as ITestScriptTest;
  }

  /**
   * Create a deep clone of this TestScriptTest
   */
  clone(): TestScriptTest {
    return new TestScriptTest(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptTest
   */
  toString(): string {
    const parts: string[] = ['TestScriptTest'];
    return parts.join(', ');
  }
}
