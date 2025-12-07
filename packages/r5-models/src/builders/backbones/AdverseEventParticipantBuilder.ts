import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AdverseEventParticipant } from '../../models/backbones/AdverseEventParticipant.js';
import type {
  IAdverseEventParticipant,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * AdverseEventParticipantBuilder - Fluent builder for AdverseEventParticipant backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const adverseEventParticipant = new AdverseEventParticipantBuilder()
 *   .setFunction(value)
 *   .build();
 */
export class AdverseEventParticipantBuilder extends BackboneElementBuilder<AdverseEventParticipant, IAdverseEventParticipant> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set function
   * Type of involvement
   */
  setFunction(_function: ICodeableConcept): this {
    this.data.function = _function;
    return this;
  }

  /**
   * Set actor
   * Who was involved in the adverse event or the potential adverse event
   */
  setActor(actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson' | 'ResearchSubject'>): this {
    this.data.actor = actor;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AdverseEventParticipant instance
   */
  build(): AdverseEventParticipant {
    return new AdverseEventParticipant(this.data);
  }

  /**
   * Build and validate the AdverseEventParticipant instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AdverseEventParticipant> {
    const adverseEventParticipant = this.build();
    await adverseEventParticipant.validateOrThrow();
    return adverseEventParticipant;
  }
}
