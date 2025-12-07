import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IMolecularSequenceStructureVariantOuter,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MolecularSequenceStructureVariantOuter */
const MOLECULAR_SEQUENCE_STRUCTURE_VARIANT_OUTER_PROPERTIES = [
  'start',
  '_start',
  'end',
  '_end',
] as const;

/**
 * MolecularSequenceStructureVariantOuter - Structural variant outer
 *
 * @see https://hl7.org/fhir/R4/molecularsequencestructurevariantouter.html
 *
 * @example
 * const molecularSequenceStructureVariantOuter = new MolecularSequenceStructureVariantOuter({
 *   // ... properties
 * });
 */
export class MolecularSequenceStructureVariantOuter extends BackboneElement implements IMolecularSequenceStructureVariantOuter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Structural variant outer start */
  start?: number;

  /** Extension for start */
  _start?: IElement;

  /** Structural variant outer end */
  end?: number;

  /** Extension for end */
  _end?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMolecularSequenceStructureVariantOuter>) {
    super(data);
    if (data) {
      this.assignProps(data, MOLECULAR_SEQUENCE_STRUCTURE_VARIANT_OUTER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MolecularSequenceStructureVariantOuter from a JSON object
   */
  static fromJSON(json: IMolecularSequenceStructureVariantOuter): MolecularSequenceStructureVariantOuter {
    return new MolecularSequenceStructureVariantOuter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MolecularSequenceStructureVariantOuter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMolecularSequenceStructureVariantOuter>): MolecularSequenceStructureVariantOuter {
    return new MolecularSequenceStructureVariantOuter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MolecularSequenceStructureVariantOuter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMolecularSequenceStructureVariantOuter) => Partial<IMolecularSequenceStructureVariantOuter>): MolecularSequenceStructureVariantOuter {
    const currentData = this.toJSON();
    return new MolecularSequenceStructureVariantOuter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMolecularSequenceStructureVariantOuter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMolecularSequenceStructureVariantOuter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MOLECULAR_SEQUENCE_STRUCTURE_VARIANT_OUTER_PROPERTIES);
    return result as IMolecularSequenceStructureVariantOuter;
  }

  /**
   * Create a deep clone of this MolecularSequenceStructureVariantOuter
   */
  clone(): MolecularSequenceStructureVariantOuter {
    return new MolecularSequenceStructureVariantOuter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MolecularSequenceStructureVariantOuter
   */
  toString(): string {
    const parts: string[] = ['MolecularSequenceStructureVariantOuter'];
    return parts.join(', ');
  }
}
