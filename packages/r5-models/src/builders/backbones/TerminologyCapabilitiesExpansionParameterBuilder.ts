import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { TerminologyCapabilitiesExpansionParameter } from '../../models/backbones/TerminologyCapabilitiesExpansionParameter.js';
import type {
  ITerminologyCapabilitiesExpansionParameter,
} from '@fhir-toolkit/r5-types';

/**
 * TerminologyCapabilitiesExpansionParameterBuilder - Fluent builder for TerminologyCapabilitiesExpansionParameter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const terminologyCapabilitiesExpansionParameter = new TerminologyCapabilitiesExpansionParameterBuilder()
 *   .setName(value)
 *   .build();
 */
export class TerminologyCapabilitiesExpansionParameterBuilder extends BackboneElementBuilder<TerminologyCapabilitiesExpansionParameter, ITerminologyCapabilitiesExpansionParameter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Name of the supported expansion parameter
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set documentation
   * Description of support for parameter
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the TerminologyCapabilitiesExpansionParameter instance
   */
  build(): TerminologyCapabilitiesExpansionParameter {
    return new TerminologyCapabilitiesExpansionParameter(this.data);
  }

  /**
   * Build and validate the TerminologyCapabilitiesExpansionParameter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<TerminologyCapabilitiesExpansionParameter> {
    const terminologyCapabilitiesExpansionParameter = this.build();
    await terminologyCapabilitiesExpansionParameter.validateOrThrow();
    return terminologyCapabilitiesExpansionParameter;
  }
}
