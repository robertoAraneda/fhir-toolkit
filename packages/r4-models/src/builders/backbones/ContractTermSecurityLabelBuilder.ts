import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ContractTermSecurityLabel } from '../../models/backbones/ContractTermSecurityLabel.js';
import type {
  ICoding,
  IContractTermSecurityLabel,
} from '@fhir-toolkit/r4-types';

/**
 * ContractTermSecurityLabelBuilder - Fluent builder for ContractTermSecurityLabel backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const contractTermSecurityLabel = new ContractTermSecurityLabelBuilder()
 *   .setClassification(value)
 *   .addNumber({ ... })
 *   .build();
 */
export class ContractTermSecurityLabelBuilder extends BackboneElementBuilder<ContractTermSecurityLabel, IContractTermSecurityLabel> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set classification
   * Confidentiality Protection
   */
  setClassification(classification: ICoding): this {
    this.data.classification = classification;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add number
   * Link to Security Labels
   */
  addNumber(number: number): this {
    return this.addToArray('number', number);
  }

  /**
   * Add category
   * Applicable Policy
   */
  addCategory(category: ICoding): this {
    return this.addToArray('category', category);
  }

  /**
   * Add control
   * Handling Instructions
   */
  addControl(control: ICoding): this {
    return this.addToArray('control', control);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContractTermSecurityLabel instance
   */
  build(): ContractTermSecurityLabel {
    return new ContractTermSecurityLabel(this.data);
  }

  /**
   * Build and validate the ContractTermSecurityLabel instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContractTermSecurityLabel> {
    const contractTermSecurityLabel = this.build();
    await contractTermSecurityLabel.validateOrThrow();
    return contractTermSecurityLabel;
  }
}
