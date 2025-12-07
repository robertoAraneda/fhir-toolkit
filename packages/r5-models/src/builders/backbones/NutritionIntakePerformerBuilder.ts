import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { NutritionIntakePerformer } from '../../models/backbones/NutritionIntakePerformer.js';
import type {
  ICodeableConcept,
  INutritionIntakePerformer,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * NutritionIntakePerformerBuilder - Fluent builder for NutritionIntakePerformer backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const nutritionIntakePerformer = new NutritionIntakePerformerBuilder()
 *   .setFunction(value)
 *   .build();
 */
export class NutritionIntakePerformerBuilder extends BackboneElementBuilder<NutritionIntakePerformer, INutritionIntakePerformer> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set function
   * Type of performer
   */
  setFunction(_function: ICodeableConcept): this {
    this.data.function = _function;
    return this;
  }

  /**
   * Set actor
   * Who performed the intake
   */
  setActor(actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>): this {
    this.data.actor = actor;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the NutritionIntakePerformer instance
   */
  build(): NutritionIntakePerformer {
    return new NutritionIntakePerformer(this.data);
  }

  /**
   * Build and validate the NutritionIntakePerformer instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<NutritionIntakePerformer> {
    const nutritionIntakePerformer = this.build();
    await nutritionIntakePerformer.validateOrThrow();
    return nutritionIntakePerformer;
  }
}
