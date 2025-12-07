import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { ManufacturedItemDefinitionProperty } from '../../models/backbones/ManufacturedItemDefinitionProperty.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICodeableConcept,
  IManufacturedItemDefinitionProperty,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/**
 * ManufacturedItemDefinitionPropertyBuilder - Fluent builder for ManufacturedItemDefinitionProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const manufacturedItemDefinitionProperty = new ManufacturedItemDefinitionPropertyBuilder()
 *   .setType(value)
 *   .build();
 */
export class ManufacturedItemDefinitionPropertyBuilder extends BackboneElementBuilder<ManufacturedItemDefinitionProperty, IManufacturedItemDefinitionProperty> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * A code expressing the type of characteristic
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set value choice type
   * @param type - 'CodeableConcept' | 'Quantity' | 'Date' | 'Boolean' | 'Attachment'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setValue('CodeableConcept', value)
   */
  setValue<T extends 'CodeableConcept' | 'Quantity' | 'Date' | 'Boolean' | 'Attachment'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `value${type}` as keyof IManufacturedItemDefinitionProperty;
    const otherKeys: (keyof IManufacturedItemDefinitionProperty)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IManufacturedItemDefinitionProperty);
      otherKeys.push('_valueCodeableConcept' as keyof IManufacturedItemDefinitionProperty);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IManufacturedItemDefinitionProperty);
      otherKeys.push('_valueQuantity' as keyof IManufacturedItemDefinitionProperty);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof IManufacturedItemDefinitionProperty);
      otherKeys.push('_valueDate' as keyof IManufacturedItemDefinitionProperty);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IManufacturedItemDefinitionProperty);
      otherKeys.push('_valueBoolean' as keyof IManufacturedItemDefinitionProperty);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IManufacturedItemDefinitionProperty);
      otherKeys.push('_valueAttachment' as keyof IManufacturedItemDefinitionProperty);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ManufacturedItemDefinitionProperty instance
   */
  build(): ManufacturedItemDefinitionProperty {
    return new ManufacturedItemDefinitionProperty(this.data);
  }

  /**
   * Build and validate the ManufacturedItemDefinitionProperty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ManufacturedItemDefinitionProperty> {
    const manufacturedItemDefinitionProperty = this.build();
    await manufacturedItemDefinitionProperty.validateOrThrow();
    return manufacturedItemDefinitionProperty;
  }
}
