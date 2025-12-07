import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConsentProvisionActor } from '../../models/backbones/ConsentProvisionActor.js';
import type {
  ICodeableConcept,
  IConsentProvisionActor,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ConsentProvisionActorBuilder - Fluent builder for ConsentProvisionActor backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const consentProvisionActor = new ConsentProvisionActorBuilder()
 *   .setRole(value)
 *   .build();
 */
export class ConsentProvisionActorBuilder extends BackboneElementBuilder<ConsentProvisionActor, IConsentProvisionActor> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set role
   * How the actor is involved
   */
  setRole(role: ICodeableConcept): this {
    this.data.role = role;
    return this;
  }

  /**
   * Set reference
   * Resource for the actor (or group, by role)
   */
  setReference(reference: IReference<'Device' | 'Group' | 'CareTeam' | 'Organization' | 'Patient' | 'Practitioner' | 'RelatedPerson' | 'PractitionerRole'>): this {
    this.data.reference = reference;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConsentProvisionActor instance
   */
  build(): ConsentProvisionActor {
    return new ConsentProvisionActor(this.data);
  }

  /**
   * Build and validate the ConsentProvisionActor instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConsentProvisionActor> {
    const consentProvisionActor = this.build();
    await consentProvisionActor.validateOrThrow();
    return consentProvisionActor;
  }
}
