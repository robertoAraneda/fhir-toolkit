import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ActivityDefinitionParticipant } from '../../models/backbones/ActivityDefinitionParticipant.js';
import type {
  ActionParticipantTypeType,
  IActivityDefinitionParticipant,
  ICodeableConcept,
} from '@fhir-toolkit/r4-types';

/**
 * ActivityDefinitionParticipantBuilder - Fluent builder for ActivityDefinitionParticipant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const activityDefinitionParticipant = new ActivityDefinitionParticipantBuilder()
 *   .setType(value)
 *   .build();
 */
export class ActivityDefinitionParticipantBuilder extends BackboneElementBuilder<ActivityDefinitionParticipant, IActivityDefinitionParticipant> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * patient | practitioner | related-person | device
   */
  setType(type: ActionParticipantTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set role
   * E.g. Nurse, Surgeon, Parent, etc.
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ActivityDefinitionParticipant instance
   */
  build(): ActivityDefinitionParticipant {
    return new ActivityDefinitionParticipant(this.data);
  }

  /**
   * Build and validate the ActivityDefinitionParticipant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ActivityDefinitionParticipant> {
    const activityDefinitionParticipant = this.build();
    await activityDefinitionParticipant.validateOrThrow();
    return activityDefinitionParticipant;
  }
}
