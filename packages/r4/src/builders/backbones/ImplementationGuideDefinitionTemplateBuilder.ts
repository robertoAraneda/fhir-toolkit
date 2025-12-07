import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImplementationGuideDefinitionTemplate } from '../../models/backbones/ImplementationGuideDefinitionTemplate.js';
import type {
  IImplementationGuideDefinitionTemplate,
} from '@fhir-toolkit/r4-types';

/**
 * ImplementationGuideDefinitionTemplateBuilder - Fluent builder for ImplementationGuideDefinitionTemplate backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const implementationGuideDefinitionTemplate = new ImplementationGuideDefinitionTemplateBuilder()
 *   .setCode(value)
 *   .build();
 */
export class ImplementationGuideDefinitionTemplateBuilder extends BackboneElementBuilder<ImplementationGuideDefinitionTemplate, IImplementationGuideDefinitionTemplate> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Type of template specified
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set source
   * The source location for the template
   */
  setSource(source: string): this {
    this.data.source = source;
    return this;
  }

  /**
   * Set scope
   * The scope in which the template applies
   */
  setScope(scope: string): this {
    this.data.scope = scope;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImplementationGuideDefinitionTemplate instance
   */
  build(): ImplementationGuideDefinitionTemplate {
    return new ImplementationGuideDefinitionTemplate(this.data);
  }

  /**
   * Build and validate the ImplementationGuideDefinitionTemplate instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImplementationGuideDefinitionTemplate> {
    const implementationGuideDefinitionTemplate = this.build();
    await implementationGuideDefinitionTemplate.validateOrThrow();
    return implementationGuideDefinitionTemplate;
  }
}
