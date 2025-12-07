import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ChargeItemDefinitionApplicability } from '../../models/backbones/ChargeItemDefinitionApplicability.js';
import type {
  IChargeItemDefinitionApplicability,
} from '@fhir-toolkit/r4b-types';

/**
 * ChargeItemDefinitionApplicabilityBuilder - Fluent builder for ChargeItemDefinitionApplicability backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const chargeItemDefinitionApplicability = new ChargeItemDefinitionApplicabilityBuilder()
 *   .setDescription(value)
 *   .build();
 */
export class ChargeItemDefinitionApplicabilityBuilder extends BackboneElementBuilder<ChargeItemDefinitionApplicability, IChargeItemDefinitionApplicability> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Natural language description of the condition
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set language
   * Language of the expression
   */
  setLanguage(language: string): this {
    this.data.language = language;
    return this;
  }

  /**
   * Set expression
   * Boolean-valued expression
   */
  setExpression(expression: string): this {
    this.data.expression = expression;
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
