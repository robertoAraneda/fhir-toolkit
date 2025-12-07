import { ElementBuilder } from '../base/ElementBuilder.js';
import { ParameterDefinition } from '../../models/datatypes/ParameterDefinition.js';
import type {
  IParameterDefinition,
  OperationParameterUseType,
} from '@fhir-toolkit/r4b-types';

/**
 * ParameterDefinitionBuilder - Fluent builder for ParameterDefinition datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const parameterDefinition = new ParameterDefinitionBuilder()
 *   .setName(value)
 *   .build();
 */
export class ParameterDefinitionBuilder extends ElementBuilder<ParameterDefinition, IParameterDefinition> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set name
   * Name used to access the parameter value
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
   * Minimum cardinality
   */
  setMin(min: number): this {
    this.data.min = min;
    return this;
  }

  /**
   * Set max
   * Maximum cardinality (a number of *)
   */
  setMax(max: string): this {
    this.data.max = max;
    return this;
  }

  /**
   * Set documentation
   * A brief description of the parameter
   */
  setDocumentation(documentation: string): this {
    this.data.documentation = documentation;
    return this;
  }

  /**
   * Set type
   * What type of value
   */
  setType(type: string): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set profile
   * What profile the value is expected to be
   */
  setProfile(profile: string): this {
    this.data.profile = profile;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ParameterDefinition instance
   */
  build(): ParameterDefinition {
    return new ParameterDefinition(this.data);
  }

  /**
   * Build and validate the ParameterDefinition instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ParameterDefinition> {
    const parameterDefinition = this.build();
    await parameterDefinition.validateOrThrow();
    return parameterDefinition;
  }
}
