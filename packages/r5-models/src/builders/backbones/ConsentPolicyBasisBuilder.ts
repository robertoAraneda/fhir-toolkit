import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConsentPolicyBasis } from '../../models/backbones/ConsentPolicyBasis.js';
import type {
  IConsentPolicyBasis,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * ConsentPolicyBasisBuilder - Fluent builder for ConsentPolicyBasis backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const consentPolicyBasis = new ConsentPolicyBasisBuilder()
 *   .setReference(value)
 *   .build();
 */
export class ConsentPolicyBasisBuilder extends BackboneElementBuilder<ConsentPolicyBasis, IConsentPolicyBasis> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set reference
   * Reference backing policy resource
   */
  setReference(reference: IReference<'Resource'>): this {
    this.data.reference = reference;
    return this;
  }

  /**
   * Set url
   * URL to a computable backing policy
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConsentPolicyBasis instance
   */
  build(): ConsentPolicyBasis {
    return new ConsentPolicyBasis(this.data);
  }

  /**
   * Build and validate the ConsentPolicyBasis instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConsentPolicyBasis> {
    const consentPolicyBasis = this.build();
    await consentPolicyBasis.validateOrThrow();
    return consentPolicyBasis;
  }
}
