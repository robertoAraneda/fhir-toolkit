import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TerminologyCapabilitiesCodeSystemVersion } from '../../models/backbones/TerminologyCapabilitiesCodeSystemVersion.js';
import type {
  ITerminologyCapabilitiesCodeSystemVersion,
  ITerminologyCapabilitiesCodeSystemVersionFilter,
} from '@fhir-toolkit/r4b-types';

/**
 * TerminologyCapabilitiesCodeSystemVersionBuilder - Fluent builder for TerminologyCapabilitiesCodeSystemVersion backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const terminologyCapabilitiesCodeSystemVersion = new TerminologyCapabilitiesCodeSystemVersionBuilder()
 *   .setCode(value)
 *   .addLanguage({ ... })
 *   .build();
 */
export class TerminologyCapabilitiesCodeSystemVersionBuilder extends BackboneElementBuilder<TerminologyCapabilitiesCodeSystemVersion, ITerminologyCapabilitiesCodeSystemVersion> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Version identifier for this version
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set isDefault
   * If this is the default version for this code system
   */
  setIsDefault(isDefault: boolean): this {
    this.data.isDefault = isDefault;
    return this;
  }

  /**
   * Set compositional
   * If compositional grammar is supported
   */
  setCompositional(compositional: boolean): this {
    this.data.compositional = compositional;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add language
   * Language Displays supported
   */
  addLanguage(language: string): this {
    return this.addToArray('language', language);
  }

  /**
   * Add filter
   * Filter Properties supported
   */
  addFilter(filter: ITerminologyCapabilitiesCodeSystemVersionFilter): this {
    return this.addToArray('filter', filter);
  }

  /**
   * Add property
   * Properties supported for $lookup
   */
  addProperty(property: string): this {
    return this.addToArray('property', property);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TerminologyCapabilitiesCodeSystemVersion instance
   */
  build(): TerminologyCapabilitiesCodeSystemVersion {
    return new TerminologyCapabilitiesCodeSystemVersion(this.data);
  }

  /**
   * Build and validate the TerminologyCapabilitiesCodeSystemVersion instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TerminologyCapabilitiesCodeSystemVersion> {
    const terminologyCapabilitiesCodeSystemVersion = this.build();
    await terminologyCapabilitiesCodeSystemVersion.validateOrThrow();
    return terminologyCapabilitiesCodeSystemVersion;
  }
}
