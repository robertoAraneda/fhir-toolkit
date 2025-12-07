import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImplementationGuideDefinitionParameter } from '../../models/backbones/ImplementationGuideDefinitionParameter.js';
import type {
  ICoding,
  IImplementationGuideDefinitionParameter,
} from '@fhir-toolkit/r5-types';

/**
 * ImplementationGuideDefinitionParameterBuilder - Fluent builder for ImplementationGuideDefinitionParameter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const implementationGuideDefinitionParameter = new ImplementationGuideDefinitionParameterBuilder()
 *   .setCode(value)
 *   .build();
 */
export class ImplementationGuideDefinitionParameterBuilder extends BackboneElementBuilder<ImplementationGuideDefinitionParameter, IImplementationGuideDefinitionParameter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Code that identifies parameter
   */
  setCode(code: ICoding): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set value
   * Value for named type
   */
  setValue(value: string): this {
    this.data.value = value;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ImplementationGuideDefinitionParameter instance
   */
  build(): ImplementationGuideDefinitionParameter {
    return new ImplementationGuideDefinitionParameter(this.data);
  }

  /**
   * Build and validate the ImplementationGuideDefinitionParameter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ImplementationGuideDefinitionParameter> {
    const implementationGuideDefinitionParameter = this.build();
    await implementationGuideDefinitionParameter.validateOrThrow();
    return implementationGuideDefinitionParameter;
  }
}
