import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICodeableConcept,
  IElement,
  ISubstanceDefinitionCharacterization,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstanceDefinitionCharacterization */
const SUBSTANCE_DEFINITION_CHARACTERIZATION_PROPERTIES = [
  'technique',
  'form',
  'description',
  '_description',
  'file',
] as const;

/**
 * SubstanceDefinitionCharacterization - General specifications for this substance
 *
 * @see https://hl7.org/fhir/R4/substancedefinitioncharacterization.html
 *
 * @example
 * const substanceDefinitionCharacterization = new SubstanceDefinitionCharacterization({
 *   // ... properties
 * });
 */
export class SubstanceDefinitionCharacterization extends BackboneElement implements ISubstanceDefinitionCharacterization {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The method used to find the characterization e.g. HPLC */
  technique?: ICodeableConcept;

  /** Describes the nature of the chemical entity and explains, for instance, whether this is a base or a salt form */
  form?: ICodeableConcept;

  /** The description or justification in support of the interpretation of the data file */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The data produced by the analytical instrument or a pictorial representation of that data. Examples: a JCAMP, JDX, or ADX file, or a chromatogram or spectrum analysis */
  file?: IAttachment[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceDefinitionCharacterization>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_DEFINITION_CHARACTERIZATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceDefinitionCharacterization from a JSON object
   */
  static fromJSON(json: ISubstanceDefinitionCharacterization): SubstanceDefinitionCharacterization {
    return new SubstanceDefinitionCharacterization(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceDefinitionCharacterization with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceDefinitionCharacterization>): SubstanceDefinitionCharacterization {
    return new SubstanceDefinitionCharacterization({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceDefinitionCharacterization by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceDefinitionCharacterization) => Partial<ISubstanceDefinitionCharacterization>): SubstanceDefinitionCharacterization {
    const currentData = this.toJSON();
    return new SubstanceDefinitionCharacterization({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceDefinitionCharacterization)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceDefinitionCharacterization {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_DEFINITION_CHARACTERIZATION_PROPERTIES);
    return result as ISubstanceDefinitionCharacterization;
  }

  /**
   * Create a deep clone of this SubstanceDefinitionCharacterization
   */
  clone(): SubstanceDefinitionCharacterization {
    return new SubstanceDefinitionCharacterization(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceDefinitionCharacterization
   */
  toString(): string {
    const parts: string[] = ['SubstanceDefinitionCharacterization'];
    return parts.join(', ');
  }
}
