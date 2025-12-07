import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { OperationDefinitionParameterReferencedFrom } from '../../models/backbones/OperationDefinitionParameterReferencedFrom.js';
import type {
  IOperationDefinitionParameterReferencedFrom,
} from '@fhir-toolkit/r4-types';

/**
 * OperationDefinitionParameterReferencedFromBuilder - Fluent builder for OperationDefinitionParameterReferencedFrom backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const operationDefinitionParameterReferencedFrom = new OperationDefinitionParameterReferencedFromBuilder()
 *   .setSource(value)
 *   .build();
 */
export class OperationDefinitionParameterReferencedFromBuilder extends BackboneElementBuilder<OperationDefinitionParameterReferencedFrom, IOperationDefinitionParameterReferencedFrom> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set source
   * Referencing parameter
   */
  setSource(source: string): this {
    this.data.source = source;
    return this;
  }

  /**
   * Set sourceId
   * Element id of reference
   */
  setSourceId(sourceId: string): this {
    this.data.sourceId = sourceId;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the OperationDefinitionParameterReferencedFrom instance
   */
  build(): OperationDefinitionParameterReferencedFrom {
    return new OperationDefinitionParameterReferencedFrom(this.data);
  }

  /**
   * Build and validate the OperationDefinitionParameterReferencedFrom instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<OperationDefinitionParameterReferencedFrom> {
    const operationDefinitionParameterReferencedFrom = this.build();
    await operationDefinitionParameterReferencedFrom.validateOrThrow();
    return operationDefinitionParameterReferencedFrom;
  }
}
