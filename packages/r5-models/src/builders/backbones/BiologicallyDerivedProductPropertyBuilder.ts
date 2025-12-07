import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { BiologicallyDerivedProductProperty } from '../../models/backbones/BiologicallyDerivedProductProperty.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  IBiologicallyDerivedProductProperty,
  ICodeableConcept,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
} from '@fhir-toolkit/r5-types';

/**
 * BiologicallyDerivedProductPropertyBuilder - Fluent builder for BiologicallyDerivedProductProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const biologicallyDerivedProductProperty = new BiologicallyDerivedProductPropertyBuilder()
 *   .setType(value)
 *   .build();
 */
export class BiologicallyDerivedProductPropertyBuilder extends BackboneElementBuilder<BiologicallyDerivedProductProperty, IBiologicallyDerivedProductProperty> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * Code that specifies the property
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type (valueBoolean, valueInteger, valueCodeableConcept, valuePeriod, valueQuantity, valueRange, valueRatio, valueString, valueAttachment)
   * @param type - 'Boolean' | 'Integer' | 'CodeableConcept' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'String' | 'Attachment'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('Boolean', value)
   */
  setValue<T extends 'Boolean' | 'Integer' | 'CodeableConcept' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'String' | 'Attachment'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IBiologicallyDerivedProductProperty;
    const otherKeys: (keyof IBiologicallyDerivedProductProperty)[] = [];
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IBiologicallyDerivedProductProperty);
      otherKeys.push('_valueBoolean' as keyof IBiologicallyDerivedProductProperty);
    }
    if (type !== 'Integer') {
      otherKeys.push('valueInteger' as keyof IBiologicallyDerivedProductProperty);
      otherKeys.push('_valueInteger' as keyof IBiologicallyDerivedProductProperty);
    }
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IBiologicallyDerivedProductProperty);
      otherKeys.push('_valueCodeableConcept' as keyof IBiologicallyDerivedProductProperty);
    }
    if (type !== 'Period') {
      otherKeys.push('valuePeriod' as keyof IBiologicallyDerivedProductProperty);
      otherKeys.push('_valuePeriod' as keyof IBiologicallyDerivedProductProperty);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IBiologicallyDerivedProductProperty);
      otherKeys.push('_valueQuantity' as keyof IBiologicallyDerivedProductProperty);
    }
    if (type !== 'Range') {
      otherKeys.push('valueRange' as keyof IBiologicallyDerivedProductProperty);
      otherKeys.push('_valueRange' as keyof IBiologicallyDerivedProductProperty);
    }
    if (type !== 'Ratio') {
      otherKeys.push('valueRatio' as keyof IBiologicallyDerivedProductProperty);
      otherKeys.push('_valueRatio' as keyof IBiologicallyDerivedProductProperty);
    }
    if (type !== 'String') {
      otherKeys.push('valueString' as keyof IBiologicallyDerivedProductProperty);
      otherKeys.push('_valueString' as keyof IBiologicallyDerivedProductProperty);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IBiologicallyDerivedProductProperty);
      otherKeys.push('_valueAttachment' as keyof IBiologicallyDerivedProductProperty);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BiologicallyDerivedProductProperty instance
   */
  build(): BiologicallyDerivedProductProperty {
    return new BiologicallyDerivedProductProperty(this.data);
  }

  /**
   * Build and validate the BiologicallyDerivedProductProperty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BiologicallyDerivedProductProperty> {
    const biologicallyDerivedProductProperty = this.build();
    await biologicallyDerivedProductProperty.validateOrThrow();
    return biologicallyDerivedProductProperty;
  }
}
