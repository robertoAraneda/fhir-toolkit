import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { StructureMapGroupRuleTargetParameter } from '../../models/backbones/StructureMapGroupRuleTargetParameter.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IStructureMapGroupRuleTargetParameter,
} from '@fhir-toolkit/r5-types';

/**
 * StructureMapGroupRuleTargetParameterBuilder - Fluent builder for StructureMapGroupRuleTargetParameter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const structureMapGroupRuleTargetParameter = new StructureMapGroupRuleTargetParameterBuilder()
 *   .build();
 */
export class StructureMapGroupRuleTargetParameterBuilder extends BackboneElementBuilder<StructureMapGroupRuleTargetParameter, IStructureMapGroupRuleTargetParameter> {
  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueId, valueString, valueBoolean, valueInteger, valueDecimal, valueDate, valueTime, valueDateTime)
   * @param type - 'Id' | 'String' | 'Boolean' | 'Integer' | 'Decimal' | 'Date' | 'Time' | 'DateTime'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Id', value)
   */
  setValue<T extends 'Id' | 'String' | 'Boolean' | 'Integer' | 'Decimal' | 'Date' | 'Time' | 'DateTime'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IStructureMapGroupRuleTargetParameter;
    const otherKeys: (keyof IStructureMapGroupRuleTargetParameter)[] = [];
    if (type !== 'Id') {
      otherKeys.push('valueId' as keyof IStructureMapGroupRuleTargetParameter);
      otherKeys.push('_valueId' as keyof IStructureMapGroupRuleTargetParameter);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IStructureMapGroupRuleTargetParameter);
      otherKeys.push('_valueString' as keyof IStructureMapGroupRuleTargetParameter);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IStructureMapGroupRuleTargetParameter);
      otherKeys.push('_valueBoolean' as keyof IStructureMapGroupRuleTargetParameter);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IStructureMapGroupRuleTargetParameter);
      otherKeys.push('_valueInteger' as keyof IStructureMapGroupRuleTargetParameter);
    }
    if (type !== 'Decimal') {
      otherKeys.push('valueDecimal' as keyof IStructureMapGroupRuleTargetParameter);
      otherKeys.push('_valueDecimal' as keyof IStructureMapGroupRuleTargetParameter);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof IStructureMapGroupRuleTargetParameter);
      otherKeys.push('_valueDate' as keyof IStructureMapGroupRuleTargetParameter);
    }
    if (type !== 'Time') {
      otherKeys.push('valueTime' as keyof IStructureMapGroupRuleTargetParameter);
      otherKeys.push('_valueTime' as keyof IStructureMapGroupRuleTargetParameter);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IStructureMapGroupRuleTargetParameter);
      otherKeys.push('_valueDateTime' as keyof IStructureMapGroupRuleTargetParameter);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the StructureMapGroupRuleTargetParameter instance
   */
  build(): StructureMapGroupRuleTargetParameter {
    return new StructureMapGroupRuleTargetParameter(this.data);
  }

  /**
   * Build and validate the StructureMapGroupRuleTargetParameter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<StructureMapGroupRuleTargetParameter> {
    const structureMapGroupRuleTargetParameter = this.build();
    await structureMapGroupRuleTargetParameter.validateOrThrow();
    return structureMapGroupRuleTargetParameter;
  }
}
