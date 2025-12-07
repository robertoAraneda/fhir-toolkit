import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceStatisticModelCharacteristicVariable } from '../../models/backbones/EvidenceStatisticModelCharacteristicVariable.js';
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
  // Array Properties
  // ============================================================================

  /**
   * Add valueCategory
   * Description for grouping of ordinal or polychotomous variables
   */
  addValueCategory(valueCategory: ICodeableConcept): this {
    return this.addToArray('valueCategory', valueCategory);
  }

  /**
   * Add valueQuantity
   * Discrete value for grouping of ordinal or polychotomous variables
   */
  addValueQuantity(valueQuantity: IQuantity): this {
    return this.addToArray('valueQuantity', valueQuantity);
  }

  /**
   * Add valueRange
   * Range of values for grouping of ordinal or polychotomous variables
   */
  addValueRange(valueRange: IRange): this {
    return this.addToArray('valueRange', valueRange);
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
