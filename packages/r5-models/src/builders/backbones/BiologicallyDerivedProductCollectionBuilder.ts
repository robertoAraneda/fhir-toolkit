import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { BiologicallyDerivedProductCollection } from '../../models/backbones/BiologicallyDerivedProductCollection.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IBiologicallyDerivedProductCollection,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * BiologicallyDerivedProductCollectionBuilder - Fluent builder for BiologicallyDerivedProductCollection backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const biologicallyDerivedProductCollection = new BiologicallyDerivedProductCollectionBuilder()
 *   .setCollector(value)
 *   .build();
 */
export class BiologicallyDerivedProductCollectionBuilder extends BackboneElementBuilder<BiologicallyDerivedProductCollection, IBiologicallyDerivedProductCollection> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set collector
   * Individual performing collection
   */
  setCollector(collector: IReference<'Practitioner' | 'PractitionerRole'>): this {
    this.data.collector = collector;
    return this;
  }

  /**
   * Set source
   * The patient who underwent the medical procedure to collect the product or the organization that facilitated the collection
   */
  setSource(source: IReference<'Patient' | 'Organization'>): this {
    this.data.source = source;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set collected choice type (collectedDateTime, collectedPeriod)
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
    const key = `collected${type}` as keyof IBiologicallyDerivedProductCollection;
    const otherKeys: (keyof IBiologicallyDerivedProductCollection)[] = [];
    if (type !== 'DateTime') {
      otherKeys.push('collectedDateTime' as keyof IBiologicallyDerivedProductCollection);
      otherKeys.push('_collectedDateTime' as keyof IBiologicallyDerivedProductCollection);
    }
    if (type !== 'Period') {
      otherKeys.push('collectedPeriod' as keyof IBiologicallyDerivedProductCollection);
      otherKeys.push('_collectedPeriod' as keyof IBiologicallyDerivedProductCollection);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BiologicallyDerivedProductCollection instance
   */
  build(): BiologicallyDerivedProductCollection {
    return new BiologicallyDerivedProductCollection(this.data);
  }

  /**
   * Build and validate the BiologicallyDerivedProductCollection instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BiologicallyDerivedProductCollection> {
    const biologicallyDerivedProductCollection = this.build();
    await biologicallyDerivedProductCollection.validateOrThrow();
    return biologicallyDerivedProductCollection;
  }
}
