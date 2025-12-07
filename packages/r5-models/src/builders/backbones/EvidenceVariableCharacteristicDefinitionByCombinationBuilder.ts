import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { EvidenceVariableCharacteristicDefinitionByCombination } from '../../models/backbones/EvidenceVariableCharacteristicDefinitionByCombination.js';
import type {
  CharacteristicCombinationType,
  IEvidenceVariableCharacteristic,
  IEvidenceVariableCharacteristicDefinitionByCombination,
} from '@fhir-toolkit/r5-types';

/**
 * EvidenceVariableCharacteristicDefinitionByCombinationBuilder - Fluent builder for EvidenceVariableCharacteristicDefinitionByCombination backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const evidenceVariableCharacteristicDefinitionByCombination = new EvidenceVariableCharacteristicDefinitionByCombinationBuilder()
 *   .setCode(value)
 *   .addCharacteristic({ ... })
 *   .build();
 */
export class EvidenceVariableCharacteristicDefinitionByCombinationBuilder extends BackboneElementBuilder<EvidenceVariableCharacteristicDefinitionByCombination, IEvidenceVariableCharacteristicDefinitionByCombination> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * all-of | any-of | at-least | at-most | statistical | net-effect | dataset
   */
  setCode(code: CharacteristicCombinationType): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set threshold
   * Provides the value of "n" when "at-least" or "at-most" codes are used
   */
  setThreshold(threshold: number): this {
    this.data.threshold = threshold;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add characteristic
   * A defining factor of the characteristic
   */
  addCharacteristic(characteristic: IEvidenceVariableCharacteristic): this {
    return this.addToArray('characteristic', characteristic);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the EvidenceVariableCharacteristicDefinitionByCombination instance
   */
  build(): EvidenceVariableCharacteristicDefinitionByCombination {
    return new EvidenceVariableCharacteristicDefinitionByCombination(this.data);
  }

  /**
   * Build and validate the EvidenceVariableCharacteristicDefinitionByCombination instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<EvidenceVariableCharacteristicDefinitionByCombination> {
    const evidenceVariableCharacteristicDefinitionByCombination = this.build();
    await evidenceVariableCharacteristicDefinitionByCombination.validateOrThrow();
    return evidenceVariableCharacteristicDefinitionByCombination;
  }
}
