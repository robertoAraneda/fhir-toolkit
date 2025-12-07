import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { BundleEntryRequest } from '../../models/backbones/BundleEntryRequest.js';
import type {
  HTTPVerbType,
  IBundleEntryRequest,
} from '@fhir-toolkit/r4b-types';

/**
 * BundleEntryRequestBuilder - Fluent builder for BundleEntryRequest backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const bundleEntryRequest = new BundleEntryRequestBuilder()
 *   .setMethod(value)
 *   .build();
 */
export class BundleEntryRequestBuilder extends BackboneElementBuilder<BundleEntryRequest, IBundleEntryRequest> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set method
   * GET | HEAD | POST | PUT | DELETE | PATCH
   */
  setMethod(method: HTTPVerbType): this {
    this.data.method = method;
    return this;
  }

  /**
   * Set url
   * URL for HTTP equivalent of this entry
   */
  setUrl(url: string): this {
    this.data.url = url;
    return this;
  }

  /**
   * Set ifNoneMatch
   * For managing cache currency
   */
  setIfNoneMatch(ifNoneMatch: string): this {
    this.data.ifNoneMatch = ifNoneMatch;
    return this;
  }

  /**
   * Set ifModifiedSince
   * For managing cache currency
   */
  setIfModifiedSince(ifModifiedSince: string): this {
    this.data.ifModifiedSince = ifModifiedSince;
    return this;
  }

  /**
   * Set ifMatch
   * For managing update contention
   */
  setIfMatch(ifMatch: string): this {
    this.data.ifMatch = ifMatch;
    return this;
  }

  /**
   * Set ifNoneExist
   * For conditional creates
   */
  setIfNoneExist(ifNoneExist: string): this {
    this.data.ifNoneExist = ifNoneExist;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BundleEntryRequest instance
   */
  build(): BundleEntryRequest {
    return new BundleEntryRequest(this.data);
  }

  /**
   * Build and validate the BundleEntryRequest instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BundleEntryRequest> {
    const bundleEntryRequest = this.build();
    await bundleEntryRequest.validateOrThrow();
    return bundleEntryRequest;
  }
}
