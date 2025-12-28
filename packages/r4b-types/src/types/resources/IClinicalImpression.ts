import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IClinicalImpressionFinding } from '../backbones/IClinicalImpressionFinding.js';
import type { IClinicalImpressionInvestigation } from '../backbones/IClinicalImpressionInvestigation.js';
import type { ClinicalImpressionStatusType } from '../../valuesets/index.js';

/**
 * ClinicalImpression Interface
 * 
 * A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 * 
 *
 * @see https://hl7.org/fhir/R4B/clinicalimpression.html
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
   * in-progress | completed | entered-in-error
   */
  status: ClinicalImpressionStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Reason for current status
   */
  statusReason?: ICodeableConcept;

  /**
   * Kind of assessment performed
   */
  code?: ICodeableConcept;

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
   * Encounter created as part of
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
  assessor?: IReference<'Practitioner' | 'PractitionerRole'>;

  /**
   * Reference to last assessment
   */
  previous?: IReference<'ClinicalImpression'>;

  /**
   * Relevant impressions of patient state
   */
  problem?: IReference<'Condition' | 'AllergyIntolerance'>[];

  /**
   * One or more sets of investigations (signs, symptoms, etc.)
   */
  investigation?: IClinicalImpressionInvestigation[];

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
