import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImplementationGuideDefinition } from '../../models/backbones/ImplementationGuideDefinition.js';
import type {
  IImplementationGuideDefinition,
  IImplementationGuideDefinitionGrouping,
  IImplementationGuideDefinitionPage,
  IImplementationGuideDefinitionParameter,
  IImplementationGuideDefinitionResource,
  IImplementationGuideDefinitionTemplate,
} from '@fhir-toolkit/r4b-types';

/**
 * ImplementationGuideDefinitionBuilder - Fluent builder for ImplementationGuideDefinition backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const implementationGuideDefinition = new ImplementationGuideDefinitionBuilder()
 *   .setPage(value)
 *   .addGrouping({ ... })
 *   .build();
 */
export class ImplementationGuideDefinitionBuilder extends BackboneElementBuilder<ImplementationGuideDefinition, IImplementationGuideDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set page
   * Page/Section in the Guide
   */
  setPage(page: IImplementationGuideDefinitionPage): this {
    this.data.page = page;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add grouping
   * Grouping used to present related resources in the IG
   */
  addGrouping(grouping: IImplementationGuideDefinitionGrouping): this {
    return this.addToArray('grouping', grouping);
  }

  /**
   * Add resource
   * Resource in the implementation guide
   */
  addResource(resource: IImplementationGuideDefinitionResource): this {
    return this.addToArray('resource', resource);
  }

  /**
   * Add parameter
   * Defines how IG is built by tools
   */
  addParameter(parameter: IImplementationGuideDefinitionParameter): this {
    return this.addToArray('parameter', parameter);
  }

  /**
   * Add template
   * A template for building resources
   */
  addTemplate(template: IImplementationGuideDefinitionTemplate): this {
    return this.addToArray('template', template);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImplementationGuideDefinition instance
   */
  build(): ImplementationGuideDefinition {
    return new ImplementationGuideDefinition(this.data);
  }

  /**
   * Build and validate the ImplementationGuideDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImplementationGuideDefinition> {
    const implementationGuideDefinition = this.build();
    await implementationGuideDefinition.validateOrThrow();
    return implementationGuideDefinition;
  }
}
