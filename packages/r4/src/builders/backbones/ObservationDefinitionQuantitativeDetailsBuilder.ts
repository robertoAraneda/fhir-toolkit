import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ObservationDefinitionQuantitativeDetails } from '../../models/backbones/ObservationDefinitionQuantitativeDetails.js';
import type {
  ICodeableConcept,
  IObservationDefinitionQuantitativeDetails,
} from '@fhir-toolkit/r4-types';

/**
 * ObservationDefinitionQuantitativeDetailsBuilder - Fluent builder for ObservationDefinitionQuantitativeDetails backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const observationDefinitionQuantitativeDetails = new ObservationDefinitionQuantitativeDetailsBuilder()
 *   .setCustomaryUnit(value)
 *   .build();
 */
export class ObservationDefinitionQuantitativeDetailsBuilder extends BackboneElementBuilder<ObservationDefinitionQuantitativeDetails, IObservationDefinitionQuantitativeDetails> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set customaryUnit
   * Customary unit for quantitative results
   */
  setCustomaryUnit(customaryUnit: ICodeableConcept): this {
    this.data.customaryUnit = customaryUnit;
    return this;
  }

  /**
   * Set unit
   * SI unit for quantitative results
   */
  setUnit(unit: ICodeableConcept): this {
    this.data.unit = unit;
    return this;
  }

  /**
   * Set conversionFactor
   * SI to Customary unit conversion factor
   */
  setConversionFactor(conversionFactor: number): this {
    this.data.conversionFactor = conversionFactor;
    return this;
  }

  /**
   * Set decimalPrecision
   * Decimal precision of observation quantitative results
   */
  setDecimalPrecision(decimalPrecision: number): this {
    this.data.decimalPrecision = decimalPrecision;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ObservationDefinitionQuantitativeDetails instance
   */
  build(): ObservationDefinitionQuantitativeDetails {
    return new ObservationDefinitionQuantitativeDetails(this.data);
  }

  /**
   * Build and validate the ObservationDefinitionQuantitativeDetails instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ObservationDefinitionQuantitativeDetails> {
    const observationDefinitionQuantitativeDetails = this.build();
    await observationDefinitionQuantitativeDetails.validateOrThrow();
    return observationDefinitionQuantitativeDetails;
  }
}
