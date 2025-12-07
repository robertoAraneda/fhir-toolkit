import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImmunizationPerformer } from '../../models/backbones/ImmunizationPerformer.js';
import type {
  ICodeableConcept,
  IImmunizationPerformer,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * ImmunizationPerformerBuilder - Fluent builder for ImmunizationPerformer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const immunizationPerformer = new ImmunizationPerformerBuilder()
 *   .setFunction(value)
 *   .build();
 */
export class ImmunizationPerformerBuilder extends BackboneElementBuilder<ImmunizationPerformer, IImmunizationPerformer> {
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
   * Individual or organization who was performing
   */
  setActor(actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>): this {
    this.data.actor = actor;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImmunizationPerformer instance
   */
  build(): ImmunizationPerformer {
    return new ImmunizationPerformer(this.data);
  }

  /**
   * Build and validate the ImmunizationPerformer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImmunizationPerformer> {
    const immunizationPerformer = this.build();
    await immunizationPerformer.validateOrThrow();
    return immunizationPerformer;
  }
}
