import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CompartmentDefinitionResource } from '../../models/backbones/CompartmentDefinitionResource.js';
import type {
  ICompartmentDefinitionResource,
} from '@fhir-toolkit/r4-types';

/**
 * CompartmentDefinitionResourceBuilder - Fluent builder for CompartmentDefinitionResource backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const compartmentDefinitionResource = new CompartmentDefinitionResourceBuilder()
 *   .setCode(value)
 *   .addParam({ ... })
 *   .build();
 */
export class CompartmentDefinitionResourceBuilder extends BackboneElementBuilder<CompartmentDefinitionResource, ICompartmentDefinitionResource> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Name of resource type
   */
  setCode(code: string): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set documentation
   * Additional documentation about the resource and compartment
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add param
   * Search Parameter Name, or chained parameters
   */
  addParam(param: string): this {
    return this.addToArray('param', param);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CompartmentDefinitionResource instance
   */
  build(): CompartmentDefinitionResource {
    return new CompartmentDefinitionResource(this.data);
  }

  /**
   * Build and validate the CompartmentDefinitionResource instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CompartmentDefinitionResource> {
    const compartmentDefinitionResource = this.build();
    await compartmentDefinitionResource.validateOrThrow();
    return compartmentDefinitionResource;
  }
}
