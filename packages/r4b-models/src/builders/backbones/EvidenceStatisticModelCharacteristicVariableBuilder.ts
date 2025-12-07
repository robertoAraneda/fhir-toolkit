import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceStatisticModelCharacteristicVariable } from '../../models/backbones/EvidenceStatisticModelCharacteristicVariable.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  EvidenceVariableHandlingType,
  ICodeableConcept,
  IEvidenceStatisticModelCharacteristicVariable,
  IQuantity,
  IRange,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * EvidenceStatisticModelCharacteristicVariableBuilder - Fluent builder for EvidenceStatisticModelCharacteristicVariable backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceStatisticModelCharacteristicVariable = new EvidenceStatisticModelCharacteristicVariableBuilder()
 *   .setVariableDefinition(value)
 *   .addValueCategory({ ... })
 *   .build();
 */
export class EvidenceStatisticModelCharacteristicVariableBuilder extends BackboneElementBuilder<EvidenceStatisticModelCharacteristicVariable, IEvidenceStatisticModelCharacteristicVariable> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set variableDefinition
   * Description of the variable
   */
  setVariableDefinition(variableDefinition: IReference<'Group' | 'EvidenceVariable'>): this {
    this.data.variableDefinition = variableDefinition;
    return this;
  }

  /**
   * Set handling
   * continuous | dichotomous | ordinal | polychotomous
   */
  setHandling(handling: EvidenceVariableHandlingType): this {
    this.data.handling = handling;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type
   * @param type - 'Quantity' | 'Range'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Quantity', value)
   */
  setValue<T extends 'Quantity' | 'Range'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IEvidenceStatisticModelCharacteristicVariable;
    const otherKeys: (keyof IEvidenceStatisticModelCharacteristicVariable)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IEvidenceStatisticModelCharacteristicVariable);
      otherKeys.push('_valueQuantity' as keyof IEvidenceStatisticModelCharacteristicVariable);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IEvidenceStatisticModelCharacteristicVariable);
      otherKeys.push('_valueRange' as keyof IEvidenceStatisticModelCharacteristicVariable);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add valueCategory
   * Description for grouping of ordinal or polychotomous variables
   */
  addValueCategory(valueCategory: ICodeableConcept): this {
    return this.addToArray('valueCategory', valueCategory);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceStatisticModelCharacteristicVariable instance
   */
  build(): EvidenceStatisticModelCharacteristicVariable {
    return new EvidenceStatisticModelCharacteristicVariable(this.data);
  }

  /**
   * Build and validate the EvidenceStatisticModelCharacteristicVariable instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceStatisticModelCharacteristicVariable> {
    const evidenceStatisticModelCharacteristicVariable = this.build();
    await evidenceStatisticModelCharacteristicVariable.validateOrThrow();
    return evidenceStatisticModelCharacteristicVariable;
  }
}
