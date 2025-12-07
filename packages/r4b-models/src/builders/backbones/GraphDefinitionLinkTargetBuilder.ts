import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { GraphDefinitionLinkTarget } from '../../models/backbones/GraphDefinitionLinkTarget.js';
import type {
  IGraphDefinitionLink,
  IGraphDefinitionLinkTarget,
  IGraphDefinitionLinkTargetCompartment,
} from '@fhir-toolkit/r4b-types';

/**
 * GraphDefinitionLinkTargetBuilder - Fluent builder for GraphDefinitionLinkTarget backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const graphDefinitionLinkTarget = new GraphDefinitionLinkTargetBuilder()
 *   .setType(value)
 *   .addCompartment({ ... })
 *   .build();
 */
export class GraphDefinitionLinkTargetBuilder extends BackboneElementBuilder<GraphDefinitionLinkTarget, IGraphDefinitionLinkTarget> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Type of resource this link refers to
   */
  setType(type: string): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set params
   * Criteria for reverse lookup
   */
  setParams(params: string): this {
    this.data.params = params;
    return this;
  }

  /**
   * Set profile
   * Profile for the target resource
   */
  setProfile(profile: string): this {
    this.data.profile = profile;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add compartment
   * Compartment Consistency Rules
   */
  addCompartment(compartment: IGraphDefinitionLinkTargetCompartment): this {
    return this.addToArray('compartment', compartment);
  }

  /**
   * Add link
   * Additional links from target resource
   */
  addLink(link: IGraphDefinitionLink): this {
    return this.addToArray('link', link);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the GraphDefinitionLinkTarget instance
   */
  build(): GraphDefinitionLinkTarget {
    return new GraphDefinitionLinkTarget(this.data);
  }

  /**
   * Build and validate the GraphDefinitionLinkTarget instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<GraphDefinitionLinkTarget> {
    const graphDefinitionLinkTarget = this.build();
    await graphDefinitionLinkTarget.validateOrThrow();
    return graphDefinitionLinkTarget;
  }
}
