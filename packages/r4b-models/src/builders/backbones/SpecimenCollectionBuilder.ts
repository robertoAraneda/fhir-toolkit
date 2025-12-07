import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { SpecimenCollection } from '../../models/backbones/SpecimenCollection.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IDuration,
  IPeriod,
  IQuantity,
  IReference,
  ISpecimenCollection,
} from '@fhir-toolkit/r4b-types';

/**
 * SpecimenCollectionBuilder - Fluent builder for SpecimenCollection backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const specimenCollection = new SpecimenCollectionBuilder()
 *   .setCollector(value)
 *   .build();
 */
export class SpecimenCollectionBuilder extends BackboneElementBuilder<SpecimenCollection, ISpecimenCollection> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set collector
   * Who collected the specimen
   */
  setCollector(collector: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.collector = collector;
    return this;
  }

  /**
   * Set duration
   * How long it took to collect specimen
   */
  setDuration(duration: IDuration): this {
    this.data.duration = duration;
    return this;
  }

  /**
   * Set quantity
   * The quantity of specimen collected
   */
  setQuantity(quantity: IQuantity): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set method
   * Technique used to perform collection
   */
  setMethod(method: ICodeableConcept): this {
    this.data.method = method;
    return this;
  }

  /**
   * Set bodySite
   * Anatomical collection site
   */
  setBodySite(bodySite: ICodeableConcept): this {
    this.data.bodySite = bodySite;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set collected choice type
   * @param type - 'DateTime' | 'Period'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setCollected('DateTime', value)
   */
  setCollected<T extends 'DateTime' | 'Period'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `collected${type}` as keyof ISpecimenCollection;
    const otherKeys: (keyof ISpecimenCollection)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('collectedDateTime' as keyof ISpecimenCollection);
      otherKeys.push('_collectedDateTime' as keyof ISpecimenCollection);
    }
    if (type !== 'Period') {
      otherKeys.push('collectedPeriod' as keyof ISpecimenCollection);
      otherKeys.push('_collectedPeriod' as keyof ISpecimenCollection);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  /**
   * Set fastingStatus choice type
   * @param type - 'CodeableConcept' | 'Duration'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setFastingStatus('CodeableConcept', value)
   */
  setFastingStatus<T extends 'CodeableConcept' | 'Duration'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `fastingStatus${type}` as keyof ISpecimenCollection;
    const otherKeys: (keyof ISpecimenCollection)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('fastingStatusCodeableConcept' as keyof ISpecimenCollection);
      otherKeys.push('_fastingStatusCodeableConcept' as keyof ISpecimenCollection);
    }
    if (type !== 'Duration') {
      otherKeys.push('fastingStatusDuration' as keyof ISpecimenCollection);
      otherKeys.push('_fastingStatusDuration' as keyof ISpecimenCollection);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the SpecimenCollection instance
   */
  build(): SpecimenCollection {
    return new SpecimenCollection(this.data);
  }

  /**
   * Build and validate the SpecimenCollection instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<SpecimenCollection> {
    const specimenCollection = this.build();
    await specimenCollection.validateOrThrow();
    return specimenCollection;
  }
}
