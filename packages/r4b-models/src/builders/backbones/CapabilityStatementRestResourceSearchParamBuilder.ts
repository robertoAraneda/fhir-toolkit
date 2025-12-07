import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { CapabilityStatementRestResourceSearchParam } from '../../models/backbones/CapabilityStatementRestResourceSearchParam.js';
import type {
  ICapabilityStatementRestResourceSearchParam,
  SearchParamTypeType,
} from '@fhir-toolkit/r4b-types';

/**
 * CapabilityStatementRestResourceSearchParamBuilder - Fluent builder for CapabilityStatementRestResourceSearchParam backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const capabilityStatementRestResourceSearchParam = new CapabilityStatementRestResourceSearchParamBuilder()
 *   .setName(value)
 *   .build();
 */
export class CapabilityStatementRestResourceSearchParamBuilder extends BackboneElementBuilder<CapabilityStatementRestResourceSearchParam, ICapabilityStatementRestResourceSearchParam> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Name of search parameter
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set definition
   * Source of definition for parameter
   */
  setDefinition(definition: string): this {
    this.data.definition = definition;
    return this;
  }

  /**
   * Set type
   * number | date | string | token | reference | composite | quantity | uri | special
   */
  setType(type: SearchParamTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set documentation
   * Server-specific usage
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CapabilityStatementRestResourceSearchParam instance
   */
  build(): CapabilityStatementRestResourceSearchParam {
    return new CapabilityStatementRestResourceSearchParam(this.data);
  }

  /**
   * Build and validate the CapabilityStatementRestResourceSearchParam instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CapabilityStatementRestResourceSearchParam> {
    const capabilityStatementRestResourceSearchParam = this.build();
    await capabilityStatementRestResourceSearchParam.validateOrThrow();
    return capabilityStatementRestResourceSearchParam;
  }
}
