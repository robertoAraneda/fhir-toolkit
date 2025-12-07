import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IAdverseEventSuspectEntity } from '../backbones/IAdverseEventSuspectEntity.js';
import type { AdverseEventActualityType, AdverseEventOutcomeType, AdverseEventSeverityType } from '../../valuesets/index.js';

/**
 * AdverseEvent Interface
 * 
 * Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.
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
  identifier?: IIdentifier;

  /**
   * actual | potential
   */
  actuality: AdverseEventActualityType;
  /**
   * Extension for actuality
   */
  _actuality?: IElement;

  /**
   * product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment
   */
  category?: ICodeableConcept[];

  /**
   * Type of the event itself in relation to the subject
   */
  event?: ICodeableConcept;

  /**
   * Subject impacted by event
   */
  subject: IReference<'Patient' | 'Group' | 'Practitioner' | 'RelatedPerson'>;

  /**
   * Encounter created as part of
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When the event occurred
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

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
  resultingCondition?: IReference<'Condition'>[];

  /**
   * Location where adverse event occurred
   */
  location?: IReference<'Location'>;

  /**
   * Seriousness of the event
   */
  seriousness?: ICodeableConcept;

  /**
   * mild | moderate | severe
   */
  severity?: ICodeableConcept<AdverseEventSeverityType>;

  /**
   * resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown
   */
  outcome?: ICodeableConcept<AdverseEventOutcomeType>;

  /**
   * Who recorded the adverse event
   */
  recorder?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /**
   * Who  was involved in the adverse event or the potential adverse event
   */
  contributor?: IReference<'Practitioner' | 'PractitionerRole' | 'Device'>[];

  /**
   * The suspected agent causing the adverse event
   */
  suspectEntity?: IAdverseEventSuspectEntity[];

  /**
   * AdverseEvent.subjectMedicalHistory
   */
  subjectMedicalHistory?: IReference<'Condition' | 'Observation' | 'AllergyIntolerance' | 'FamilyMemberHistory' | 'Immunization' | 'Procedure' | 'Media' | 'DocumentReference'>[];

  /**
   * AdverseEvent.referenceDocument
   */
  referenceDocument?: IReference<'DocumentReference'>[];

  /**
   * AdverseEvent.study
   */
  study?: IReference<'ResearchStudy'>[];

}
