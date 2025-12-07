import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IMolecularSequenceStructureVariantInner,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MolecularSequenceStructureVariantInner */
const MOLECULAR_SEQUENCE_STRUCTURE_VARIANT_INNER_PROPERTIES = [
  'start',
  '_start',
  'end',
  '_end',
] as const;

/**
 * MolecularSequenceStructureVariantInner - Structural variant inner
 *
 * @see https://hl7.org/fhir/R4/molecularsequencestructurevariantinner.html
 *
 * @example
 * const molecularSequenceStructureVariantInner = new MolecularSequenceStructureVariantInner({
 *   // ... properties
 * });
 */
export class MolecularSequenceStructureVariantInner extends BackboneElement implements IMolecularSequenceStructureVariantInner {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Structural variant inner start */
  start?: number;

  /** Extension for start */
  _start?: IElement;

  /** Structural variant inner end */
  end?: number;

  /** Extension for end */
  _end?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMolecularSequenceStructureVariantInner>) {
    super(data);
    if (data) {
      this.assignProps(data, MOLECULAR_SEQUENCE_STRUCTURE_VARIANT_INNER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MolecularSequenceStructureVariantInner from a JSON object
   */
  static fromJSON(json: IMolecularSequenceStructureVariantInner): MolecularSequenceStructureVariantInner {
    return new MolecularSequenceStructureVariantInner(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MolecularSequenceStructureVariantInner with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMolecularSequenceStructureVariantInner>): MolecularSequenceStructureVariantInner {
    return new MolecularSequenceStructureVariantInner({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MolecularSequenceStructureVariantInner by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMolecularSequenceStructureVariantInner) => Partial<IMolecularSequenceStructureVariantInner>): MolecularSequenceStructureVariantInner {
    const currentData = this.toJSON();
    return new MolecularSequenceStructureVariantInner({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMolecularSequenceStructureVariantInner)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMolecularSequenceStructureVariantInner {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MOLECULAR_SEQUENCE_STRUCTURE_VARIANT_INNER_PROPERTIES);
    return result as IMolecularSequenceStructureVariantInner;
  }

  /**
   * Create a deep clone of this MolecularSequenceStructureVariantInner
   */
  clone(): MolecularSequenceStructureVariantInner {
    return new MolecularSequenceStructureVariantInner(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MolecularSequenceStructureVariantInner
   */
  toString(): string {
    const parts: string[] = ['MolecularSequenceStructureVariantInner'];
    return parts.join(', ');
  }
}
