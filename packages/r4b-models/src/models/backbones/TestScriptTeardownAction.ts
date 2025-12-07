import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ITestScriptSetupActionOperation,
  ITestScriptTeardownAction,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TestScriptTeardownAction */
const TEST_SCRIPT_TEARDOWN_ACTION_PROPERTIES = [
  'operation',
] as const;

/**
 * TestScriptTeardownAction - One or more teardown operations to perform
 *
 * @see https://hl7.org/fhir/R4/testscriptteardownaction.html
 *
 * @example
 * const testScriptTeardownAction = new TestScriptTeardownAction({
 *   // ... properties
 * });
 */
export class TestScriptTeardownAction extends BackboneElement implements ITestScriptTeardownAction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The teardown operation to perform */
  operation: ITestScriptSetupActionOperation;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptTeardownAction>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_TEARDOWN_ACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptTeardownAction from a JSON object
   */
  static fromJSON(json: ITestScriptTeardownAction): TestScriptTeardownAction {
    return new TestScriptTeardownAction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptTeardownAction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptTeardownAction>): TestScriptTeardownAction {
    return new TestScriptTeardownAction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptTeardownAction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptTeardownAction) => Partial<ITestScriptTeardownAction>): TestScriptTeardownAction {
    const currentData = this.toJSON();
    return new TestScriptTeardownAction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptTeardownAction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptTeardownAction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_TEARDOWN_ACTION_PROPERTIES);
    return result as ITestScriptTeardownAction;
  }

  /**
   * Create a deep clone of this TestScriptTeardownAction
   */
  clone(): TestScriptTeardownAction {
    return new TestScriptTeardownAction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptTeardownAction
   */
  toString(): string {
    const parts: string[] = ['TestScriptTeardownAction'];
    return parts.join(', ');
  }
}
