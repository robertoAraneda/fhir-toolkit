import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { OperationDefinitionParameter } from '../../models/backbones/OperationDefinitionParameter.js';
import type {
  IOperationDefinitionParameter,
  IOperationDefinitionParameterBinding,
  IOperationDefinitionParameterReferencedFrom,
  OperationParameterScopeType,
  OperationParameterUseType,
  SearchParamTypeType,
} from '@fhir-toolkit/r5-types';

/**
 * OperationDefinitionParameterBuilder - Fluent builder for OperationDefinitionParameter backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const operationDefinitionParameter = new OperationDefinitionParameterBuilder()
 *   .setName(value)
 *   .addScope({ ... })
 *   .build();
 */
export class OperationDefinitionParameterBuilder extends BackboneElementBuilder<OperationDefinitionParameter, IOperationDefinitionParameter> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Name in Parameters.parameter.name or in URL
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set use
   * in | out
   */
  setUse(use: OperationParameterUseType): this {
    this.data.use = use;
    return this;
  }

  /**
   * Set min
   * Minimum Cardinality
   */
  setMin(min: number): this {
    this.data.min = min;
    return this;
  }

  /**
   * Set max
   * Maximum Cardinality (a number or *)
   */
  setMax(max: string): this {
    this.data.max = max;
    return this;
  }

  /**
   * Set documentation
   * Description of meaning/use
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  /**
   * Set type
   * What type this parameter has
   */
  setType(type: string): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set searchType
   * number | date | string | token | reference | composite | quantity | uri | special
   */
  setSearchType(searchType: SearchParamTypeType): this {
    this.data.searchType = searchType;
    return this;
  }

  /**
   * Set binding
   * ValueSet details if this is coded
   */
  setBinding(binding: IOperationDefinitionParameterBinding): this {
    this.data.binding = binding;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add scope
   * instance | type | system
   */
  addScope(scope: OperationParameterScopeType): this {
    return this.addToArray('scope', scope);
  }

  /**
   * Add allowedType
   * Allowed sub-type this parameter can have (if type is abstract)
   */
  addAllowedType(allowedType: string): this {
    return this.addToArray('allowedType', allowedType);
  }

  /**
   * Add targetProfile
   * If type is Reference | canonical, allowed targets. If type is 'Resource', then this constrains the allowed resource types
   */
  addTargetProfile(targetProfile: string): this {
    return this.addToArray('targetProfile', targetProfile);
  }

  /**
   * Add referencedFrom
   * References to this parameter
   */
  addReferencedFrom(referencedFrom: IOperationDefinitionParameterReferencedFrom): this {
    return this.addToArray('referencedFrom', referencedFrom);
  }

  /**
   * Add part
   * Parts of a nested Parameter
   */
  addPart(part: IOperationDefinitionParameter): this {
    return this.addToArray('part', part);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the OperationDefinitionParameter instance
   */
  build(): OperationDefinitionParameter {
    return new OperationDefinitionParameter(this.data);
  }

  /**
   * Build and validate the OperationDefinitionParameter instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<OperationDefinitionParameter> {
    const operationDefinitionParameter = this.build();
    await operationDefinitionParameter.validateOrThrow();
    return operationDefinitionParameter;
  }
}
