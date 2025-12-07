import { DomainResource } from '../base/DomainResource.js';
import type {
  AdverseEventActualityType,
  AdverseEventOutcomeType,
  AdverseEventSeverityType,
  IAdverseEvent,
  IAdverseEventSuspectEntity,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to AdverseEvent */
const ADVERSE_EVENT_PROPERTIES = [
  'identifier',
  'actuality',
  '_actuality',
  'category',
  'event',
  'subject',
  'encounter',
  'date',
  '_date',
  'detected',
  '_detected',
  'recordedDate',
  '_recordedDate',
  'resultingCondition',
  'location',
  'seriousness',
  'severity',
  'outcome',
  'recorder',
  'contributor',
  'suspectEntity',
  'subjectMedicalHistory',
  'referenceDocument',
  'study',
] as const;

/**
 * AdverseEvent - Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
 *
 * @see https://hl7.org/fhir/R4/adverseevent.html
 *
 * @example
 * const adverseEvent = new AdverseEvent({
 *   // ... properties
 * });
 */
export class AdverseEvent extends DomainResource implements IAdverseEvent {
  readonly resourceType = 'AdverseEvent' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier for the event */
  identifier?: IIdentifier;

  /** actual | potential */
  actuality: AdverseEventActualityType;

  /** Extension for actuality */
  _actuality?: IElement;

  /** product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment */
  category?: ICodeableConcept[];

  /** Type of the event itself in relation to the subject */
  event?: ICodeableConcept;

  /** Subject impacted by event */
  subject: IReference<'Patient' | 'Group' | 'Practitioner' | 'RelatedPerson'>;

  /** Encounter created as part of */
  encounter?: IReference<'Encounter'>;

  /** When the event occurred */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** When the event was detected */
  detected?: string;

  /** Extension for detected */
  _detected?: IElement;

  /** When the event was recorded */
  recordedDate?: string;

  /** Extension for recordedDate */
  _recordedDate?: IElement;

  /** Effect on the subject due to this event */
  resultingCondition?: IReference<'Condition'>[];

  /** Location where adverse event occurred */
  location?: IReference<'Location'>;

  /** Seriousness of the event */
  seriousness?: ICodeableConcept;

  /** mild | moderate | severe */
  severity?: ICodeableConcept<AdverseEventSeverityType>;

  /** resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown */
  outcome?: ICodeableConcept<AdverseEventOutcomeType>;

  /** Who recorded the adverse event */
  recorder?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /** Who  was involved in the adverse event or the potential adverse event */
  contributor?: IReference<'Practitioner' | 'PractitionerRole' | 'Device'>[];

  /** The suspected agent causing the adverse event */
  suspectEntity?: IAdverseEventSuspectEntity[];

  /** AdverseEvent.subjectMedicalHistory */
  subjectMedicalHistory?: IReference<'Condition' | 'Observation' | 'AllergyIntolerance' | 'FamilyMemberHistory' | 'Immunization' | 'Procedure' | 'Media' | 'DocumentReference'>[];

  /** AdverseEvent.referenceDocument */
  referenceDocument?: IReference<'DocumentReference'>[];

  /** AdverseEvent.study */
  study?: IReference<'ResearchStudy'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IAdverseEvent>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, ADVERSE_EVENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AdverseEvent from a JSON object
   */
  static fromJSON(json: IAdverseEvent): AdverseEvent {
    return new AdverseEvent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AdverseEvent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAdverseEvent>): AdverseEvent {
    return new AdverseEvent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AdverseEvent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAdverseEvent) => Partial<IAdverseEvent>): AdverseEvent {
    const currentData = this.toJSON();
    return new AdverseEvent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAdverseEvent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAdverseEvent {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, ADVERSE_EVENT_PROPERTIES);
    return result as IAdverseEvent;
  }

  /**
   * Create a deep clone of this AdverseEvent
   */
  clone(): AdverseEvent {
    return new AdverseEvent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AdverseEvent
   */
  toString(): string {
    const parts: string[] = ['AdverseEvent'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
