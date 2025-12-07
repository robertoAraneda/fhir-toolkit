import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITestScriptMetadataCapability,
} from '@fhir-toolkit/r4-types';

/** Properties specific to TestScriptMetadataCapability */
const TEST_SCRIPT_METADATA_CAPABILITY_PROPERTIES = [
  'required',
  '_required',
  'validated',
  '_validated',
  'description',
  '_description',
  'origin',
  '_origin',
  'destination',
  '_destination',
  'link',
  '_link',
  'capabilities',
  '_capabilities',
] as const;

/**
 * TestScriptMetadataCapability - Capabilities  that are assumed to function correctly on the FHIR server being tested
 *
 * @see https://hl7.org/fhir/R4/testscriptmetadatacapability.html
 *
 * @example
 * const testScriptMetadataCapability = new TestScriptMetadataCapability({
 *   // ... properties
 * });
 */
export class TestScriptMetadataCapability extends BackboneElement implements ITestScriptMetadataCapability {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Are the capabilities required? */
  required: boolean;

  /** Extension for required */
  _required?: IElement;

  /** Are the capabilities validated? */
  validated: boolean;

  /** Extension for validated */
  _validated?: IElement;

  /** The expected capabilities of the server */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Which origin server these requirements apply to */
  origin?: number[];

  /** Extension for origin */
  _origin?: IElement;

  /** Which server these requirements apply to */
  destination?: number;

  /** Extension for destination */
  _destination?: IElement;

  /** Links to the FHIR specification */
  link?: string[];

  /** Extension for link */
  _link?: IElement;

  /** Required Capability Statement */
  capabilities: string;

  /** Extension for capabilities */
  _capabilities?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptMetadataCapability>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_METADATA_CAPABILITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptMetadataCapability from a JSON object
   */
  static fromJSON(json: ITestScriptMetadataCapability): TestScriptMetadataCapability {
    return new TestScriptMetadataCapability(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptMetadataCapability with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptMetadataCapability>): TestScriptMetadataCapability {
    return new TestScriptMetadataCapability({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptMetadataCapability by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptMetadataCapability) => Partial<ITestScriptMetadataCapability>): TestScriptMetadataCapability {
    const currentData = this.toJSON();
    return new TestScriptMetadataCapability({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptMetadataCapability)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptMetadataCapability {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_METADATA_CAPABILITY_PROPERTIES);
    return result as ITestScriptMetadataCapability;
  }

  /**
   * Create a deep clone of this TestScriptMetadataCapability
   */
  clone(): TestScriptMetadataCapability {
    return new TestScriptMetadataCapability(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptMetadataCapability
   */
  toString(): string {
    const parts: string[] = ['TestScriptMetadataCapability'];
    return parts.join(', ');
  }
}
