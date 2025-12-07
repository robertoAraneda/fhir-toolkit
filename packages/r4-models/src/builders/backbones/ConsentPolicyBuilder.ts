import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ConsentPolicy } from '../../models/backbones/ConsentPolicy.js';
import type {
  IConsentPolicy,
} from '@fhir-toolkit/r4-types';

/**
 * ConsentPolicyBuilder - Fluent builder for ConsentPolicy backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const consentPolicy = new ConsentPolicyBuilder()
 *   .setAuthority(value)
 *   .build();
 */
export class ConsentPolicyBuilder extends BackboneElementBuilder<ConsentPolicy, IConsentPolicy> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set authority
   * Enforcement source for policy
   */
  setAuthority(authority: string): this {
    this.data.authority = authority;
    return this;
  }

  /**
   * Set uri
   * Specific policy covered by this consent
   */
  setUri(uri: string): this {
    this.data.uri = uri;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ConsentPolicy instance
   */
  build(): ConsentPolicy {
    return new ConsentPolicy(this.data);
  }

  /**
   * Build and validate the ConsentPolicy instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ConsentPolicy> {
    const consentPolicy = this.build();
    await consentPolicy.validateOrThrow();
    return consentPolicy;
  }
}
