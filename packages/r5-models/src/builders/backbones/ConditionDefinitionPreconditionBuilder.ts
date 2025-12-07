import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConditionDefinitionPrecondition } from '../../models/backbones/ConditionDefinitionPrecondition.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ConditionPreconditionTypeType,
  ICodeableConcept,
  IConditionDefinitionPrecondition,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * ConditionDefinitionPreconditionBuilder - Fluent builder for ConditionDefinitionPrecondition backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const conditionDefinitionPrecondition = new ConditionDefinitionPreconditionBuilder()
 *   .setType(value)
 *   .build();
 */
export class ConditionDefinitionPreconditionBuilder extends BackboneElementBuilder<ConditionDefinitionPrecondition, IConditionDefinitionPrecondition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * sensitive | specific
   */
  setType(type: ConditionPreconditionTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set code
   * Code for relevant Observation
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueCodeableConcept, valueQuantity)
   * @param type - 'CodeableConcept' | 'Quantity'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('CodeableConcept', value)
   */
  setValue<T extends 'CodeableConcept' | 'Quantity'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IConditionDefinitionPrecondition;
    const otherKeys: (keyof IConditionDefinitionPrecondition)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IConditionDefinitionPrecondition);
      otherKeys.push('_valueCodeableConcept' as keyof IConditionDefinitionPrecondition);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IConditionDefinitionPrecondition);
      otherKeys.push('_valueQuantity' as keyof IConditionDefinitionPrecondition);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConditionDefinitionPrecondition instance
   */
  build(): ConditionDefinitionPrecondition {
    return new ConditionDefinitionPrecondition(this.data);
  }

  /**
   * Build and validate the ConditionDefinitionPrecondition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConditionDefinitionPrecondition> {
    const conditionDefinitionPrecondition = this.build();
    await conditionDefinitionPrecondition.validateOrThrow();
    return conditionDefinitionPrecondition;
  }
}
