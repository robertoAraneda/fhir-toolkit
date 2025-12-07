import { DomainResource } from '../base/DomainResource.js';
import type {
  GenomicStudyStatusType,
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IGenomicStudy,
  IGenomicStudyAnalysis,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to GenomicStudy */
const GENOMIC_STUDY_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'type',
  'subject',
  'encounter',
  'startDate',
  '_startDate',
  'basedOn',
  'referrer',
  'interpreter',
  'reason',
  'instantiatesCanonical',
  '_instantiatesCanonical',
  'instantiatesUri',
  '_instantiatesUri',
  'note',
  'description',
  '_description',
  'analysis',
] as const;

/**
 * GenomicStudy - A GenomicStudy is a set of analyses performed to analyze and generate genomic data.
 *
 * @see https://hl7.org/fhir/R4/genomicstudy.html
 *
 * @example
 * const genomicStudy = new GenomicStudy({
 *   resourceType: 'GenomicStudy',
 *   // ... properties
 * });
 */
export class GenomicStudy extends DomainResource implements IGenomicStudy {
  readonly resourceType = 'GenomicStudy' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifiers for this genomic study */
  identifier?: IIdentifier[];

  /** registered | available | cancelled | entered-in-error | unknown */
  status: GenomicStudyStatusType;

  /** Extension for status */
  _status?: IElement;

  /** The type of the study (e.g., Familial variant segregation, Functional variation detection, or Gene expression profiling) */
  type?: ICodeableConcept[];

  /** The primary subject of the genomic study */
  subject: IReference<'Patient' | 'Group' | 'Substance' | 'BiologicallyDerivedProduct' | 'NutritionProduct'>;

  /** The healthcare event with which this genomics study is associated */
  encounter?: IReference<'Encounter'>;

  /** When the genomic study was started */
  startDate?: string;

  /** Extension for startDate */
  _startDate?: IElement;

  /** Event resources that the genomic study is based on */
  basedOn?: IReference<'ServiceRequest' | 'Task'>[];

  /** Healthcare professional who requested or referred the genomic study */
  referrer?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Healthcare professionals who interpreted the genomic study */
  interpreter?: IReference<'Practitioner' | 'PractitionerRole'>[];

  /** Why the genomic study was performed */
  reason?: ICodeableReference[];

  /** The defined protocol that describes the study */
  instantiatesCanonical?: string;

  /** Extension for instantiatesCanonical */
  _instantiatesCanonical?: IElement;

  /** The URL pointing to an externally maintained protocol that describes the study */
  instantiatesUri?: string;

  /** Extension for instantiatesUri */
  _instantiatesUri?: IElement;

  /** Comments related to the genomic study */
  note?: IAnnotation[];

  /** Description of the genomic study */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Genomic Analysis Event */
  analysis?: IGenomicStudyAnalysis[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IGenomicStudy>) {
    super(data);
    if (data) {
      this.assignProps(data, GENOMIC_STUDY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create GenomicStudy from a JSON object
   */
  static fromJSON(json: IGenomicStudy): GenomicStudy {
    return new GenomicStudy(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new GenomicStudy with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGenomicStudy>): GenomicStudy {
    return new GenomicStudy({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new GenomicStudy by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGenomicStudy) => Partial<IGenomicStudy>): GenomicStudy {
    const currentData = this.toJSON();
    return new GenomicStudy({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGenomicStudy)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGenomicStudy {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, GENOMIC_STUDY_PROPERTIES);
    return result as IGenomicStudy;
  }

  /**
   * Create a deep clone of this GenomicStudy
   */
  clone(): GenomicStudy {
    return new GenomicStudy(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the GenomicStudy
   */
  toString(): string {
    const parts: string[] = ['GenomicStudy'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
