import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IElement,
  ITestScriptOrigin,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TestScriptOrigin */
const TEST_SCRIPT_ORIGIN_PROPERTIES = [
  'index',
  '_index',
  'profile',
] as const;

/**
 * TestScriptOrigin - An abstract server representing a client or sender in a message exchange
 *
 * @see https://hl7.org/fhir/R4/testscriptorigin.html
 *
 * @example
 * const testScriptOrigin = new TestScriptOrigin({
 *   // ... properties
 * });
 */
export class TestScriptOrigin extends BackboneElement implements ITestScriptOrigin {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The index of the abstract origin server starting at 1 */
  index: number;

  /** Extension for index */
  _index?: IElement;

  /** FHIR-Client | FHIR-SDC-FormFiller */
  profile: ICoding;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptOrigin>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_ORIGIN_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptOrigin from a JSON object
   */
  static fromJSON(json: ITestScriptOrigin): TestScriptOrigin {
    return new TestScriptOrigin(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptOrigin with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptOrigin>): TestScriptOrigin {
    return new TestScriptOrigin({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptOrigin by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptOrigin) => Partial<ITestScriptOrigin>): TestScriptOrigin {
    const currentData = this.toJSON();
    return new TestScriptOrigin({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptOrigin)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptOrigin {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_ORIGIN_PROPERTIES);
    return result as ITestScriptOrigin;
  }

  /**
   * Create a deep clone of this TestScriptOrigin
   */
  clone(): TestScriptOrigin {
    return new TestScriptOrigin(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptOrigin
   */
  toString(): string {
    const parts: string[] = ['TestScriptOrigin'];
    return parts.join(', ');
  }
}
