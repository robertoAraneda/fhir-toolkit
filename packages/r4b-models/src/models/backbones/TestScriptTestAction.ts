import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ITestScriptSetupActionAssert,
  ITestScriptSetupActionOperation,
  ITestScriptTestAction,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TestScriptTestAction */
const TEST_SCRIPT_TEST_ACTION_PROPERTIES = [
  'operation',
  'assert',
] as const;

/**
 * TestScriptTestAction - A test operation or assert to perform
 *
 * @see https://hl7.org/fhir/R4/testscripttestaction.html
 *
 * @example
 * const testScriptTestAction = new TestScriptTestAction({
 *   // ... properties
 * });
 */
export class TestScriptTestAction extends BackboneElement implements ITestScriptTestAction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The setup operation to perform */
  operation?: ITestScriptSetupActionOperation;

  /** The setup assertion to perform */
  assert?: ITestScriptSetupActionAssert;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptTestAction>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_TEST_ACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptTestAction from a JSON object
   */
  static fromJSON(json: ITestScriptTestAction): TestScriptTestAction {
    return new TestScriptTestAction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptTestAction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptTestAction>): TestScriptTestAction {
    return new TestScriptTestAction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptTestAction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptTestAction) => Partial<ITestScriptTestAction>): TestScriptTestAction {
    const currentData = this.toJSON();
    return new TestScriptTestAction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptTestAction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptTestAction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_TEST_ACTION_PROPERTIES);
    return result as ITestScriptTestAction;
  }

  /**
   * Create a deep clone of this TestScriptTestAction
   */
  clone(): TestScriptTestAction {
    return new TestScriptTestAction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptTestAction
   */
  toString(): string {
    const parts: string[] = ['TestScriptTestAction'];
    return parts.join(', ');
  }
}
