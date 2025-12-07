import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TaskPerformer } from '../../models/backbones/TaskPerformer.js';
import type {
  ICodeableConcept,
  IReference,
  ITaskPerformer,
} from '@fhir-toolkit/r5-types';

/**
 * TaskPerformerBuilder - Fluent builder for TaskPerformer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const taskPerformer = new TaskPerformerBuilder()
 *   .setFunction(value)
 *   .build();
 */
export class TaskPerformerBuilder extends BackboneElementBuilder<TaskPerformer, ITaskPerformer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set function
   * Type of performance
   */
  setFunction(_function: ICodeableConcept): this {
    this.data.function = _function;
    return this;
  }

  /**
   * Set actor
   * Who performed the task
   */
  setActor(actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'RelatedPerson'>): this {
    this.data.actor = actor;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TaskPerformer instance
   */
  build(): TaskPerformer {
    return new TaskPerformer(this.data);
  }

  /**
   * Build and validate the TaskPerformer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TaskPerformer> {
    const taskPerformer = this.build();
    await taskPerformer.validateOrThrow();
    return taskPerformer;
  }
}
