import { DomainResource } from '../base/DomainResource.js';
import type {
  AdverseEventActualityType,
  AdverseEventStatusType,
  IAdverseEvent,
  IAdverseEventContributingFactor,
  IAdverseEventMitigatingAction,
  IAdverseEventParticipant,
  IAdverseEventPreventiveAction,
  IAdverseEventSupportingInfo,
  IAdverseEventSuspectEntity,
  IAnnotation,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  ITiming,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AdverseEvent */
const ADVERSE_EVENT_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'actuality',
  '_actuality',
  'category',
  'code',
  'subject',
  'encounter',
  'occurrenceDateTime',
  '_occurrenceDateTime',
  'occurrencePeriod',
  'occurrenceTiming',
  'detected',
  '_detected',
  'recordedDate',
  '_recordedDate',
  'resultingEffect',
  'location',
  'seriousness',
  'outcome',
  'recorder',
  'participant',
  'study',
  'expectedInResearchStudy',
  '_expectedInResearchStudy',
  'suspectEntity',
  'contributingFactor',
  'preventiveAction',
  'mitigatingAction',
  'supportingInfo',
  'note',
] as const;

/**
 * AdverseEvent - An event (i.e. any change to current patient status) that may be related to unintended effects on a patient or research participant. The unintended effects may require additional monitoring, treatment, hospitalization, or may result in death. The AdverseEvent resource also extends to potential or avoided events that could have had such effects. There are two major domains where the AdverseEvent resource is expected to be used. One is in clinical care reported adverse events and the other is in reporting adverse events in clinical  research trial management. Adverse events can be reported by healthcare providers, patients, caregivers or by medical products manufacturers. Given the differences between these two concepts, we recommend consulting the domain specific implementation guides when implementing the AdverseEvent Resource. The implementation guides include specific extensions, value sets and constraints.
 *
 * @see https://hl7.org/fhir/R5/adverseevent.html
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
  identifier?: IIdentifier[];

  /** in-progress | completed | entered-in-error | unknown */
  status: AdverseEventStatusType;

  /** Extension for status */
  _status?: IElement;

  /** actual | potential */
  actuality: AdverseEventActualityType;

  /** Extension for actuality */
  _actuality?: IElement;

  /** wrong-patient | procedure-mishap | medication-mishap | device | unsafe-physical-environment | hospital-aquired-infection | wrong-body-site */
  category?: ICodeableConcept[];

  /** Event or incident that occurred or was averted */
  code?: ICodeableConcept;

  /** Subject impacted by event */
  subject: IReference<'Patient' | 'Group' | 'Practitioner' | 'RelatedPerson' | 'ResearchSubject'>;

  /** The Encounter associated with the start of the AdverseEvent */
  encounter?: IReference<'Encounter'>;

  /** When the event occurred */
  occurrenceDateTime?: string;

  /** Extension for occurrenceDateTime */
  _occurrenceDateTime?: IElement;

  /** When the event occurred */
  occurrencePeriod?: IPeriod;

  /** When the event occurred */
  occurrenceTiming?: ITiming;

  /** When the event was detected */
  detected?: string;

  /** Extension for detected */
  _detected?: IElement;

  /** When the event was recorded */
  recordedDate?: string;

  /** Extension for recordedDate */
  _recordedDate?: IElement;

  /** Effect on the subject due to this event */
  resultingEffect?: IReference<'Condition' | 'Observation'>[];

  /** Location where adverse event occurred */
  location?: IReference<'Location'>;

  /** Seriousness or gravity of the event */
  seriousness?: ICodeableConcept;

  /** Type of outcome from the adverse event */
  outcome?: ICodeableConcept[];

  /** Who recorded the adverse event */
  recorder?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'ResearchSubject'>;

  /** Who was involved in the adverse event or the potential adverse event and what they did */
  participant?: IAdverseEventParticipant[];

  /** Research study that the subject is enrolled in */
  study?: IReference<'ResearchStudy'>[];

  /** Considered likely or probable or anticipated in the research study */
  expectedInResearchStudy?: boolean;

  /** Extension for expectedInResearchStudy */
  _expectedInResearchStudy?: IElement;

  /** The suspected agent causing the adverse event */
  suspectEntity?: IAdverseEventSuspectEntity[];

  /** Contributing factors suspected to have increased the probability or severity of the adverse event */
  contributingFactor?: IAdverseEventContributingFactor[];

  /** Preventive actions that contributed to avoiding the adverse event */
  preventiveAction?: IAdverseEventPreventiveAction[];

  /** Ameliorating actions taken after the adverse event occured in order to reduce the extent of harm */
  mitigatingAction?: IAdverseEventMitigatingAction[];

  /** Supporting information relevant to the event */
  supportingInfo?: IAdverseEventSupportingInfo[];

  /** Comment on adverse event */
  note?: IAnnotation[];

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
