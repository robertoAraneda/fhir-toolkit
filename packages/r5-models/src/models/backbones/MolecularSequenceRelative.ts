import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMolecularSequenceRelative,
  IMolecularSequenceRelativeEdit,
  IMolecularSequenceRelativeStartingSequence,
  IRange,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MolecularSequenceRelative */
const MOLECULAR_SEQUENCE_RELATIVE_PROPERTIES = [
  'coordinateSystem',
  'ordinalPosition',
  '_ordinalPosition',
  'sequenceRange',
  'startingSequence',
  'edit',
] as const;

/**
 * MolecularSequenceRelative - A sequence defined relative to another sequence
 *
 * @see https://hl7.org/fhir/R4/molecularsequencerelative.html
 *
 * @example
 * const molecularSequenceRelative = new MolecularSequenceRelative({
 *   // ... properties
 * });
 */
export class MolecularSequenceRelative extends BackboneElement implements IMolecularSequenceRelative {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Ways of identifying nucleotides or amino acids within a sequence */
  coordinateSystem: ICodeableConcept;

  /** Indicates the order in which the sequence should be considered when putting multiple 'relative' elements together */
  ordinalPosition?: number;

  /** Extension for ordinalPosition */
  _ordinalPosition?: IElement;

  /** Indicates the nucleotide range in the composed sequence when multiple 'relative' elements are used together */
  sequenceRange?: IRange;

  /** A sequence used as starting sequence */
  startingSequence?: IMolecularSequenceRelativeStartingSequence;

  /** Changes in sequence from the starting sequence */
  edit?: IMolecularSequenceRelativeEdit[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMolecularSequenceRelative>) {
    super(data);
    if (data) {
      this.assignProps(data, MOLECULAR_SEQUENCE_RELATIVE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MolecularSequenceRelative from a JSON object
   */
  static fromJSON(json: IMolecularSequenceRelative): MolecularSequenceRelative {
    return new MolecularSequenceRelative(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MolecularSequenceRelative with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMolecularSequenceRelative>): MolecularSequenceRelative {
    return new MolecularSequenceRelative({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MolecularSequenceRelative by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMolecularSequenceRelative) => Partial<IMolecularSequenceRelative>): MolecularSequenceRelative {
    const currentData = this.toJSON();
    return new MolecularSequenceRelative({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMolecularSequenceRelative)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMolecularSequenceRelative {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MOLECULAR_SEQUENCE_RELATIVE_PROPERTIES);
    return result as IMolecularSequenceRelative;
  }

  /**
   * Create a deep clone of this MolecularSequenceRelative
   */
  clone(): MolecularSequenceRelative {
    return new MolecularSequenceRelative(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MolecularSequenceRelative
   */
  toString(): string {
    const parts: string[] = ['MolecularSequenceRelative'];
    return parts.join(', ');
  }
}
