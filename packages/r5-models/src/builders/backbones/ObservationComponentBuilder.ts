import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ObservationComponent } from '../../models/backbones/ObservationComponent.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICodeableConcept,
  IObservationComponent,
  IObservationReferenceRange,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  IReference,
  ISampledData,
} from '@fhir-toolkit/r5-types';

/**
 * ObservationComponentBuilder - Fluent builder for ObservationComponent backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const observationComponent = new ObservationComponentBuilder()
 *   .setCode(value)
 *   .addInterpretation({ ... })
 *   .build();
 */
export class ObservationComponentBuilder extends BackboneElementBuilder<ObservationComponent, IObservationComponent> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set code
   * Type of component observation (code / type)
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set dataAbsentReason
   * Why the component result is missing
   */
  setDataAbsentReason(dataAbsentReason: ICodeableConcept): this {
    this.data.dataAbsentReason = dataAbsentReason;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueInteger, valueRange, valueRatio, valueSampledData, valueTime, valueDateTime, valuePeriod, valueAttachment, valueReference)
   * @param type - 'Quantity' | 'CodeableConcept' | 'String' | 'Boolean' | 'Integer' | 'Range' | 'Ratio' | 'SampledData' | 'Time' | 'DateTime' | 'Period' | 'Attachment' | 'Reference'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Quantity', value)
   */
  setValue<T extends 'Quantity' | 'CodeableConcept' | 'String' | 'Boolean' | 'Integer' | 'Range' | 'Ratio' | 'SampledData' | 'Time' | 'DateTime' | 'Period' | 'Attachment' | 'Reference'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IObservationComponent;
    const otherKeys: (keyof IObservationComponent)[] = [];
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IObservationComponent);
      otherKeys.push('_valueQuantity' as keyof IObservationComponent);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IObservationComponent);
      otherKeys.push('_valueCodeableConcept' as keyof IObservationComponent);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IObservationComponent);
      otherKeys.push('_valueString' as keyof IObservationComponent);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IObservationComponent);
      otherKeys.push('_valueBoolean' as keyof IObservationComponent);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IObservationComponent);
      otherKeys.push('_valueInteger' as keyof IObservationComponent);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IObservationComponent);
      otherKeys.push('_valueRange' as keyof IObservationComponent);
    }
    if (type !== 'Ratio') {
      otherKeys.push('valueRatio' as keyof IObservationComponent);
      otherKeys.push('_valueRatio' as keyof IObservationComponent);
    }
    if (type !== 'SampledData') {
      otherKeys.push('valueSampledData' as keyof IObservationComponent);
      otherKeys.push('_valueSampledData' as keyof IObservationComponent);
    }
    if (type !== 'Time') {
      otherKeys.push('valueTime' as keyof IObservationComponent);
      otherKeys.push('_valueTime' as keyof IObservationComponent);
    }
    if (type !== 'DateTime') {
      otherKeys.push('valueDateTime' as keyof IObservationComponent);
      otherKeys.push('_valueDateTime' as keyof IObservationComponent);
    }
    if (type !== 'Period') {
      otherKeys.push('valuePeriod' as keyof IObservationComponent);
      otherKeys.push('_valuePeriod' as keyof IObservationComponent);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IObservationComponent);
      otherKeys.push('_valueAttachment' as keyof IObservationComponent);
    }
    if (type !== 'Reference') {
      otherKeys.push('valueReference' as keyof IObservationComponent);
      otherKeys.push('_valueReference' as keyof IObservationComponent);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add interpretation
   * High, low, normal, etc
   */
  addInterpretation(interpretation: ICodeableConcept): this {
    return this.addToArray('interpretation', interpretation);
  }

  /**
   * Add referenceRange
   * Provides guide for interpretation of component result
   */
  addReferenceRange(referenceRange: IObservationReferenceRange): this {
    return this.addToArray('referenceRange', referenceRange);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ObservationComponent instance
   */
  build(): ObservationComponent {
    return new ObservationComponent(this.data);
  }

  /**
   * Build and validate the ObservationComponent instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ObservationComponent> {
    const observationComponent = this.build();
    await observationComponent.validateOrThrow();
    return observationComponent;
  }
}
