import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ITestScriptSetupAction,
  ITestScriptSetupActionAssert,
  ITestScriptSetupActionOperation,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestScriptSetupAction */
const TEST_SCRIPT_SETUP_ACTION_PROPERTIES = [
  'operation',
  'assert',
] as const;

/**
 * TestScriptSetupAction - A setup operation or assert to perform
 *
 * @see https://hl7.org/fhir/R5/testscriptsetupaction.html
 *
 * @example
 * const testScriptSetupAction = new TestScriptSetupAction({
 *   // ... properties
 * });
 */
export class TestScriptSetupAction extends BackboneElement implements ITestScriptSetupAction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The setup operation to perform */
  operation?: ITestScriptSetupActionOperation;

  /** The assertion to perform */
  assert?: ITestScriptSetupActionAssert;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptSetupAction>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_SETUP_ACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptSetupAction from a JSON object
   */
  static fromJSON(json: ITestScriptSetupAction): TestScriptSetupAction {
    return new TestScriptSetupAction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptSetupAction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptSetupAction>): TestScriptSetupAction {
    return new TestScriptSetupAction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptSetupAction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptSetupAction) => Partial<ITestScriptSetupAction>): TestScriptSetupAction {
    const currentData = this.toJSON();
    return new TestScriptSetupAction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptSetupAction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptSetupAction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_SETUP_ACTION_PROPERTIES);
    return result as ITestScriptSetupAction;
  }

  /**
   * Create a deep clone of this TestScriptSetupAction
   */
  clone(): TestScriptSetupAction {
    return new TestScriptSetupAction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptSetupAction
   */
  toString(): string {
    const parts: string[] = ['TestScriptSetupAction'];
    return parts.join(', ');
  }
}
