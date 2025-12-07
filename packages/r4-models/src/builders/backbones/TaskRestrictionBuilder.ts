import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TaskRestriction } from '../../models/backbones/TaskRestriction.js';
import type {
  IPeriod,
  IReference,
  ITaskRestriction,
} from '@fhir-toolkit/r4-types';

/**
 * TaskRestrictionBuilder - Fluent builder for TaskRestriction backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const taskRestriction = new TaskRestrictionBuilder()
 *   .setRepetitions(value)
 *   .addRecipient({ ... })
 *   .build();
 */
export class TaskRestrictionBuilder extends BackboneElementBuilder<TaskRestriction, ITaskRestriction> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set repetitions
   * How many times to repeat
   */
  setRepetitions(repetitions: number): this {
    this.data.repetitions = repetitions;
    return this;
  }

  /**
   * Set period
   * When fulfillment sought
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add recipient
   * For whom is fulfillment sought?
   */
  addRecipient(recipient: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Group' | 'Organization'>): this {
    return this.addToArray('recipient', recipient);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TaskRestriction instance
   */
  build(): TaskRestriction {
    return new TaskRestriction(this.data);
  }

  /**
   * Build and validate the TaskRestriction instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TaskRestriction> {
    const taskRestriction = this.build();
    await taskRestriction.validateOrThrow();
    return taskRestriction;
  }
}
