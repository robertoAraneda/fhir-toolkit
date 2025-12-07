import { DomainResource } from '../base/DomainResource.js';
import type {
  IAttachment,
  IElement,
  IIdentifier,
  IMolecularSequence,
  IMolecularSequenceRelative,
  IReference,
  SequenceTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MolecularSequence */
const MOLECULAR_SEQUENCE_PROPERTIES = [
  'identifier',
  'type',
  '_type',
  'subject',
  'focus',
  'specimen',
  'device',
  'performer',
  'literal',
  '_literal',
  'formatted',
  'relative',
] as const;

/**
 * MolecularSequence - Representation of a molecular sequence.
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

  /** Unique ID for this particular sequence */
  identifier?: IIdentifier[];

  /** aa | dna | rna */
  type?: SequenceTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Subject this sequence is associated too */
  subject?: IReference<'Patient' | 'Group' | 'Substance' | 'BiologicallyDerivedProduct' | 'NutritionProduct'>;

  /** What the molecular sequence is about, when it is not about the subject of record */
  focus?: IReference<'Resource'>[];

  /** Specimen used for sequencing */
  specimen?: IReference<'Specimen'>;

  /** The method for sequencing */
  device?: IReference<'Device'>;

  /** Who should be responsible for test result */
  performer?: IReference<'Organization'>;

  /** Sequence that was observed */
  literal?: string;

  /** Extension for literal */
  _literal?: IElement;

  /** Embedded file or a link (URL) which contains content to represent the sequence */
  formatted?: IAttachment[];

  /** A sequence defined relative to another sequence */
  relative?: IMolecularSequenceRelative[];

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
