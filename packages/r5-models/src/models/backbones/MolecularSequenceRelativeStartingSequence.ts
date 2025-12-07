import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMolecularSequenceRelativeStartingSequence,
  IReference,
  OrientationTypeType,
  StrandTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MolecularSequenceRelativeStartingSequence */
const MOLECULAR_SEQUENCE_RELATIVE_STARTING_SEQUENCE_PROPERTIES = [
  'genomeAssembly',
  'chromosome',
  'sequenceCodeableConcept',
  'sequenceString',
  '_sequenceString',
  'sequenceReference',
  'windowStart',
  '_windowStart',
  'windowEnd',
  '_windowEnd',
  'orientation',
  '_orientation',
  'strand',
  '_strand',
] as const;

/**
 * MolecularSequenceRelativeStartingSequence - A sequence used as starting sequence
 *
 * @see https://hl7.org/fhir/R4/molecularsequencerelativestartingsequence.html
 *
 * @example
 * const molecularSequenceRelativeStartingSequence = new MolecularSequenceRelativeStartingSequence({
 *   // ... properties
 * });
 */
export class MolecularSequenceRelativeStartingSequence extends BackboneElement implements IMolecularSequenceRelativeStartingSequence {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The genome assembly used for starting sequence, e.g. GRCh38 */
  genomeAssembly?: ICodeableConcept;

  /** Chromosome Identifier */
  chromosome?: ICodeableConcept;

  /** The reference sequence that represents the starting sequence */
  sequenceCodeableConcept?: ICodeableConcept;

  /** The reference sequence that represents the starting sequence */
  sequenceString?: string;

  /** Extension for sequenceString */
  _sequenceString?: IElement;

  /** The reference sequence that represents the starting sequence */
  sequenceReference?: IReference;

  /** Start position of the window on the starting sequence */
  windowStart?: number;

  /** Extension for windowStart */
  _windowStart?: IElement;

  /** End position of the window on the starting sequence */
  windowEnd?: number;

  /** Extension for windowEnd */
  _windowEnd?: IElement;

  /** sense | antisense */
  orientation?: OrientationTypeType;

  /** Extension for orientation */
  _orientation?: IElement;

  /** watson | crick */
  strand?: StrandTypeType;

  /** Extension for strand */
  _strand?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMolecularSequenceRelativeStartingSequence>) {
    super(data);
    if (data) {
      this.assignProps(data, MOLECULAR_SEQUENCE_RELATIVE_STARTING_SEQUENCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MolecularSequenceRelativeStartingSequence from a JSON object
   */
  static fromJSON(json: IMolecularSequenceRelativeStartingSequence): MolecularSequenceRelativeStartingSequence {
    return new MolecularSequenceRelativeStartingSequence(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MolecularSequenceRelativeStartingSequence with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMolecularSequenceRelativeStartingSequence>): MolecularSequenceRelativeStartingSequence {
    return new MolecularSequenceRelativeStartingSequence({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MolecularSequenceRelativeStartingSequence by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMolecularSequenceRelativeStartingSequence) => Partial<IMolecularSequenceRelativeStartingSequence>): MolecularSequenceRelativeStartingSequence {
    const currentData = this.toJSON();
    return new MolecularSequenceRelativeStartingSequence({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMolecularSequenceRelativeStartingSequence)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMolecularSequenceRelativeStartingSequence {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MOLECULAR_SEQUENCE_RELATIVE_STARTING_SEQUENCE_PROPERTIES);
    return result as IMolecularSequenceRelativeStartingSequence;
  }

  /**
   * Create a deep clone of this MolecularSequenceRelativeStartingSequence
   */
  clone(): MolecularSequenceRelativeStartingSequence {
    return new MolecularSequenceRelativeStartingSequence(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MolecularSequenceRelativeStartingSequence
   */
  toString(): string {
    const parts: string[] = ['MolecularSequenceRelativeStartingSequence'];
    return parts.join(', ');
  }
}
