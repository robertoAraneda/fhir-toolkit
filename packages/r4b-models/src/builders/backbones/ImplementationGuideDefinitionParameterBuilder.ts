import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ImplementationGuideDefinitionParameter } from '../../models/backbones/ImplementationGuideDefinitionParameter.js';
import type {
  GuideParameterCodeType,
  IImplementationGuideDefinitionParameter,
} from '@fhir-toolkit/r4b-types';

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
   * apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template
   */
  setCode(code: GuideParameterCodeType): this {
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
