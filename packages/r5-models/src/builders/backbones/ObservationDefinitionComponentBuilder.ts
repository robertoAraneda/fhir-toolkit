import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ObservationDefinitionComponent } from '../../models/backbones/ObservationDefinitionComponent.js';
import type {
  ICodeableConcept,
  ICoding,
  IObservationDefinitionComponent,
  IObservationDefinitionQualifiedValue,
  ObservationDataTypeType,
} from '@fhir-toolkit/r5-types';

/**
 * ObservationDefinitionComponentBuilder - Fluent builder for ObservationDefinitionComponent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const observationDefinitionComponent = new ObservationDefinitionComponentBuilder()
 *   .setCode(value)
 *   .addPermittedDataType({ ... })
 *   .build();
 */
export class ObservationDefinitionComponentBuilder extends BackboneElementBuilder<ObservationDefinitionComponent, IObservationDefinitionComponent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Type of observation
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add permittedDataType
   * Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period
   */
  addPermittedDataType(permittedDataType: ObservationDataTypeType): this {
    return this.addToArray('permittedDataType', permittedDataType);
  }

  /**
   * Add permittedUnit
   * Unit for quantitative results
   */
  addPermittedUnit(permittedUnit: ICoding): this {
    return this.addToArray('permittedUnit', permittedUnit);
  }

  /**
   * Add qualifiedValue
   * Set of qualified values for observation results
   */
  addQualifiedValue(qualifiedValue: IObservationDefinitionQualifiedValue): this {
    return this.addToArray('qualifiedValue', qualifiedValue);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ObservationDefinitionComponent instance
   */
  build(): ObservationDefinitionComponent {
    return new ObservationDefinitionComponent(this.data);
  }

  /**
   * Build and validate the ObservationDefinitionComponent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ObservationDefinitionComponent> {
    const observationDefinitionComponent = this.build();
    await observationDefinitionComponent.validateOrThrow();
    return observationDefinitionComponent;
  }
}
