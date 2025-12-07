import { DomainResource } from '../base/DomainResource.js';
import type {
  GoalLifecycleStatusType,
  IAnnotation,
  ICodeableConcept,
  IElement,
  IGoal,
  IGoalTarget,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Goal */
const GOAL_PROPERTIES = [
  'identifier',
  'lifecycleStatus',
  '_lifecycleStatus',
  'achievementStatus',
  'category',
  'priority',
  'description',
  'subject',
  'startDate',
  '_startDate',
  'startCodeableConcept',
  'target',
  'statusDate',
  '_statusDate',
  'statusReason',
  '_statusReason',
  'expressedBy',
  'addresses',
  'note',
  'outcomeCode',
  'outcomeReference',
] as const;

/**
 * Goal - Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 *
 * @see https://hl7.org/fhir/R4/goal.html
 *
 * @example
 * const goal = new Goal({
 *   resourceType: 'Goal',
 *   // ... properties
 * });
 */
export class Goal extends DomainResource implements IGoal {
  readonly resourceType = 'Goal' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External Ids for this goal */
  identifier?: IIdentifier[];

  /** proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected */
  lifecycleStatus: GoalLifecycleStatusType;

  /** Extension for lifecycleStatus */
  _lifecycleStatus?: IElement;

  /** in-progress | improving | worsening | no-change | achieved | sustaining | not-achieved | no-progress | not-attainable */
  achievementStatus?: ICodeableConcept;

  /** E.g. Treatment, dietary, behavioral, etc. */
  category?: ICodeableConcept[];

  /** high-priority | medium-priority | low-priority */
  priority?: ICodeableConcept;

  /** Code or text describing goal */
  description: ICodeableConcept;

  /** Who this goal is intended for */
  subject: IReference<'Patient' | 'Group' | 'Organization'>;

  /** When goal pursuit begins */
  startDate?: string;

  /** Extension for startDate */
  _startDate?: IElement;

  /** When goal pursuit begins */
  startCodeableConcept?: ICodeableConcept;

  /** Target outcome for the goal */
  target?: IGoalTarget[];

  /** When goal status took effect */
  statusDate?: string;

  /** Extension for statusDate */
  _statusDate?: IElement;

  /** Reason for current status */
  statusReason?: string;

  /** Extension for statusReason */
  _statusReason?: IElement;

  /** Who's responsible for creating Goal? */
  expressedBy?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /** Issues addressed by this goal */
  addresses?: IReference<'Condition' | 'Observation' | 'MedicationStatement' | 'NutritionOrder' | 'ServiceRequest' | 'RiskAssessment'>[];

  /** Comments about the goal */
  note?: IAnnotation[];

  /** What result was achieved regarding the goal? */
  outcomeCode?: ICodeableConcept[];

  /** Observation that resulted from goal */
  outcomeReference?: IReference<'Observation'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IGoal>) {
    super(data);
    if (data) {
      this.assignProps(data, GOAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Goal from a JSON object
   */
  static fromJSON(json: IGoal): Goal {
    return new Goal(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Goal with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGoal>): Goal {
    return new Goal({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Goal by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGoal) => Partial<IGoal>): Goal {
    const currentData = this.toJSON();
    return new Goal({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGoal)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGoal {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, GOAL_PROPERTIES);
    return result as IGoal;
  }

  /**
   * Create a deep clone of this Goal
   */
  clone(): Goal {
    return new Goal(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Goal
   */
  toString(): string {
    const parts: string[] = ['Goal'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
