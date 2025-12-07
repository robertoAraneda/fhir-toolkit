import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Goal } from '../../models/resources/Goal.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  GoalLifecycleStatusType,
  IAnnotation,
  ICodeableConcept,
  IGoal,
  IGoalTarget,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * GoalBuilder - Fluent builder for Goal resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const goal = new GoalBuilder()
 *   .setId('123')
 *   .setLifecycleStatus(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class GoalBuilder extends DomainResourceBuilder<Goal, IGoal> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set lifecycleStatus
   * proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected
   */
  setLifecycleStatus(lifecycleStatus: GoalLifecycleStatusType): this {
    this.data.lifecycleStatus = lifecycleStatus;
    return this;
  }

  /**
   * Set achievementStatus
   * in-progress | improving | worsening | no-change | achieved | sustaining | not-achieved | no-progress | not-attainable
   */
  setAchievementStatus(achievementStatus: ICodeableConcept): this {
    this.data.achievementStatus = achievementStatus;
    return this;
  }

  /**
   * Set priority
   * high-priority | medium-priority | low-priority
   */
  setPriority(priority: ICodeableConcept): this {
    this.data.priority = priority;
    return this;
  }

  /**
   * Set description
   * Code or text describing goal
   */
  setDescription(description: ICodeableConcept): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set subject
   * Who this goal is intended for
   */
  setSubject(subject: IReference<'Patient' | 'Group' | 'Organization'>): this {
    this.data.subject = subject;
    return this;
  }

  /**
   * Set statusDate
   * When goal status took effect
   */
  setStatusDate(statusDate: string): this {
    this.data.statusDate = statusDate;
    return this;
  }

  /**
   * Set statusReason
   * Reason for current status
   */
  setStatusReason(statusReason: string): this {
    this.data.statusReason = statusReason;
    return this;
  }

  /**
   * Set expressedBy
   * Who's responsible for creating Goal?
   */
  setExpressedBy(expressedBy: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>): this {
    this.data.expressedBy = expressedBy;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set start choice type (startDate, startCodeableConcept)
   * @param type - 'Date' | 'CodeableConcept'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setStart('Date', value)
   */
  setStart<T extends 'Date' | 'CodeableConcept'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `start${type}` as keyof IGoal;
    const otherKeys: (keyof IGoal)[] = [];
    if (type !== 'Date') {
      otherKeys.push('startDate' as keyof IGoal);
      otherKeys.push('_startDate' as keyof IGoal);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('startCodeableConcept' as keyof IGoal);
      otherKeys.push('_startCodeableConcept' as keyof IGoal);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External Ids for this goal
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add category
   * E.g. Treatment, dietary, behavioral, etc.
   */
  addCategory(category: ICodeableConcept): this {
    return this.addToArray('category', category);
  }

  /**
   * Add target
   * Target outcome for the goal
   */
  addTarget(target: IGoalTarget): this {
    return this.addToArray('target', target);
  }

  /**
   * Add addresses
   * Issues addressed by this goal
   */
  addAddresses(addresse: IReference<'Condition' | 'Observation' | 'MedicationStatement' | 'NutritionOrder' | 'ServiceRequest' | 'RiskAssessment'>): this {
    return this.addToArray('addresses', addresse);
  }

  /**
   * Add note
   * Comments about the goal
   */
  addNote(note: IAnnotation): this {
    return this.addToArray('note', note);
  }

  /**
   * Add outcomeCode
   * What result was achieved regarding the goal?
   */
  addOutcomeCode(outcomeCode: ICodeableConcept): this {
    return this.addToArray('outcomeCode', outcomeCode);
  }

  /**
   * Add outcomeReference
   * Observation that resulted from goal
   */
  addOutcomeReference(outcomeReference: IReference<'Observation'>): this {
    return this.addToArray('outcomeReference', outcomeReference);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Goal instance
   */
  build(): Goal {
    return new Goal(this.data);
  }

  /**
   * Build and validate the Goal instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Goal> {
    const goal = this.build();
    await goal.validateOrThrow();
    return goal;
  }
}
