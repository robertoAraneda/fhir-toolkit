import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  ITestScriptScope,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestScriptScope */
const TEST_SCRIPT_SCOPE_PROPERTIES = [
  'artifact',
  '_artifact',
  'conformance',
  'phase',
] as const;

/**
 * TestScriptScope - Indication of the artifact(s) that are tested by this test case
 *
 * @see https://hl7.org/fhir/R4/testscriptscope.html
 *
 * @example
 * const testScriptScope = new TestScriptScope({
 *   // ... properties
 * });
 */
export class TestScriptScope extends BackboneElement implements ITestScriptScope {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The specific conformance artifact being tested */
  artifact: string;

  /** Extension for artifact */
  _artifact?: IElement;

  /** required | optional | strict */
  conformance?: ICodeableConcept;

  /** unit | integration | production */
  phase?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptScope>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_SCOPE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptScope from a JSON object
   */
  static fromJSON(json: ITestScriptScope): TestScriptScope {
    return new TestScriptScope(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptScope with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptScope>): TestScriptScope {
    return new TestScriptScope({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptScope by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptScope) => Partial<ITestScriptScope>): TestScriptScope {
    const currentData = this.toJSON();
    return new TestScriptScope({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptScope)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptScope {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_SCOPE_PROPERTIES);
    return result as ITestScriptScope;
  }

  /**
   * Create a deep clone of this TestScriptScope
   */
  clone(): TestScriptScope {
    return new TestScriptScope(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptScope
   */
  toString(): string {
    const parts: string[] = ['TestScriptScope'];
    return parts.join(', ');
  }
}
