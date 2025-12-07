import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IMolecularSequenceVariant,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MolecularSequenceVariant */
const MOLECULAR_SEQUENCE_VARIANT_PROPERTIES = [
  'start',
  '_start',
  'end',
  '_end',
  'observedAllele',
  '_observedAllele',
  'referenceAllele',
  '_referenceAllele',
  'cigar',
  '_cigar',
  'variantPointer',
] as const;

/**
 * MolecularSequenceVariant - Variant in sequence
 *
 * @see https://hl7.org/fhir/R4/molecularsequencevariant.html
 *
 * @example
 * const molecularSequenceVariant = new MolecularSequenceVariant({
 *   // ... properties
 * });
 */
export class MolecularSequenceVariant extends BackboneElement implements IMolecularSequenceVariant {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Start position of the variant on the  reference sequence */
  start?: number;

  /** Extension for start */
  _start?: IElement;

  /** End position of the variant on the reference sequence */
  end?: number;

  /** Extension for end */
  _end?: IElement;

  /** Allele that was observed */
  observedAllele?: string;

  /** Extension for observedAllele */
  _observedAllele?: IElement;

  /** Allele in the reference sequence */
  referenceAllele?: string;

  /** Extension for referenceAllele */
  _referenceAllele?: IElement;

  /** Extended CIGAR string for aligning the sequence with reference bases */
  cigar?: string;

  /** Extension for cigar */
  _cigar?: IElement;

  /** Pointer to observed variant information */
  variantPointer?: IReference<'Observation'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMolecularSequenceVariant>) {
    super(data);
    if (data) {
      this.assignProps(data, MOLECULAR_SEQUENCE_VARIANT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MolecularSequenceVariant from a JSON object
   */
  static fromJSON(json: IMolecularSequenceVariant): MolecularSequenceVariant {
    return new MolecularSequenceVariant(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MolecularSequenceVariant with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMolecularSequenceVariant>): MolecularSequenceVariant {
    return new MolecularSequenceVariant({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MolecularSequenceVariant by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMolecularSequenceVariant) => Partial<IMolecularSequenceVariant>): MolecularSequenceVariant {
    const currentData = this.toJSON();
    return new MolecularSequenceVariant({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMolecularSequenceVariant)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMolecularSequenceVariant {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MOLECULAR_SEQUENCE_VARIANT_PROPERTIES);
    return result as IMolecularSequenceVariant;
  }

  /**
   * Create a deep clone of this MolecularSequenceVariant
   */
  clone(): MolecularSequenceVariant {
    return new MolecularSequenceVariant(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MolecularSequenceVariant
   */
  toString(): string {
    const parts: string[] = ['MolecularSequenceVariant'];
    return parts.join(', ');
  }
}
