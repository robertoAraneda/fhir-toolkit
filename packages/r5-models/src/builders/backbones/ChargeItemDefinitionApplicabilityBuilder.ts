import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ChargeItemDefinitionApplicability } from '../../models/backbones/ChargeItemDefinitionApplicability.js';
import type {
  IChargeItemDefinitionApplicability,
  IExpression,
  IPeriod,
  IRelatedArtifact,
} from '@fhir-toolkit/r5-types';

/**
 * ChargeItemDefinitionApplicabilityBuilder - Fluent builder for ChargeItemDefinitionApplicability backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const chargeItemDefinitionApplicability = new ChargeItemDefinitionApplicabilityBuilder()
 *   .setCondition(value)
 *   .build();
 */
export class ChargeItemDefinitionApplicabilityBuilder extends BackboneElementBuilder<ChargeItemDefinitionApplicability, IChargeItemDefinitionApplicability> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set condition
   * Boolean-valued expression
   */
  setCondition(condition: IExpression): this {
    this.data.condition = condition;
    return this;
  }

  /**
   * Set effectivePeriod
   * When the charge item definition is expected to be used
   */
  setEffectivePeriod(effectivePeriod: IPeriod): this {
    this.data.effectivePeriod = effectivePeriod;
    return this;
  }

  /**
   * Set relatedArtifact
   * Reference to / quotation of the external source of the group of properties
   */
  setRelatedArtifact(relatedArtifact: IRelatedArtifact): this {
    this.data.relatedArtifact = relatedArtifact;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ChargeItemDefinitionApplicability instance
   */
  build(): ChargeItemDefinitionApplicability {
    return new ChargeItemDefinitionApplicability(this.data);
  }

  /**
   * Build and validate the ChargeItemDefinitionApplicability instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ChargeItemDefinitionApplicability> {
    const chargeItemDefinitionApplicability = this.build();
    await chargeItemDefinitionApplicability.validateOrThrow();
    return chargeItemDefinitionApplicability;
  }
}
