import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IPeriod,
  IProvenance,
  IProvenanceAgent,
  IProvenanceEntity,
  IReference,
  ISignature,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Provenance */
const PROVENANCE_PROPERTIES = [
  'target',
  'occurredPeriod',
  'occurredDateTime',
  '_occurredDateTime',
  'recorded',
  '_recorded',
  'policy',
  '_policy',
  'location',
  'authorization',
  'activity',
  'basedOn',
  'patient',
  'encounter',
  'agent',
  'entity',
  'signature',
] as const;

/**
 * Provenance - Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.
 *
 * @see https://hl7.org/fhir/R4/provenance.html
 *
 * @example
 * const provenance = new Provenance({
 *   // ... properties
 * });
 */
export class Provenance extends DomainResource implements IProvenance {
  readonly resourceType = 'Provenance' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Target Reference(s) (usually version specific) */
  target: IReference<'Resource'>[];

  /** When the activity occurred */
  occurredPeriod?: IPeriod;

  /** When the activity occurred */
  occurredDateTime?: string;

  /** Extension for occurredDateTime */
  _occurredDateTime?: IElement;

  /** When the activity was recorded / updated */
  recorded?: string;

  /** Extension for recorded */
  _recorded?: IElement;

  /** Policy or plan the activity was defined by */
  policy?: string[];

  /** Extension for policy */
  _policy?: IElement;

  /** Where the activity occurred, if relevant */
  location?: IReference<'Location'>;

  /** Authorization (purposeOfUse) related to the event */
  authorization?: ICodeableReference[];

  /** Activity that occurred */
  activity?: ICodeableConcept;

  /** Workflow authorization within which this event occurred */
  basedOn?: IReference<'CarePlan' | 'DeviceRequest' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'ServiceRequest' | 'Task'>[];

  /** The patient is the subject of the data created/updated (.target) by the activity */
  patient?: IReference<'Patient'>;

  /** Encounter within which this event occurred or which the event is tightly associated */
  encounter?: IReference<'Encounter'>;

  /** Actor involved */
  agent: IProvenanceAgent[];

  /** An entity used in this activity */
  entity?: IProvenanceEntity[];

  /** Signature on target */
  signature?: ISignature[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IProvenance>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, PROVENANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Provenance from a JSON object
   */
  static fromJSON(json: IProvenance): Provenance {
    return new Provenance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Provenance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IProvenance>): Provenance {
    return new Provenance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Provenance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IProvenance) => Partial<IProvenance>): Provenance {
    const currentData = this.toJSON();
    return new Provenance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IProvenance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IProvenance {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, PROVENANCE_PROPERTIES);
    return result as IProvenance;
  }

  /**
   * Create a deep clone of this Provenance
   */
  clone(): Provenance {
    return new Provenance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Provenance
   */
  toString(): string {
    const parts: string[] = ['Provenance'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
