import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IGoalTarget } from '../backbones/IGoalTarget.js';
import type { GoalLifecycleStatusType } from '../../valuesets/index.js';

/**
 * Goal Interface
 * 
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 * 
 *
 * @see https://hl7.org/fhir/R4/goal.html
 */
export interface IGoal extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Goal';

  /**
   * External Ids for this goal
   */
  identifier?: IIdentifier[];

  /**
   * proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected
   */
  lifecycleStatus: GoalLifecycleStatusType;
  /**
   * Extension for lifecycleStatus
   */
  _lifecycleStatus?: IElement;

  /**
   * in-progress | improving | worsening | no-change | achieved | sustaining | not-achieved | no-progress | not-attainable
   */
  achievementStatus?: ICodeableConcept;

  /**
   * E.g. Treatment, dietary, behavioral, etc
   */
  category?: ICodeableConcept[];

  /**
   * After meeting the goal, ongoing activity is needed to sustain the goal objective
   */
  continuous?: boolean;
  /**
   * Extension for continuous
   */
  _continuous?: IElement;

  /**
   * high-priority | medium-priority | low-priority
   */
  priority?: ICodeableConcept;

  /**
   * Code or text describing goal
   */
  description: ICodeableConcept;

  /**
   * Who this goal is intended for
   */
  subject: IReference<'Patient' | 'Group' | 'Organization'>;

  /**
   * When goal pursuit begins
   */
  startDate?: string;
  /**
   * Extension for startDate
   */
  _startDate?: IElement;

  /**
   * When goal pursuit begins
   */
  startCodeableConcept?: ICodeableConcept;

  /**
   * Target outcome for the goal
   */
  target?: IGoalTarget[];

  /**
   * When goal status took effect
   */
  statusDate?: string;
  /**
   * Extension for statusDate
   */
  _statusDate?: IElement;

  /**
   * Reason for current status
   */
  statusReason?: string;
  /**
   * Extension for statusReason
   */
  _statusReason?: IElement;

  /**
   * Who's responsible for creating Goal?
   */
  source?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'CareTeam'>;

  /**
   * Issues addressed by this goal
   */
  addresses?: IReference<'Condition' | 'Observation' | 'MedicationStatement' | 'MedicationRequest' | 'NutritionOrder' | 'ServiceRequest' | 'RiskAssessment' | 'Procedure'>[];

  /**
   * Comments about the goal
   */
  note?: IAnnotation[];

  /**
   * What result was achieved regarding the goal?
   */
  outcome?: ICodeableReference[];

}
