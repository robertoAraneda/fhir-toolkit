import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMolecularSequenceReferenceSeq,
  IReference,
  OrientationTypeType,
  StrandTypeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MolecularSequenceReferenceSeq */
const MOLECULAR_SEQUENCE_REFERENCE_SEQ_PROPERTIES = [
  'chromosome',
  'genomeBuild',
  '_genomeBuild',
  'orientation',
  '_orientation',
  'referenceSeqId',
  'referenceSeqPointer',
  'referenceSeqString',
  '_referenceSeqString',
  'strand',
  '_strand',
  'windowStart',
  '_windowStart',
  'windowEnd',
  '_windowEnd',
] as const;

/**
 * MolecularSequenceReferenceSeq - A sequence used as reference
 *
 * @see https://hl7.org/fhir/R4B/molecularsequencereferenceseq.html
 *
 * @example
 * const molecularSequenceReferenceSeq = new MolecularSequenceReferenceSeq({
 *   // ... properties
 * });
 */
export class MolecularSequenceReferenceSeq extends BackboneElement implements IMolecularSequenceReferenceSeq {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Chromosome containing genetic finding */
  chromosome?: ICodeableConcept;

  /** The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37' */
  genomeBuild?: string;

  /** Extension for genomeBuild */
  _genomeBuild?: IElement;

  /** sense | antisense */
  orientation?: OrientationTypeType;

  /** Extension for orientation */
  _orientation?: IElement;

  /** Reference identifier */
  referenceSeqId?: ICodeableConcept;

  /** A pointer to another MolecularSequence entity as reference sequence */
  referenceSeqPointer?: IReference<'MolecularSequence'>;

  /** A string to represent reference sequence */
  referenceSeqString?: string;

  /** Extension for referenceSeqString */
  _referenceSeqString?: IElement;

  /** watson | crick */
  strand?: StrandTypeType;

  /** Extension for strand */
  _strand?: IElement;

  /** Start position of the window on the  reference sequence */
  windowStart?: number;

  /** Extension for windowStart */
  _windowStart?: IElement;

  /** End position of the window on the reference sequence */
  windowEnd?: number;

  /** Extension for windowEnd */
  _windowEnd?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMolecularSequenceReferenceSeq>) {
    super(data);
    if (data) {
      this.assignProps(data, MOLECULAR_SEQUENCE_REFERENCE_SEQ_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MolecularSequenceReferenceSeq from a JSON object
   */
  static fromJSON(json: IMolecularSequenceReferenceSeq): MolecularSequenceReferenceSeq {
    return new MolecularSequenceReferenceSeq(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MolecularSequenceReferenceSeq with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMolecularSequenceReferenceSeq>): MolecularSequenceReferenceSeq {
    return new MolecularSequenceReferenceSeq({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MolecularSequenceReferenceSeq by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMolecularSequenceReferenceSeq) => Partial<IMolecularSequenceReferenceSeq>): MolecularSequenceReferenceSeq {
    const currentData = this.toJSON();
    return new MolecularSequenceReferenceSeq({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMolecularSequenceReferenceSeq)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMolecularSequenceReferenceSeq {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MOLECULAR_SEQUENCE_REFERENCE_SEQ_PROPERTIES);
    return result as IMolecularSequenceReferenceSeq;
  }

  /**
   * Create a deep clone of this MolecularSequenceReferenceSeq
   */
  clone(): MolecularSequenceReferenceSeq {
    return new MolecularSequenceReferenceSeq(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MolecularSequenceReferenceSeq
   */
  toString(): string {
    const parts: string[] = ['MolecularSequenceReferenceSeq'];
    return parts.join(', ');
  }
}
