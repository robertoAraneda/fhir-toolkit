import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CapabilityStatementRestResourceOperation } from '../../models/backbones/CapabilityStatementRestResourceOperation.js';
import type {
  ICapabilityStatementRestResourceOperation,
} from '@fhir-toolkit/r5-types';

/**
 * CapabilityStatementRestResourceOperationBuilder - Fluent builder for CapabilityStatementRestResourceOperation backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const capabilityStatementRestResourceOperation = new CapabilityStatementRestResourceOperationBuilder()
 *   .setName(value)
 *   .build();
 */
export class CapabilityStatementRestResourceOperationBuilder extends BackboneElementBuilder<CapabilityStatementRestResourceOperation, ICapabilityStatementRestResourceOperation> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Name by which the operation/query is invoked
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set definition
   * The defined operation/query
   */
  setDefinition(definition: string): this {
    this.data.definition = definition;
    return this;
  }

  /**
   * Set documentation
   * Specific details about operation behavior
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CapabilityStatementRestResourceOperation instance
   */
  build(): CapabilityStatementRestResourceOperation {
    return new CapabilityStatementRestResourceOperation(this.data);
  }

  /**
   * Build and validate the CapabilityStatementRestResourceOperation instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CapabilityStatementRestResourceOperation> {
    const capabilityStatementRestResourceOperation = this.build();
    await capabilityStatementRestResourceOperation.validateOrThrow();
    return capabilityStatementRestResourceOperation;
  }
}
