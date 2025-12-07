import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { IAdverseEventContributingFactor } from '../backbones/IAdverseEventContributingFactor.js';
import type { IAdverseEventMitigatingAction } from '../backbones/IAdverseEventMitigatingAction.js';
import type { IAdverseEventParticipant } from '../backbones/IAdverseEventParticipant.js';
import type { IAdverseEventPreventiveAction } from '../backbones/IAdverseEventPreventiveAction.js';
import type { IAdverseEventSupportingInfo } from '../backbones/IAdverseEventSupportingInfo.js';
import type { IAdverseEventSuspectEntity } from '../backbones/IAdverseEventSuspectEntity.js';
import type { AdverseEventActualityType, AdverseEventStatusType } from '../../valuesets/index.js';

/**
 * AdverseEvent Interface
 * 
 * An event (i.e. any change to current patient status) that may be related to unintended effects on a patient or research participant. The unintended effects may require additional monitoring, treatment, hospitalization, or may result in death. The AdverseEvent resource also extends to potential or avoided events that could have had such effects. There are two major domains where the AdverseEvent resource is expected to be used. One is in clinical care reported adverse events and the other is in reporting adverse events in clinical  research trial management. Adverse events can be reported by healthcare providers, patients, caregivers or by medical products manufacturers. Given the differences between these two concepts, we recommend consulting the domain specific implementation guides when implementing the AdverseEvent Resource. The implementation guides include specific extensions, value sets and constraints.
 * 
 *
 * @see https://hl7.org/fhir/R4/adverseevent.html
 */
export interface IAdverseEvent extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'AdverseEvent';

  /**
   * Business identifier for the event
   */
  identifier?: IIdentifier[];

  /**
   * in-progress | completed | entered-in-error | unknown
   */
  status: AdverseEventStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * actual | potential
   */
  actuality: AdverseEventActualityType;
  /**
   * Extension for actuality
   */
  _actuality?: IElement;

  /**
   * wrong-patient | procedure-mishap | medication-mishap | device | unsafe-physical-environment | hospital-aquired-infection | wrong-body-site
   */
  category?: ICodeableConcept[];

  /**
   * Event or incident that occurred or was averted
   */
  code?: ICodeableConcept;

  /**
   * Subject impacted by event
   */
  subject: IReference<'Patient' | 'Group' | 'Practitioner' | 'RelatedPerson' | 'ResearchSubject'>;

  /**
   * The Encounter associated with the start of the AdverseEvent
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When the event occurred
   */
  occurrenceDateTime?: string;
  /**
   * Extension for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * When the event occurred
   */
  occurrencePeriod?: IPeriod;

  /**
   * When the event occurred
   */
  occurrenceTiming?: ITiming;

  /**
   * When the event was detected
   */
  detected?: string;
  /**
   * Extension for detected
   */
  _detected?: IElement;

  /**
   * When the event was recorded
   */
  recordedDate?: string;
  /**
   * Extension for recordedDate
   */
  _recordedDate?: IElement;

  /**
   * Effect on the subject due to this event
   */
  resultingEffect?: IReference<'Condition' | 'Observation'>[];

  /**
   * Location where adverse event occurred
   */
  location?: IReference<'Location'>;

  /**
   * Seriousness or gravity of the event
   */
  seriousness?: ICodeableConcept;

  /**
   * Type of outcome from the adverse event
   */
  outcome?: ICodeableConcept[];

  /**
   * Who recorded the adverse event
   */
  recorder?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'ResearchSubject'>;

  /**
   * Who was involved in the adverse event or the potential adverse event and what they did
   */
  participant?: IAdverseEventParticipant[];

  /**
   * Research study that the subject is enrolled in
   */
  study?: IReference<'ResearchStudy'>[];

  /**
   * Considered likely or probable or anticipated in the research study
   */
  expectedInResearchStudy?: boolean;
  /**
   * Extension for expectedInResearchStudy
   */
  _expectedInResearchStudy?: IElement;

  /**
   * The suspected agent causing the adverse event
   */
  suspectEntity?: IAdverseEventSuspectEntity[];

  /**
   * Contributing factors suspected to have increased the probability or severity of the adverse event
   */
  contributingFactor?: IAdverseEventContributingFactor[];

  /**
   * Preventive actions that contributed to avoiding the adverse event
   */
  preventiveAction?: IAdverseEventPreventiveAction[];

  /**
   * Ameliorating actions taken after the adverse event occured in order to reduce the extent of harm
   */
  mitigatingAction?: IAdverseEventMitigatingAction[];

  /**
   * Supporting information relevant to the event
   */
  supportingInfo?: IAdverseEventSupportingInfo[];

  /**
   * Comment on adverse event
   */
  note?: IAnnotation[];

}
