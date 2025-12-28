import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITestScriptVariable,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TestScriptVariable */
const TEST_SCRIPT_VARIABLE_PROPERTIES = [
  'name',
  '_name',
  'defaultValue',
  '_defaultValue',
  'description',
  '_description',
  'expression',
  '_expression',
  'headerField',
  '_headerField',
  'hint',
  '_hint',
  'path',
  '_path',
  'sourceId',
  '_sourceId',
] as const;

/**
 * TestScriptVariable - Placeholder for evaluated elements
 *
 * @see https://hl7.org/fhir/R4B/testscriptvariable.html
 *
 * @example
 * const testScriptVariable = new TestScriptVariable({
 *   // ... properties
 * });
 */
export class TestScriptVariable extends BackboneElement implements ITestScriptVariable {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Descriptive name for this variable */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Default, hard-coded, or user-defined value for this variable */
  defaultValue?: string;

  /** Extension for defaultValue */
  _defaultValue?: IElement;

  /** Natural language description of the variable */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The FHIRPath expression against the fixture body */
  expression?: string;

  /** Extension for expression */
  _expression?: IElement;

  /** HTTP header field name for source */
  headerField?: string;

  /** Extension for headerField */
  _headerField?: IElement;

  /** Hint help text for default value to enter */
  hint?: string;

  /** Extension for hint */
  _hint?: IElement;

  /** XPath or JSONPath against the fixture body */
  path?: string;

  /** Extension for path */
  _path?: IElement;

  /** Fixture Id of source expression or headerField within this variable */
  sourceId?: string;

  /** Extension for sourceId */
  _sourceId?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptVariable>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_VARIABLE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptVariable from a JSON object
   */
  static fromJSON(json: ITestScriptVariable): TestScriptVariable {
    return new TestScriptVariable(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptVariable with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptVariable>): TestScriptVariable {
    return new TestScriptVariable({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptVariable by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptVariable) => Partial<ITestScriptVariable>): TestScriptVariable {
    const currentData = this.toJSON();
    return new TestScriptVariable({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptVariable)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptVariable {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_VARIABLE_PROPERTIES);
    return result as ITestScriptVariable;
  }

  /**
   * Create a deep clone of this TestScriptVariable
   */
  clone(): TestScriptVariable {
    return new TestScriptVariable(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptVariable
   */
  toString(): string {
    const parts: string[] = ['TestScriptVariable'];
    return parts.join(', ');
  }
}
