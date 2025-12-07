import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PackagedProductDefinitionPackagingProperty } from '../../models/backbones/PackagedProductDefinitionPackagingProperty.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICodeableConcept,
  IPackagedProductDefinitionPackagingProperty,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/**
 * PackagedProductDefinitionPackagingPropertyBuilder - Fluent builder for PackagedProductDefinitionPackagingProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const packagedProductDefinitionPackagingProperty = new PackagedProductDefinitionPackagingPropertyBuilder()
 *   .setType(value)
 *   .build();
 */
export class PackagedProductDefinitionPackagingPropertyBuilder extends BackboneElementBuilder<PackagedProductDefinitionPackagingProperty, IPackagedProductDefinitionPackagingProperty> {
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
   * Set value choice type (valueCodeableConcept, valueQuantity, valueDate, valueBoolean, valueAttachment)
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
    const key = `value${type}` as keyof IPackagedProductDefinitionPackagingProperty;
    const otherKeys: (keyof IPackagedProductDefinitionPackagingProperty)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IPackagedProductDefinitionPackagingProperty);
      otherKeys.push('_valueCodeableConcept' as keyof IPackagedProductDefinitionPackagingProperty);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IPackagedProductDefinitionPackagingProperty);
      otherKeys.push('_valueQuantity' as keyof IPackagedProductDefinitionPackagingProperty);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof IPackagedProductDefinitionPackagingProperty);
      otherKeys.push('_valueDate' as keyof IPackagedProductDefinitionPackagingProperty);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IPackagedProductDefinitionPackagingProperty);
      otherKeys.push('_valueBoolean' as keyof IPackagedProductDefinitionPackagingProperty);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IPackagedProductDefinitionPackagingProperty);
      otherKeys.push('_valueAttachment' as keyof IPackagedProductDefinitionPackagingProperty);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PackagedProductDefinitionPackagingProperty instance
   */
  build(): PackagedProductDefinitionPackagingProperty {
    return new PackagedProductDefinitionPackagingProperty(this.data);
  }

  /**
   * Build and validate the PackagedProductDefinitionPackagingProperty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PackagedProductDefinitionPackagingProperty> {
    const packagedProductDefinitionPackagingProperty = this.build();
    await packagedProductDefinitionPackagingProperty.validateOrThrow();
    return packagedProductDefinitionPackagingProperty;
  }
}
