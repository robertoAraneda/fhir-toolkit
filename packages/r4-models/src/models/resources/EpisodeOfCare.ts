import { DomainResource } from '../base/DomainResource.js';
import type {
  EpisodeOfCareStatusType,
  ICodeableConcept,
  IElement,
  IEpisodeOfCare,
  IEpisodeOfCareDiagnosis,
  IEpisodeOfCareStatusHistory,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to EpisodeOfCare */
const EPISODE_OF_CARE_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'statusHistory',
  'type',
  'diagnosis',
  'patient',
  'managingOrganization',
  'period',
  'referralRequest',
  'careManager',
  'team',
  'account',
] as const;

/**
 * EpisodeOfCare - An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.
 *
 * @see https://hl7.org/fhir/R4/episodeofcare.html
 *
 * @example
 * const episodeOfCare = new EpisodeOfCare({
 *   // ... properties
 * });
 */
export class EpisodeOfCare extends DomainResource implements IEpisodeOfCare {
  readonly resourceType = 'EpisodeOfCare' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier(s) relevant for this EpisodeOfCare */
  identifier?: IIdentifier[];

  /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error */
  status: EpisodeOfCareStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Past list of status codes (the current status may be included to cover the start date of the status) */
  statusHistory?: IEpisodeOfCareStatusHistory[];

  /** Type/class  - e.g. specialist referral, disease management */
  type?: ICodeableConcept[];

  /** The list of diagnosis relevant to this episode of care */
  diagnosis?: IEpisodeOfCareDiagnosis[];

  /** The patient who is the focus of this episode of care */
  patient: IReference<'Patient'>;

  /** Organization that assumes care */
  managingOrganization?: IReference<'Organization'>;

  /** Interval during responsibility is assumed */
  period?: IPeriod;

  /** Originating Referral Request(s) */
  referralRequest?: IReference<'ServiceRequest'>[];

  /** Care manager/care coordinator for the patient */
  careManager?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Other practitioners facilitating this episode of care */
  team?: IReference<'CareTeam'>[];

  /** The set of accounts that may be used for billing for this EpisodeOfCare */
  account?: IReference<'Account'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IEpisodeOfCare>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, EPISODE_OF_CARE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EpisodeOfCare from a JSON object
   */
  static fromJSON(json: IEpisodeOfCare): EpisodeOfCare {
    return new EpisodeOfCare(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EpisodeOfCare with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEpisodeOfCare>): EpisodeOfCare {
    return new EpisodeOfCare({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EpisodeOfCare by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEpisodeOfCare) => Partial<IEpisodeOfCare>): EpisodeOfCare {
    const currentData = this.toJSON();
    return new EpisodeOfCare({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEpisodeOfCare)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEpisodeOfCare {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, EPISODE_OF_CARE_PROPERTIES);
    return result as IEpisodeOfCare;
  }

  /**
   * Create a deep clone of this EpisodeOfCare
   */
  clone(): EpisodeOfCare {
    return new EpisodeOfCare(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EpisodeOfCare
   */
  toString(): string {
    const parts: string[] = ['EpisodeOfCare'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
