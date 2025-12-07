import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceStatisticModelCharacteristic } from '../../models/backbones/EvidenceStatisticModelCharacteristic.js';
import type {
  ICodeableConcept,
  IEvidenceStatisticAttributeEstimate,
  IEvidenceStatisticModelCharacteristic,
  IEvidenceStatisticModelCharacteristicVariable,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/**
 * EvidenceStatisticModelCharacteristicBuilder - Fluent builder for EvidenceStatisticModelCharacteristic backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceStatisticModelCharacteristic = new EvidenceStatisticModelCharacteristicBuilder()
 *   .setCode(value)
 *   .addVariable({ ... })
 *   .build();
 */
export class EvidenceStatisticModelCharacteristicBuilder extends BackboneElementBuilder<EvidenceStatisticModelCharacteristic, IEvidenceStatisticModelCharacteristic> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Model specification
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set value
   * Numerical value to complete model specification
   */
  setValue(value: IQuantity): this {
    this.data.value = value;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add variable
   * A variable adjusted for in the adjusted analysis
   */
  addVariable(variable: IEvidenceStatisticModelCharacteristicVariable): this {
    return this.addToArray('variable', variable);
  }

  /**
   * Add attributeEstimate
   * An attribute of the statistic used as a model characteristic
   */
  addAttributeEstimate(attributeEstimate: IEvidenceStatisticAttributeEstimate): this {
    return this.addToArray('attributeEstimate', attributeEstimate);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceStatisticModelCharacteristic instance
   */
  build(): EvidenceStatisticModelCharacteristic {
    return new EvidenceStatisticModelCharacteristic(this.data);
  }

  /**
   * Build and validate the EvidenceStatisticModelCharacteristic instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceStatisticModelCharacteristic> {
    const evidenceStatisticModelCharacteristic = this.build();
    await evidenceStatisticModelCharacteristic.validateOrThrow();
    return evidenceStatisticModelCharacteristic;
  }
}
