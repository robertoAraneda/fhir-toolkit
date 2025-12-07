import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { BundleEntry } from '../../models/backbones/BundleEntry.js';
import type {
  IBundleEntry,
  IBundleEntryRequest,
  IBundleEntryResponse,
  IBundleEntrySearch,
  IBundleLink,
  IResource,
} from '@fhir-toolkit/r4b-types';

/**
 * BundleEntryBuilder - Fluent builder for BundleEntry backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const bundleEntry = new BundleEntryBuilder()
 *   .setFullUrl(value)
 *   .addLink({ ... })
 *   .build();
 */
export class BundleEntryBuilder extends BackboneElementBuilder<BundleEntry, IBundleEntry> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set fullUrl
   * URI for resource (Absolute URL server address or URI for UUID/OID)
   */
  setFullUrl(fullUrl: string): this {
    this.data.fullUrl = fullUrl;
    return this;
  }

  /**
   * Set resource
   * A resource in the bundle
   */
  setResource(resource: IResource): this {
    this.data.resource = resource;
    return this;
  }

  /**
   * Set search
   * Search related information
   */
  setSearch(search: IBundleEntrySearch): this {
    this.data.search = search;
    return this;
  }

  /**
   * Set request
   * Additional execution information (transaction/batch/history)
   */
  setRequest(request: IBundleEntryRequest): this {
    this.data.request = request;
    return this;
  }

  /**
   * Set response
   * Results of execution (transaction/batch/history)
   */
  setResponse(response: IBundleEntryResponse): this {
    this.data.response = response;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add link
   * Links related to this entry
   */
  addLink(link: IBundleLink): this {
    return this.addToArray('link', link);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BundleEntry instance
   */
  build(): BundleEntry {
    return new BundleEntry(this.data);
  }

  /**
   * Build and validate the BundleEntry instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BundleEntry> {
    const bundleEntry = this.build();
    await bundleEntry.validateOrThrow();
    return bundleEntry;
  }
}
