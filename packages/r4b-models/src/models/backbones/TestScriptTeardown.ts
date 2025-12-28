import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ITestScriptTeardown,
  ITestScriptTeardownAction,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TestScriptTeardown */
const TEST_SCRIPT_TEARDOWN_PROPERTIES = [
  'action',
] as const;

/**
 * TestScriptTeardown - A series of required clean up steps
 *
 * @see https://hl7.org/fhir/R4B/testscriptteardown.html
 *
 * @example
 * const testScriptTeardown = new TestScriptTeardown({
 *   // ... properties
 * });
 */
export class TestScriptTeardown extends BackboneElement implements ITestScriptTeardown {

  // ============================================================================
  // Properties
  // ============================================================================

  /** One or more teardown operations to perform */
  action: ITestScriptTeardownAction[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptTeardown>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_TEARDOWN_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptTeardown from a JSON object
   */
  static fromJSON(json: ITestScriptTeardown): TestScriptTeardown {
    return new TestScriptTeardown(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptTeardown with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptTeardown>): TestScriptTeardown {
    return new TestScriptTeardown({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptTeardown by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptTeardown) => Partial<ITestScriptTeardown>): TestScriptTeardown {
    const currentData = this.toJSON();
    return new TestScriptTeardown({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptTeardown)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptTeardown {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_TEARDOWN_PROPERTIES);
    return result as ITestScriptTeardown;
  }

  /**
   * Create a deep clone of this TestScriptTeardown
   */
  clone(): TestScriptTeardown {
    return new TestScriptTeardown(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptTeardown
   */
  toString(): string {
    const parts: string[] = ['TestScriptTeardown'];
    return parts.join(', ');
  }
}
