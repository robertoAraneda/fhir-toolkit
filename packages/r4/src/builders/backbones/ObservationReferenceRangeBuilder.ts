import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ObservationReferenceRange } from '../../models/backbones/ObservationReferenceRange.js';
import type {
  ICodeableConcept,
  IObservationReferenceRange,
  IQuantity,
  IRange,
} from '@fhir-toolkit/r4-types';

/**
 * ObservationReferenceRangeBuilder - Fluent builder for ObservationReferenceRange backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const observationReferenceRange = new ObservationReferenceRangeBuilder()
 *   .setLow(value)
 *   .addAppliesTo({ ... })
 *   .build();
 */
export class ObservationReferenceRangeBuilder extends BackboneElementBuilder<ObservationReferenceRange, IObservationReferenceRange> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set low
   * Low Range, if relevant
   */
  setLow(low: IQuantity): this {
    this.data.low = low;
    return this;
  }

  /**
   * Set high
   * High Range, if relevant
   */
  setHigh(high: IQuantity): this {
    this.data.high = high;
    return this;
  }

  /**
   * Set type
   * Reference range qualifier
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set age
   * Applicable age range, if relevant
   */
  setAge(age: IRange): this {
    this.data.age = age;
    return this;
  }

  /**
   * Set text
   * Text based reference range in an observation
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add appliesTo
   * Reference range population
   */
  addAppliesTo(appliesTo: ICodeableConcept): this {
    return this.addToArray('appliesTo', appliesTo);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ObservationReferenceRange instance
   */
  build(): ObservationReferenceRange {
    return new ObservationReferenceRange(this.data);
  }

  /**
   * Build and validate the ObservationReferenceRange instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ObservationReferenceRange> {
    const observationReferenceRange = this.build();
    await observationReferenceRange.validateOrThrow();
    return observationReferenceRange;
  }
}
