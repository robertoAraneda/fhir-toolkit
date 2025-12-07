import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Parameters } from '../../models/resources/Parameters.js';
import type {
  IParameters,
  IParametersParameter,
} from '@fhir-toolkit/r4-types';

/**
 * ParametersBuilder - Fluent builder for Parameters resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const parameters = new ParametersBuilder()
 *   .setId('123')
 *   .addParameter({ ... })
 *   .build();
 */
export class ParametersBuilder extends DomainResourceBuilder<Parameters, IParameters> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add parameter
   * Operation Parameter
   */
  addParameter(parameter: IParametersParameter): this {
    return this.addToArray('parameter', parameter);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Parameters instance
   */
  build(): Parameters {
    return new Parameters(this.data);
  }

  /**
   * Build and validate the Parameters instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Parameters> {
    const parameters = this.build();
    await parameters.validateOrThrow();
    return parameters;
  }
}
