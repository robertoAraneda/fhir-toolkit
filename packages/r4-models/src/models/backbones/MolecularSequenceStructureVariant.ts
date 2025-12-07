import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMolecularSequenceStructureVariant,
  IMolecularSequenceStructureVariantInner,
  IMolecularSequenceStructureVariantOuter,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MolecularSequenceStructureVariant */
const MOLECULAR_SEQUENCE_STRUCTURE_VARIANT_PROPERTIES = [
  'variantType',
  'exact',
  '_exact',
  'length',
  '_length',
  'outer',
  'inner',
] as const;

/**
 * MolecularSequenceStructureVariant - Structural variant
 *
 * @see https://hl7.org/fhir/R4/molecularsequencestructurevariant.html
 *
 * @example
 * const molecularSequenceStructureVariant = new MolecularSequenceStructureVariant({
 *   // ... properties
 * });
 */
export class MolecularSequenceStructureVariant extends BackboneElement implements IMolecularSequenceStructureVariant {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Structural variant change type */
  variantType?: ICodeableConcept;

  /** Does the structural variant have base pair resolution breakpoints? */
  exact?: boolean;

  /** Extension for exact */
  _exact?: IElement;

  /** Structural variant length */
  length?: number;

  /** Extension for length */
  _length?: IElement;

  /** Structural variant outer */
  outer?: IMolecularSequenceStructureVariantOuter;

  /** Structural variant inner */
  inner?: IMolecularSequenceStructureVariantInner;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMolecularSequenceStructureVariant>) {
    super(data);
    if (data) {
      this.assignProps(data, MOLECULAR_SEQUENCE_STRUCTURE_VARIANT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MolecularSequenceStructureVariant from a JSON object
   */
  static fromJSON(json: IMolecularSequenceStructureVariant): MolecularSequenceStructureVariant {
    return new MolecularSequenceStructureVariant(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MolecularSequenceStructureVariant with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMolecularSequenceStructureVariant>): MolecularSequenceStructureVariant {
    return new MolecularSequenceStructureVariant({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MolecularSequenceStructureVariant by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMolecularSequenceStructureVariant) => Partial<IMolecularSequenceStructureVariant>): MolecularSequenceStructureVariant {
    const currentData = this.toJSON();
    return new MolecularSequenceStructureVariant({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMolecularSequenceStructureVariant)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMolecularSequenceStructureVariant {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MOLECULAR_SEQUENCE_STRUCTURE_VARIANT_PROPERTIES);
    return result as IMolecularSequenceStructureVariant;
  }

  /**
   * Create a deep clone of this MolecularSequenceStructureVariant
   */
  clone(): MolecularSequenceStructureVariant {
    return new MolecularSequenceStructureVariant(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MolecularSequenceStructureVariant
   */
  toString(): string {
    const parts: string[] = ['MolecularSequenceStructureVariant'];
    return parts.join(', ');
  }
}
