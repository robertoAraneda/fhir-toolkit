import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { BiologicallyDerivedProductDispensePerformer } from '../../models/backbones/BiologicallyDerivedProductDispensePerformer.js';
import type {
  IBiologicallyDerivedProductDispensePerformer,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * BiologicallyDerivedProductDispensePerformerBuilder - Fluent builder for BiologicallyDerivedProductDispensePerformer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const biologicallyDerivedProductDispensePerformer = new BiologicallyDerivedProductDispensePerformerBuilder()
 *   .setFunction(value)
 *   .build();
 */
export class BiologicallyDerivedProductDispensePerformerBuilder extends BackboneElementBuilder<BiologicallyDerivedProductDispensePerformer, IBiologicallyDerivedProductDispensePerformer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set function
   * Identifies the function of the performer during the dispense
   */
  setFunction(_function: ICodeableConcept): this {
    this.data.function = _function;
    return this;
  }

  /**
   * Set actor
   * Who performed the action
   */
  setActor(actor: IReference<'Practitioner'>): this {
    this.data.actor = actor;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BiologicallyDerivedProductDispensePerformer instance
   */
  build(): BiologicallyDerivedProductDispensePerformer {
    return new BiologicallyDerivedProductDispensePerformer(this.data);
  }

  /**
   * Build and validate the BiologicallyDerivedProductDispensePerformer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BiologicallyDerivedProductDispensePerformer> {
    const biologicallyDerivedProductDispensePerformer = this.build();
    await biologicallyDerivedProductDispensePerformer.validateOrThrow();
    return biologicallyDerivedProductDispensePerformer;
  }
}
