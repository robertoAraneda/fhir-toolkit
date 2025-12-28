import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITestScriptMetadataLink,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TestScriptMetadataLink */
const TEST_SCRIPT_METADATA_LINK_PROPERTIES = [
  'url',
  '_url',
  'description',
  '_description',
] as const;

/**
 * TestScriptMetadataLink - Links to the FHIR specification
 *
 * @see https://hl7.org/fhir/R4B/testscriptmetadatalink.html
 *
 * @example
 * const testScriptMetadataLink = new TestScriptMetadataLink({
 *   // ... properties
 * });
 */
export class TestScriptMetadataLink extends BackboneElement implements ITestScriptMetadataLink {

  // ============================================================================
  // Properties
  // ============================================================================

  /** URL to the specification */
  url: string;

  /** Extension for url */
  _url?: IElement;

  /** Short description */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITestScriptMetadataLink>) {
    super(data);
    if (data) {
      this.assignProps(data, TEST_SCRIPT_METADATA_LINK_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TestScriptMetadataLink from a JSON object
   */
  static fromJSON(json: ITestScriptMetadataLink): TestScriptMetadataLink {
    return new TestScriptMetadataLink(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TestScriptMetadataLink with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITestScriptMetadataLink>): TestScriptMetadataLink {
    return new TestScriptMetadataLink({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TestScriptMetadataLink by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITestScriptMetadataLink) => Partial<ITestScriptMetadataLink>): TestScriptMetadataLink {
    const currentData = this.toJSON();
    return new TestScriptMetadataLink({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITestScriptMetadataLink)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITestScriptMetadataLink {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TEST_SCRIPT_METADATA_LINK_PROPERTIES);
    return result as ITestScriptMetadataLink;
  }

  /**
   * Create a deep clone of this TestScriptMetadataLink
   */
  clone(): TestScriptMetadataLink {
    return new TestScriptMetadataLink(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TestScriptMetadataLink
   */
  toString(): string {
    const parts: string[] = ['TestScriptMetadataLink'];
    return parts.join(', ');
  }
}
