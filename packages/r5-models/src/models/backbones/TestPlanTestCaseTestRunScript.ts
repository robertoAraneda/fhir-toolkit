import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IReference,
  ITestPlanTestCaseTestRunScript,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestPlanTestCaseTestRunScript */
const TEST_PLAN_TEST_CASE_TEST_RUN_SCRIPT_PROPERTIES = [
  'language',
  'sourceString',
  '_sourceString',
  'sourceReference',
] as const;

/**
 * TestPlanTestCaseTestRunScript - The test cases in a structured language e.g. gherkin, Postman, or FHIR TestScript
 *
 * @see https://hl7.org/fhir/R5/testplantestcasetestrunscript.html
 *
 * @example
 * const testPlanTestCaseTestRunScript = new TestPlanTestCaseTestRunScript({
 *   // ... properties
 * });
 */
export class TestPlanTestCaseTestRunScript extends BackboneElement implements ITestPlanTestCaseTestRunScript {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The language for the test cases e.g. 'gherkin', 'testscript' */
  language?: ICodeableConcept;

  /** The actual content of the cases - references to TestScripts or externally defined content */
  sourceString?: string;

  /** Extension for sourceString */
  _sourceString?: IElement;

  /** The actual content of the cases - references to TestScripts or externally defined content */
  sourceReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestPlanTestCaseTestRunScript>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_PLAN_TEST_CASE_TEST_RUN_SCRIPT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestPlanTestCaseTestRunScript from a JSON object
   */
  static fromJSON(json: ITestPlanTestCaseTestRunScript): TestPlanTestCaseTestRunScript {
    return new TestPlanTestCaseTestRunScript(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestPlanTestCaseTestRunScript with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestPlanTestCaseTestRunScript>): TestPlanTestCaseTestRunScript {
    return new TestPlanTestCaseTestRunScript({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestPlanTestCaseTestRunScript by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestPlanTestCaseTestRunScript) => Partial<ITestPlanTestCaseTestRunScript>): TestPlanTestCaseTestRunScript {
    const currentData = this.toJSON();
    return new TestPlanTestCaseTestRunScript({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestPlanTestCaseTestRunScript)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestPlanTestCaseTestRunScript {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_PLAN_TEST_CASE_TEST_RUN_SCRIPT_PROPERTIES);
    return result as ITestPlanTestCaseTestRunScript;
  }

  /**
   * Create a deep clone of this TestPlanTestCaseTestRunScript
   */
  clone(): TestPlanTestCaseTestRunScript {
    return new TestPlanTestCaseTestRunScript(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestPlanTestCaseTestRunScript
   */
  toString(): string {
    const parts: string[] = ['TestPlanTestCaseTestRunScript'];
    return parts.join(', ');
  }
}
