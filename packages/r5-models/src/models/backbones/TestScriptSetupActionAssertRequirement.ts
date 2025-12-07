import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITestScriptSetupActionAssertRequirement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestScriptSetupActionAssertRequirement */
const TEST_SCRIPT_SETUP_ACTION_ASSERT_REQUIREMENT_PROPERTIES = [
  'linkUri',
  '_linkUri',
  'linkCanonical',
  '_linkCanonical',
] as const;

/**
 * TestScriptSetupActionAssertRequirement - Links or references to the testing requirements
 *
 * @see https://hl7.org/fhir/R4/testscriptsetupactionassertrequirement.html
 *
 * @example
 * const testScriptSetupActionAssertRequirement = new TestScriptSetupActionAssertRequirement({
 *   // ... properties
 * });
 */
export class TestScriptSetupActionAssertRequirement extends BackboneElement implements ITestScriptSetupActionAssertRequirement {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Link or reference to the testing requirement */
  linkUri?: string;

  /** Extension for linkUri */
  _linkUri?: IElement;

  /** Link or reference to the testing requirement */
  linkCanonical?: string;

  /** Extension for linkCanonical */
  _linkCanonical?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptSetupActionAssertRequirement>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_SETUP_ACTION_ASSERT_REQUIREMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptSetupActionAssertRequirement from a JSON object
   */
  static fromJSON(json: ITestScriptSetupActionAssertRequirement): TestScriptSetupActionAssertRequirement {
    return new TestScriptSetupActionAssertRequirement(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptSetupActionAssertRequirement with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptSetupActionAssertRequirement>): TestScriptSetupActionAssertRequirement {
    return new TestScriptSetupActionAssertRequirement({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptSetupActionAssertRequirement by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptSetupActionAssertRequirement) => Partial<ITestScriptSetupActionAssertRequirement>): TestScriptSetupActionAssertRequirement {
    const currentData = this.toJSON();
    return new TestScriptSetupActionAssertRequirement({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptSetupActionAssertRequirement)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptSetupActionAssertRequirement {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_SETUP_ACTION_ASSERT_REQUIREMENT_PROPERTIES);
    return result as ITestScriptSetupActionAssertRequirement;
  }

  /**
   * Create a deep clone of this TestScriptSetupActionAssertRequirement
   */
  clone(): TestScriptSetupActionAssertRequirement {
    return new TestScriptSetupActionAssertRequirement(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptSetupActionAssertRequirement
   */
  toString(): string {
    const parts: string[] = ['TestScriptSetupActionAssertRequirement'];
    return parts.join(', ');
  }
}
