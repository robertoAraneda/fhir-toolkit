import { ElementBuilder } from '../base/ElementBuilder.js';
import { Meta } from '../../models/datatypes/Meta.js';
import type {
  ICoding,
  IMeta,
} from '@fhir-toolkit/r4b-types';

/**
 * MetaBuilder - Fluent builder for Meta datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const meta = new MetaBuilder()
 *   .setVersionId(value)
 *   .addProfile({ ... })
 *   .build();
 */
export class MetaBuilder extends ElementBuilder<Meta, IMeta> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set versionId
   * Version specific identifier
   */
  setVersionId(versionId: string): this {
    this.data.versionId = versionId;
    return this;
  }

  /**
   * Set lastUpdated
   * When the resource version last changed
   */
  setLastUpdated(lastUpdated: string): this {
    this.data.lastUpdated = lastUpdated;
    return this;
  }

  /**
   * Set source
   * Identifies where the resource comes from
   */
  setSource(source: string): this {
    this.data.source = source;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add profile
   * Profiles this resource claims to conform to
   */
  addProfile(profile: string): this {
    return this.addToArray('profile', profile);
  }

  /**
   * Add security
   * Security Labels applied to this resource
   */
  addSecurity(security: ICoding): this {
    return this.addToArray('security', security);
  }

  /**
   * Add tag
   * Tags applied to this resource
   */
  addTag(tag: ICoding): this {
    return this.addToArray('tag', tag);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Meta instance
   */
  build(): Meta {
    return new Meta(this.data);
  }

  /**
   * Build and validate the Meta instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Meta> {
    const meta = this.build();
    await meta.validateOrThrow();
    return meta;
  }
}
