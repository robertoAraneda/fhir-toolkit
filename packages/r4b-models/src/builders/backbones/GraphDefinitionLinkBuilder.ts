import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { GraphDefinitionLink } from '../../models/backbones/GraphDefinitionLink.js';
import type {
  IGraphDefinitionLink,
  IGraphDefinitionLinkTarget,
} from '@fhir-toolkit/r4b-types';

/**
 * GraphDefinitionLinkBuilder - Fluent builder for GraphDefinitionLink backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const graphDefinitionLink = new GraphDefinitionLinkBuilder()
 *   .setPath(value)
 *   .addTarget({ ... })
 *   .build();
 */
export class GraphDefinitionLinkBuilder extends BackboneElementBuilder<GraphDefinitionLink, IGraphDefinitionLink> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

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
   * Set description
   * Why this link is specified
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add target
   * Potential target for the link
   */
  addTarget(target: IGraphDefinitionLinkTarget): this {
    return this.addToArray('target', target);
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
