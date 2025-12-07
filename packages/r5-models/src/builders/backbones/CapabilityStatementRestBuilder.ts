import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CapabilityStatementRest } from '../../models/backbones/CapabilityStatementRest.js';
import type {
  ICapabilityStatementRest,
  ICapabilityStatementRestInteraction,
  ICapabilityStatementRestResource,
  ICapabilityStatementRestResourceOperation,
  ICapabilityStatementRestResourceSearchParam,
  ICapabilityStatementRestSecurity,
  RestfulCapabilityModeType,
} from '@fhir-toolkit/r5-types';

/**
 * CapabilityStatementRestBuilder - Fluent builder for CapabilityStatementRest backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const capabilityStatementRest = new CapabilityStatementRestBuilder()
 *   .setMode(value)
 *   .addResource({ ... })
 *   .build();
 */
export class CapabilityStatementRestBuilder extends BackboneElementBuilder<CapabilityStatementRest, ICapabilityStatementRest> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set mode
   * client | server
   */
  setMode(mode: RestfulCapabilityModeType): this {
    this.data.mode = mode;
    return this;
  }

  /**
   * Set documentation
   * General description of implementation
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  /**
   * Set security
   * Information about security of implementation
   */
  setSecurity(security: ICapabilityStatementRestSecurity): this {
    this.data.security = security;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add resource
   * Resource served on the REST interface
   */
  addResource(resource: ICapabilityStatementRestResource): this {
    return this.addToArray('resource', resource);
  }

  /**
   * Add interaction
   * What operations are supported?
   */
  addInteraction(interaction: ICapabilityStatementRestInteraction): this {
    return this.addToArray('interaction', interaction);
  }

  /**
   * Add searchParam
   * Search parameters for searching all resources
   */
  addSearchParam(searchParam: ICapabilityStatementRestResourceSearchParam): this {
    return this.addToArray('searchParam', searchParam);
  }

  /**
   * Add operation
   * Definition of a system level operation
   */
  addOperation(operation: ICapabilityStatementRestResourceOperation): this {
    return this.addToArray('operation', operation);
  }

  /**
   * Add compartment
   * Compartments served/used by system
   */
  addCompartment(compartment: string): this {
    return this.addToArray('compartment', compartment);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CapabilityStatementRest instance
   */
  build(): CapabilityStatementRest {
    return new CapabilityStatementRest(this.data);
  }

  /**
   * Build and validate the CapabilityStatementRest instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CapabilityStatementRest> {
    const capabilityStatementRest = this.build();
    await capabilityStatementRest.validateOrThrow();
    return capabilityStatementRest;
  }
}
