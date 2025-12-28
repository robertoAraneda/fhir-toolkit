import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IClinicalImpressionFinding } from '../backbones/IClinicalImpressionFinding.js';
import type { EventStatusType } from '../../valuesets/index.js';

/**
 * ClinicalImpression Interface
 * 
 * A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 * 
 *
 * @see https://hl7.org/fhir/R5/clinicalimpression.html
 */
export interface IClinicalImpression extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'ClinicalImpression';

  /**
   * Business identifier
   */
  identifier?: IIdentifier[];

  /**
   * preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
   */
  status: EventStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reason for current status
   */
  statusReason?: ICodeableConcept;

  /**
   * Why/how the assessment was performed
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Patient or group assessed
   */
  subject: IReference<'Patient' | 'Group'>;

  /**
   * The Encounter during which this ClinicalImpression was created
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Time of assessment
   */
  effectiveDateTime?: string;
  /**
   * Extension for effectiveDateTime
   */
  _effectiveDateTime?: IElement;

  /**
   * Time of assessment
   */
  effectivePeriod?: IPeriod;

  /**
   * When the assessment was documented
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * The clinician performing the assessment
   */
  performer?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * Reference to last assessment
   */
  previous?: IReference<'ClinicalImpression'>;

  /**
   * Relevant impressions of patient state
   */
  problem?: IReference<'Condition' | 'AllergyIntolerance'>[];

  /**
   * Change in the status/pattern of a subject's condition since previously assessed, such as worsening, improving, or no change
   */
  changePattern?: ICodeableConcept;

  /**
   * Clinical Protocol followed
   */
  protocol?: string[];
  /**
   * Extension for protocol
   */
  _protocol?: IElement;

  /**
   * Summary of the assessment
   */
  summary?: string;
  /**
   * Extension for summary
   */
  _summary?: IElement;

  /**
   * Possible or likely findings and diagnoses
   */
  finding?: IClinicalImpressionFinding[];

  /**
   * Estimate of likely outcome
   */
  prognosisCodeableConcept?: ICodeableConcept[];

  /**
   * RiskAssessment expressing likely outcome
   */
  prognosisReference?: IReference<'RiskAssessment'>[];

  /**
   * Information supporting the clinical impression
   */
  supportingInfo?: IReference<'Resource'>[];

  /**
   * Comments made about the ClinicalImpression
   */
  note?: IAnnotation[];

}
