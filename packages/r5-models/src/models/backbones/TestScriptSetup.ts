import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ITestScriptSetup,
  ITestScriptSetupAction,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestScriptSetup */
const TEST_SCRIPT_SETUP_PROPERTIES = [
  'action',
] as const;

/**
 * TestScriptSetup - A series of required setup operations before tests are executed
 *
 * @see https://hl7.org/fhir/R5/testscriptsetup.html
 *
 * @example
 * const testScriptSetup = new TestScriptSetup({
 *   // ... properties
 * });
 */
export class TestScriptSetup extends BackboneElement implements ITestScriptSetup {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A setup operation or assert to perform */
  action: ITestScriptSetupAction[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptSetup>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_SETUP_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptSetup from a JSON object
   */
  static fromJSON(json: ITestScriptSetup): TestScriptSetup {
    return new TestScriptSetup(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptSetup with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptSetup>): TestScriptSetup {
    return new TestScriptSetup({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptSetup by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptSetup) => Partial<ITestScriptSetup>): TestScriptSetup {
    const currentData = this.toJSON();
    return new TestScriptSetup({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptSetup)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptSetup {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_SETUP_PROPERTIES);
    return result as ITestScriptSetup;
  }

  /**
   * Create a deep clone of this TestScriptSetup
   */
  clone(): TestScriptSetup {
    return new TestScriptSetup(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptSetup
   */
  toString(): string {
    const parts: string[] = ['TestScriptSetup'];
    return parts.join(', ');
  }
}
