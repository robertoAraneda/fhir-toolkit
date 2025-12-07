import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CapabilityStatementSoftware } from '../../models/backbones/CapabilityStatementSoftware.js';
import type {
  ICapabilityStatementSoftware,
} from '@fhir-toolkit/r5-types';

/**
 * CapabilityStatementSoftwareBuilder - Fluent builder for CapabilityStatementSoftware backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const capabilityStatementSoftware = new CapabilityStatementSoftwareBuilder()
 *   .setName(value)
 *   .build();
 */
export class CapabilityStatementSoftwareBuilder extends BackboneElementBuilder<CapabilityStatementSoftware, ICapabilityStatementSoftware> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * A name the software is known by
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set version
   * Version covered by this statement
   */
  setVersion(version: string): this {
    this.data.version = version;
    return this;
  }

  /**
   * Set releaseDate
   * Date this version was released
   */
  setReleaseDate(releaseDate: string): this {
    this.data.releaseDate = releaseDate;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CapabilityStatementSoftware instance
   */
  build(): CapabilityStatementSoftware {
    return new CapabilityStatementSoftware(this.data);
  }

  /**
   * Build and validate the CapabilityStatementSoftware instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CapabilityStatementSoftware> {
    const capabilityStatementSoftware = this.build();
    await capabilityStatementSoftware.validateOrThrow();
    return capabilityStatementSoftware;
  }
}
