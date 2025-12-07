import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { BundleEntryResponse } from '../../models/backbones/BundleEntryResponse.js';
import type {
  IBundleEntryResponse,
  IResource,
} from '@fhir-toolkit/r4b-types';

/**
 * BundleEntryResponseBuilder - Fluent builder for BundleEntryResponse backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const bundleEntryResponse = new BundleEntryResponseBuilder()
 *   .setStatus(value)
 *   .build();
 */
export class BundleEntryResponseBuilder extends BackboneElementBuilder<BundleEntryResponse, IBundleEntryResponse> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * Status response code (text optional)
   */
  setStatus(status: string): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set location
   * The location (if the operation returns a location)
   */
  setLocation(location: string): this {
    this.data.location = location;
    return this;
  }

  /**
   * Set etag
   * The Etag for the resource (if relevant)
   */
  setEtag(etag: string): this {
    this.data.etag = etag;
    return this;
  }

  /**
   * Set lastModified
   * Server's date time modified
   */
  setLastModified(lastModified: string): this {
    this.data.lastModified = lastModified;
    return this;
  }

  /**
   * Set outcome
   * OperationOutcome with hints and warnings (for batch/transaction)
   */
  setOutcome(outcome: IResource): this {
    this.data.outcome = outcome;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BundleEntryResponse instance
   */
  build(): BundleEntryResponse {
    return new BundleEntryResponse(this.data);
  }

  /**
   * Build and validate the BundleEntryResponse instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BundleEntryResponse> {
    const bundleEntryResponse = this.build();
    await bundleEntryResponse.validateOrThrow();
    return bundleEntryResponse;
  }
}
