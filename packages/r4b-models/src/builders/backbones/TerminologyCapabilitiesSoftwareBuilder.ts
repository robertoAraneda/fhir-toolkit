import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TerminologyCapabilitiesSoftware } from '../../models/backbones/TerminologyCapabilitiesSoftware.js';
import type {
  ITerminologyCapabilitiesSoftware,
} from '@fhir-toolkit/r4b-types';

/**
 * TerminologyCapabilitiesSoftwareBuilder - Fluent builder for TerminologyCapabilitiesSoftware backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const terminologyCapabilitiesSoftware = new TerminologyCapabilitiesSoftwareBuilder()
 *   .setName(value)
 *   .build();
 */
export class TerminologyCapabilitiesSoftwareBuilder extends BackboneElementBuilder<TerminologyCapabilitiesSoftware, ITerminologyCapabilitiesSoftware> {
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

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TerminologyCapabilitiesSoftware instance
   */
  build(): TerminologyCapabilitiesSoftware {
    return new TerminologyCapabilitiesSoftware(this.data);
  }

  /**
   * Build and validate the TerminologyCapabilitiesSoftware instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TerminologyCapabilitiesSoftware> {
    const terminologyCapabilitiesSoftware = this.build();
    await terminologyCapabilitiesSoftware.validateOrThrow();
    return terminologyCapabilitiesSoftware;
  }
}
