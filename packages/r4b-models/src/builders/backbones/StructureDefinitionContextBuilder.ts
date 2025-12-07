import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { StructureDefinitionContext } from '../../models/backbones/StructureDefinitionContext.js';
import type {
  ExtensionContextTypeType,
  IStructureDefinitionContext,
} from '@fhir-toolkit/r4b-types';

/**
 * StructureDefinitionContextBuilder - Fluent builder for StructureDefinitionContext backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const structureDefinitionContext = new StructureDefinitionContextBuilder()
 *   .setType(value)
 *   .build();
 */
export class StructureDefinitionContextBuilder extends BackboneElementBuilder<StructureDefinitionContext, IStructureDefinitionContext> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * fhirpath | element | extension
   */
  setType(type: ExtensionContextTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set expression
   * Where the extension can be used in instances
   */
  setExpression(expression: string): this {
    this.data.expression = expression;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the StructureDefinitionContext instance
   */
  build(): StructureDefinitionContext {
    return new StructureDefinitionContext(this.data);
  }

  /**
   * Build and validate the StructureDefinitionContext instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<StructureDefinitionContext> {
    const structureDefinitionContext = this.build();
    await structureDefinitionContext.validateOrThrow();
    return structureDefinitionContext;
  }
}
