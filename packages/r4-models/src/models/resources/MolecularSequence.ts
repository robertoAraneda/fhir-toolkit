import { DomainResource } from '../base/DomainResource.js';
import type {
  IElement,
  IIdentifier,
  IMolecularSequence,
  IMolecularSequenceQuality,
  IMolecularSequenceReferenceSeq,
  IMolecularSequenceRepository,
  IMolecularSequenceStructureVariant,
  IMolecularSequenceVariant,
  IQuantity,
  IReference,
  SequenceTypeType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MolecularSequence */
const MOLECULAR_SEQUENCE_PROPERTIES = [
  'identifier',
  'type',
  '_type',
  'coordinateSystem',
  '_coordinateSystem',
  'patient',
  'specimen',
  'device',
  'performer',
  'quantity',
  'referenceSeq',
  'variant',
  'observedSeq',
  '_observedSeq',
  'quality',
  'readCoverage',
  '_readCoverage',
  'repository',
  'pointer',
  'structureVariant',
] as const;

/**
 * MolecularSequence - Raw data describing a biological sequence.
 *
 * @see https://hl7.org/fhir/R4/molecularsequence.html
 *
 * @example
 * const molecularSequence = new MolecularSequence({
 *   // ... properties
 * });
 */
export class MolecularSequence extends DomainResource implements IMolecularSequence {
  readonly resourceType = 'MolecularSequence' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique ID for this particular sequence. This is a FHIR-defined id */
  identifier?: IIdentifier[];

  /** aa | dna | rna */
  type?: SequenceTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Base number of coordinate system (0 for 0-based numbering or coordinates, inclusive start, exclusive end, 1 for 1-based numbering, inclusive start, inclusive end) */
  coordinateSystem: number;

  /** Extension for coordinateSystem */
  _coordinateSystem?: IElement;

  /** Who and/or what this is about */
  patient?: IReference<'Patient'>;

  /** Specimen used for sequencing */
  specimen?: IReference<'Specimen'>;

  /** The method for sequencing */
  device?: IReference<'Device'>;

  /** Who should be responsible for test result */
  performer?: IReference<'Organization'>;

  /** The number of copies of the sequence of interest.  (RNASeq) */
  quantity?: IQuantity;

  /** A sequence used as reference */
  referenceSeq?: IMolecularSequenceReferenceSeq;

  /** Variant in sequence */
  variant?: IMolecularSequenceVariant[];

  /** Sequence that was observed */
  observedSeq?: string;

  /** Extension for observedSeq */
  _observedSeq?: IElement;

  /** An set of value as quality of sequence */
  quality?: IMolecularSequenceQuality[];

  /** Average number of reads representing a given nucleotide in the reconstructed sequence */
  readCoverage?: number;

  /** Extension for readCoverage */
  _readCoverage?: IElement;

  /** External repository which contains detailed report related with observedSeq in this resource */
  repository?: IMolecularSequenceRepository[];

  /** Pointer to next atomic sequence */
  pointer?: IReference<'MolecularSequence'>[];

  /** Structural variant */
  structureVariant?: IMolecularSequenceStructureVariant[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IMolecularSequence>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, MOLECULAR_SEQUENCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MolecularSequence from a JSON object
   */
  static fromJSON(json: IMolecularSequence): MolecularSequence {
    return new MolecularSequence(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MolecularSequence with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMolecularSequence>): MolecularSequence {
    return new MolecularSequence({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MolecularSequence by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMolecularSequence) => Partial<IMolecularSequence>): MolecularSequence {
    const currentData = this.toJSON();
    return new MolecularSequence({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMolecularSequence)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMolecularSequence {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MOLECULAR_SEQUENCE_PROPERTIES);
    return result as IMolecularSequence;
  }

  /**
   * Create a deep clone of this MolecularSequence
   */
  clone(): MolecularSequence {
    return new MolecularSequence(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MolecularSequence
   */
  toString(): string {
    const parts: string[] = ['MolecularSequence'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
