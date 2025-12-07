import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { GraphDefinitionLink } from '../../models/backbones/GraphDefinitionLink.js';
import type {
  IGraphDefinitionLink,
  IGraphDefinitionLinkCompartment,
} from '@fhir-toolkit/r5-types';

/**
 * GraphDefinitionLinkBuilder - Fluent builder for GraphDefinitionLink backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const graphDefinitionLink = new GraphDefinitionLinkBuilder()
 *   .setDescription(value)
 *   .addCompartment({ ... })
 *   .build();
 */
export class GraphDefinitionLinkBuilder extends BackboneElementBuilder<GraphDefinitionLink, IGraphDefinitionLink> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Why this link is specified
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set min
   * Minimum occurrences for this link
   */
  setMin(min: number): this {
    this.data.min = min;
    return this;
  }

  /**
   * Set max
   * Maximum occurrences for this link
   */
  setMax(max: string): this {
    this.data.max = max;
    return this;
  }

  /**
   * Set sourceId
   * Source Node for this link
   */
  setSourceId(sourceId: string): this {
    this.data.sourceId = sourceId;
    return this;
  }

  /**
   * Set path
   * Path in the resource that contains the link
   */
  setPath(path: string): this {
    this.data.path = path;
    return this;
  }

  /**
   * Set sliceName
   * Which slice (if profiled)
   */
  setSliceName(sliceName: string): this {
    this.data.sliceName = sliceName;
    return this;
  }

  /**
   * Set targetId
   * Target Node for this link
   */
  setTargetId(targetId: string): this {
    this.data.targetId = targetId;
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

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add compartment
   * Compartment Consistency Rules
   */
  addCompartment(compartment: IGraphDefinitionLinkCompartment): this {
    return this.addToArray('compartment', compartment);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the GraphDefinitionLink instance
   */
  build(): GraphDefinitionLink {
    return new GraphDefinitionLink(this.data);
  }

  /**
   * Build and validate the GraphDefinitionLink instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<GraphDefinitionLink> {
    const graphDefinitionLink = this.build();
    await graphDefinitionLink.validateOrThrow();
    return graphDefinitionLink;
  }
}
