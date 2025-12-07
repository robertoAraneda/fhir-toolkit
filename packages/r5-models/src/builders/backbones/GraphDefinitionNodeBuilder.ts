import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { GraphDefinitionNode } from '../../models/backbones/GraphDefinitionNode.js';
import type {
  IGraphDefinitionNode,
  VersionIndependentResourceTypesAllType,
} from '@fhir-toolkit/r5-types';

/**
 * GraphDefinitionNodeBuilder - Fluent builder for GraphDefinitionNode backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const graphDefinitionNode = new GraphDefinitionNodeBuilder()
 *   .setNodeId(value)
 *   .build();
 */
export class GraphDefinitionNodeBuilder extends BackboneElementBuilder<GraphDefinitionNode, IGraphDefinitionNode> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set nodeId
   * Internal ID - target for link references
   */
  setNodeId(nodeId: string): this {
    this.data.nodeId = nodeId;
    return this;
  }

  /**
   * Set description
   * Why this node is specified
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set type
   * Type of resource this link refers to
   */
  setType(type: VersionIndependentResourceTypesAllType): this {
    this.data.type = type;
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
  // Build Methods
  // ============================================================================

  /**
   * Build the GraphDefinitionNode instance
   */
  build(): GraphDefinitionNode {
    return new GraphDefinitionNode(this.data);
  }

  /**
   * Build and validate the GraphDefinitionNode instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<GraphDefinitionNode> {
    const graphDefinitionNode = this.build();
    await graphDefinitionNode.validateOrThrow();
    return graphDefinitionNode;
  }
}
