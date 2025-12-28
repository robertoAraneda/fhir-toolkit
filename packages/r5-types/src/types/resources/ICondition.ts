import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAge } from '../datatypes/IAge.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IConditionParticipant } from '../backbones/IConditionParticipant.js';
import type { IConditionStage } from '../backbones/IConditionStage.js';

/**
 * Condition Interface
 * 
 * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
 * 
 *
 * @see https://hl7.org/fhir/R5/condition.html
 */
export interface ICondition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Condition';

  /**
   * External Ids for this condition
   */
  identifier?: IIdentifier[];

  /**
   * active | recurrence | relapse | inactive | remission | resolved | unknown
   */
  clinicalStatus: ICodeableConcept;

  /**
   * unconfirmed | provisional | differential | confirmed | refuted | entered-in-error
   */
  verificationStatus?: ICodeableConcept;

  /**
   * problem-list-item | encounter-diagnosis
   */
  category?: ICodeableConcept[];

  /**
   * Subjective severity of condition
   */
  severity?: ICodeableConcept;

  /**
   * Identification of the condition, problem or diagnosis
   */
  code?: ICodeableConcept;

  /**
   * Anatomical location, if relevant
   */
  bodySite?: ICodeableConcept[];

  /**
   * Who has the condition?
   */
  subject: IReference<'Patient' | 'Group'>;

  /**
   * The Encounter during which this Condition was created
   */
  encounter?: IReference<'Encounter'>;

  /**
   * Estimated or actual date,  date-time, or age
   */
  onsetDateTime?: string;
  /**
   * Extension for onsetDateTime
   */
  _onsetDateTime?: IElement;

  /**
   * Estimated or actual date,  date-time, or age
   */
  onsetAge?: IAge;

  /**
   * Estimated or actual date,  date-time, or age
   */
  onsetPeriod?: IPeriod;

  /**
   * Estimated or actual date,  date-time, or age
   */
  onsetRange?: IRange;

  /**
   * Estimated or actual date,  date-time, or age
   */
  onsetString?: string;
  /**
   * Extension for onsetString
   */
  _onsetString?: IElement;

  /**
   * When in resolution/remission
   */
  abatementDateTime?: string;
  /**
   * Extension for abatementDateTime
   */
  _abatementDateTime?: IElement;

  /**
   * When in resolution/remission
   */
  abatementAge?: IAge;

  /**
   * When in resolution/remission
   */
  abatementPeriod?: IPeriod;

  /**
   * When in resolution/remission
   */
  abatementRange?: IRange;

  /**
   * When in resolution/remission
   */
  abatementString?: string;
  /**
   * Extension for abatementString
   */
  _abatementString?: IElement;

  /**
   * Date condition was first recorded
   */
  recordedDate?: string;
  /**
   * Extension for recordedDate
   */
  _recordedDate?: IElement;

  /**
   * Who or what participated in the activities related to the condition and how they were involved
   */
  participant?: IConditionParticipant[];

  /**
   * Stage/grade, usually assessed formally
   */
  stage?: IConditionStage[];

  /**
   * Supporting evidence for the verification status
   */
  evidence?: ICodeableReference[];

  /**
   * Additional information about the Condition
   */
  note?: IAnnotation[];

}
