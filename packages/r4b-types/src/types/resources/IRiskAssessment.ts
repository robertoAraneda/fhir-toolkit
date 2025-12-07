import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRiskAssessmentPrediction } from '../backbones/IRiskAssessmentPrediction.js';
import type { ObservationStatusType } from '../../valuesets/index.js';

/**
 * RiskAssessment Interface
 * 
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 * 
 *
 * @see https://hl7.org/fhir/R4/riskassessment.html
 */
export interface IRiskAssessment extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'RiskAssessment';

  /**
   * Unique identifier for the assessment
   */
  identifier?: IIdentifier[];

  /**
   * Request fulfilled by this assessment
   */
  basedOn?: IReference<'Resource'>;

  /**
   * Part of this occurrence
   */
  parent?: IReference<'Resource'>;

  /**
   * registered | preliminary | final | amended +
   */
  status: ObservationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Evaluation mechanism
   */
  method?: ICodeableConcept;

  /**
   * Type of assessment
   */
  code?: ICodeableConcept;

  /**
   * Who/what does assessment apply to?
   */
  subject: IReference<'Patient' | 'Group'>;

  /**
   * Where was assessment performed?
   */
  encounter?: IReference<'Encounter'>;

  /**
   * When was assessment made?
   */
  occurrenceDateTime?: string;
  /**
   * Extension for occurrenceDateTime
   */
  _occurrenceDateTime?: IElement;

  /**
   * When was assessment made?
   */
  occurrencePeriod?: IPeriod;

  /**
   * Condition assessed
   */
  condition?: IReference<'Condition'>;

  /**
   * Who did assessment?
   */
  performer?: IReference<'Practitioner' | 'PractitionerRole' | 'Device'>;

  /**
   * Why the assessment was necessary?
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Why the assessment was necessary?
   */
  reasonReference?: IReference<'Condition' | 'Observation' | 'DiagnosticReport' | 'DocumentReference'>[];

  /**
   * Information used in assessment
   */
  basis?: IReference<'Resource'>[];

  /**
   * Outcome predicted
   */
  prediction?: IRiskAssessmentPrediction[];

  /**
   * How to reduce risk
   */
  mitigation?: string;
  /**
   * Extension for mitigation
   */
  _mitigation?: IElement;

  /**
   * Comments on the risk assessment
   */
  note?: IAnnotation[];

}
