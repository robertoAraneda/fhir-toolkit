import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TerminologyCapabilitiesCodeSystem } from '../../models/backbones/TerminologyCapabilitiesCodeSystem.js';
import type {
  CodeSystemContentModeType,
  ITerminologyCapabilitiesCodeSystem,
  ITerminologyCapabilitiesCodeSystemVersion,
} from '@fhir-toolkit/r5-types';

/**
 * TerminologyCapabilitiesCodeSystemBuilder - Fluent builder for TerminologyCapabilitiesCodeSystem backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const terminologyCapabilitiesCodeSystem = new TerminologyCapabilitiesCodeSystemBuilder()
 *   .setUri(value)
 *   .addVersion({ ... })
 *   .build();
 */
export class TerminologyCapabilitiesCodeSystemBuilder extends BackboneElementBuilder<TerminologyCapabilitiesCodeSystem, ITerminologyCapabilitiesCodeSystem> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set uri
   * Canonical identifier for the code system, represented as a URI
   */
  setUri(uri: string): this {
    this.data.uri = uri;
    return this;
  }

  /**
   * Set content
   * not-present | example | fragment | complete | supplement
   */
  setContent(content: CodeSystemContentModeType): this {
    this.data.content = content;
    return this;
  }

  /**
   * Set subsumption
   * Whether subsumption is supported
   */
  setSubsumption(subsumption: boolean): this {
    this.data.subsumption = subsumption;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add version
   * Version of Code System supported
   */
  addVersion(version: ITerminologyCapabilitiesCodeSystemVersion): this {
    return this.addToArray('version', version);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TerminologyCapabilitiesCodeSystem instance
   */
  build(): TerminologyCapabilitiesCodeSystem {
    return new TerminologyCapabilitiesCodeSystem(this.data);
  }

  /**
   * Build and validate the TerminologyCapabilitiesCodeSystem instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TerminologyCapabilitiesCodeSystem> {
    const terminologyCapabilitiesCodeSystem = this.build();
    await terminologyCapabilitiesCodeSystem.validateOrThrow();
    return terminologyCapabilitiesCodeSystem;
  }
}
