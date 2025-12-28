import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IElement,
  ITestScriptDestination,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TestScriptDestination */
const TEST_SCRIPT_DESTINATION_PROPERTIES = [
  'index',
  '_index',
  'profile',
  'url',
  '_url',
] as const;

/**
 * TestScriptDestination - An abstract server representing a destination or receiver in a message exchange
 *
 * @see https://hl7.org/fhir/R5/testscriptdestination.html
 *
 * @example
 * const testScriptDestination = new TestScriptDestination({
 *   // ... properties
 * });
 */
export class TestScriptDestination extends BackboneElement implements ITestScriptDestination {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The index of the abstract destination server starting at 1 */
  index: number;

  /** Extension for index */
  _index?: IElement;

  /** FHIR-Server | FHIR-SDC-FormManager | FHIR-SDC-FormReceiver | FHIR-SDC-FormProcessor */
  profile: ICoding;

  /** The url path of the destination server */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptDestination>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_DESTINATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptDestination from a JSON object
   */
  static fromJSON(json: ITestScriptDestination): TestScriptDestination {
    return new TestScriptDestination(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptDestination with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptDestination>): TestScriptDestination {
    return new TestScriptDestination({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptDestination by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptDestination) => Partial<ITestScriptDestination>): TestScriptDestination {
    const currentData = this.toJSON();
    return new TestScriptDestination({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptDestination)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptDestination {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_DESTINATION_PROPERTIES);
    return result as ITestScriptDestination;
  }

  /**
   * Create a deep clone of this TestScriptDestination
   */
  clone(): TestScriptDestination {
    return new TestScriptDestination(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptDestination
   */
  toString(): string {
    const parts: string[] = ['TestScriptDestination'];
    return parts.join(', ');
  }
}
