import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ITestScriptMetadata,
  ITestScriptMetadataCapability,
  ITestScriptMetadataLink,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TestScriptMetadata */
const TEST_SCRIPT_METADATA_PROPERTIES = [
  'link',
  'capability',
] as const;

/**
 * TestScriptMetadata - Required capability that is assumed to function correctly on the FHIR server being tested
 *
 * @see https://hl7.org/fhir/R4/testscriptmetadata.html
 *
 * @example
 * const testScriptMetadata = new TestScriptMetadata({
 *   // ... properties
 * });
 */
export class TestScriptMetadata extends BackboneElement implements ITestScriptMetadata {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Links to the FHIR specification */
  link?: ITestScriptMetadataLink[];

  /** Capabilities  that are assumed to function correctly on the FHIR server being tested */
  capability: ITestScriptMetadataCapability[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptMetadata>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_METADATA_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptMetadata from a JSON object
   */
  static fromJSON(json: ITestScriptMetadata): TestScriptMetadata {
    return new TestScriptMetadata(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptMetadata with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptMetadata>): TestScriptMetadata {
    return new TestScriptMetadata({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptMetadata by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptMetadata) => Partial<ITestScriptMetadata>): TestScriptMetadata {
    const currentData = this.toJSON();
    return new TestScriptMetadata({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptMetadata)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptMetadata {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_METADATA_PROPERTIES);
    return result as ITestScriptMetadata;
  }

  /**
   * Create a deep clone of this TestScriptMetadata
   */
  clone(): TestScriptMetadata {
    return new TestScriptMetadata(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptMetadata
   */
  toString(): string {
    const parts: string[] = ['TestScriptMetadata'];
    return parts.join(', ');
  }
}
