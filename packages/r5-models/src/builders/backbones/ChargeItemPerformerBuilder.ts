import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ChargeItemPerformer } from '../../models/backbones/ChargeItemPerformer.js';
import type {
  IChargeItemPerformer,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ChargeItemPerformerBuilder - Fluent builder for ChargeItemPerformer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const chargeItemPerformer = new ChargeItemPerformerBuilder()
 *   .setFunction(value)
 *   .build();
 */
export class ChargeItemPerformerBuilder extends BackboneElementBuilder<ChargeItemPerformer, IChargeItemPerformer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set function
   * What type of performance was done
   */
  setFunction(_function: ICodeableConcept): this {
    this.data.function = _function;
    return this;
  }

  /**
   * Set actor
   * Individual who was performing
   */
  setActor(actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'HealthcareService' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>): this {
    this.data.actor = actor;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ChargeItemPerformer instance
   */
  build(): ChargeItemPerformer {
    return new ChargeItemPerformer(this.data);
  }

  /**
   * Build and validate the ChargeItemPerformer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ChargeItemPerformer> {
    const chargeItemPerformer = this.build();
    await chargeItemPerformer.validateOrThrow();
    return chargeItemPerformer;
  }
}
