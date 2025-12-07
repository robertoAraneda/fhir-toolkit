import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PlanDefinitionActionParticipant } from '../../models/backbones/PlanDefinitionActionParticipant.js';
import type {
  ActionParticipantTypeType,
  ICodeableConcept,
  IPlanDefinitionActionParticipant,
} from '@fhir-toolkit/r4-types';

/**
 * PlanDefinitionActionParticipantBuilder - Fluent builder for PlanDefinitionActionParticipant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const planDefinitionActionParticipant = new PlanDefinitionActionParticipantBuilder()
 *   .setType(value)
 *   .build();
 */
export class PlanDefinitionActionParticipantBuilder extends BackboneElementBuilder<PlanDefinitionActionParticipant, IPlanDefinitionActionParticipant> {
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
   * E.g. Nurse, Surgeon, Parent
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PlanDefinitionActionParticipant instance
   */
  build(): PlanDefinitionActionParticipant {
    return new PlanDefinitionActionParticipant(this.data);
  }

  /**
   * Build and validate the PlanDefinitionActionParticipant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PlanDefinitionActionParticipant> {
    const planDefinitionActionParticipant = this.build();
    await planDefinitionActionParticipant.validateOrThrow();
    return planDefinitionActionParticipant;
  }
}
