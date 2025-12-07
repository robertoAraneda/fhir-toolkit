import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PackagedProductDefinitionPackageProperty } from '../../models/backbones/PackagedProductDefinitionPackageProperty.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAttachment,
  ICodeableConcept,
  IPackagedProductDefinitionPackageProperty,
  IQuantity,
} from '@fhir-toolkit/r4b-types';

/**
 * PackagedProductDefinitionPackagePropertyBuilder - Fluent builder for PackagedProductDefinitionPackageProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const packagedProductDefinitionPackageProperty = new PackagedProductDefinitionPackagePropertyBuilder()
 *   .setType(value)
 *   .build();
 */
export class PackagedProductDefinitionPackagePropertyBuilder extends BackboneElementBuilder<PackagedProductDefinitionPackageProperty, IPackagedProductDefinitionPackageProperty> {
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
    const key = `value${type}` as keyof IPackagedProductDefinitionPackageProperty;
    const otherKeys: (keyof IPackagedProductDefinitionPackageProperty)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IPackagedProductDefinitionPackageProperty);
      otherKeys.push('_valueCodeableConcept' as keyof IPackagedProductDefinitionPackageProperty);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IPackagedProductDefinitionPackageProperty);
      otherKeys.push('_valueQuantity' as keyof IPackagedProductDefinitionPackageProperty);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof IPackagedProductDefinitionPackageProperty);
      otherKeys.push('_valueDate' as keyof IPackagedProductDefinitionPackageProperty);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IPackagedProductDefinitionPackageProperty);
      otherKeys.push('_valueBoolean' as keyof IPackagedProductDefinitionPackageProperty);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IPackagedProductDefinitionPackageProperty);
      otherKeys.push('_valueAttachment' as keyof IPackagedProductDefinitionPackageProperty);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PackagedProductDefinitionPackageProperty instance
   */
  build(): PackagedProductDefinitionPackageProperty {
    return new PackagedProductDefinitionPackageProperty(this.data);
  }

  /**
   * Build and validate the PackagedProductDefinitionPackageProperty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PackagedProductDefinitionPackageProperty> {
    const packagedProductDefinitionPackageProperty = this.build();
    await packagedProductDefinitionPackageProperty.validateOrThrow();
    return packagedProductDefinitionPackageProperty;
  }
}
