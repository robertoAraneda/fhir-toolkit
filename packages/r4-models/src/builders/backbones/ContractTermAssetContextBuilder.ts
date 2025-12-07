import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ContractTermAssetContext } from '../../models/backbones/ContractTermAssetContext.js';
import type {
  ICodeableConcept,
  IContractTermAssetContext,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * ContractTermAssetContextBuilder - Fluent builder for ContractTermAssetContext backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const contractTermAssetContext = new ContractTermAssetContextBuilder()
 *   .setReference(value)
 *   .addCode({ ... })
 *   .build();
 */
export class ContractTermAssetContextBuilder extends BackboneElementBuilder<ContractTermAssetContext, IContractTermAssetContext> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set reference
   * Creator,custodian or owner
   */
  setReference(reference: IReference<'Resource'>): this {
    this.data.reference = reference;
    return this;
  }

  /**
   * Set text
   * Context description
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add code
   * Codeable asset context
   */
  addCode(code: ICodeableConcept): this {
    return this.addToArray('code', code);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ContractTermAssetContext instance
   */
  build(): ContractTermAssetContext {
    return new ContractTermAssetContext(this.data);
  }

  /**
   * Build and validate the ContractTermAssetContext instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ContractTermAssetContext> {
    const contractTermAssetContext = this.build();
    await contractTermAssetContext.validateOrThrow();
    return contractTermAssetContext;
  }
}
