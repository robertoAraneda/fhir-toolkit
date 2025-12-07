import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Bundle } from '../../models/resources/Bundle.js';
import type {
  BundleTypeType,
  IBundle,
  IBundleEntry,
  IBundleLink,
  IIdentifier,
  ISignature,
} from '@fhir-toolkit/r4b-types';

/**
 * BundleBuilder - Fluent builder for Bundle resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const bundle = new BundleBuilder()
 *   .setId('123')
 *   .setIdentifier(value)
 *   .addLink({ ... })
 *   .build();
 */
export class BundleBuilder extends DomainResourceBuilder<Bundle, IBundle> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Persistent identifier for the bundle
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set type
   * document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection
   */
  setType(type: BundleTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set timestamp
   * When the bundle was assembled
   */
  setTimestamp(timestamp: string): this {
    this.data.timestamp = timestamp;
    return this;
  }

  /**
   * Set total
   * If search, the total number of matches
   */
  setTotal(total: number): this {
    this.data.total = total;
    return this;
  }

  /**
   * Set signature
   * Digital Signature
   */
  setSignature(signature: ISignature): this {
    this.data.signature = signature;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add link
   * Links related to this Bundle
   */
  addLink(link: IBundleLink): this {
    return this.addToArray('link', link);
  }

  /**
   * Add entry
   * Entry in the bundle - will have a resource or information
   */
  addEntry(entry: IBundleEntry): this {
    return this.addToArray('entry', entry);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Bundle instance
   */
  build(): Bundle {
    return new Bundle(this.data);
  }

  /**
   * Build and validate the Bundle instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Bundle> {
    const bundle = this.build();
    await bundle.validateOrThrow();
    return bundle;
  }
}
