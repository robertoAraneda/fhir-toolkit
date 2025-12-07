import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { AdministrableProductDefinitionProperty } from '../../models/backbones/AdministrableProductDefinitionProperty.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  IAdministrableProductDefinitionProperty,
  IAttachment,
  ICodeableConcept,
  IQuantity,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * AdministrableProductDefinitionPropertyBuilder - Fluent builder for AdministrableProductDefinitionProperty backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const administrableProductDefinitionProperty = new AdministrableProductDefinitionPropertyBuilder()
 *   .setType(value)
 *   .build();
 */
export class AdministrableProductDefinitionPropertyBuilder extends BackboneElementBuilder<AdministrableProductDefinitionProperty, IAdministrableProductDefinitionProperty> {
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

  /**
   * Set status
   * The status of characteristic e.g. assigned or pending
   */
  setStatus(status: ICodeableConcept<PublicationStatusType>): this {
    this.data.status = status;
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
    const key = `value${type}` as keyof IAdministrableProductDefinitionProperty;
    const otherKeys: (keyof IAdministrableProductDefinitionProperty)[] = [];
    if (type !== 'CodeableConcept') {
      otherKeys.push('valueCodeableConcept' as keyof IAdministrableProductDefinitionProperty);
      otherKeys.push('_valueCodeableConcept' as keyof IAdministrableProductDefinitionProperty);
    }
    if (type !== 'Quantity') {
      otherKeys.push('valueQuantity' as keyof IAdministrableProductDefinitionProperty);
      otherKeys.push('_valueQuantity' as keyof IAdministrableProductDefinitionProperty);
    }
    if (type !== 'Date') {
      otherKeys.push('valueDate' as keyof IAdministrableProductDefinitionProperty);
      otherKeys.push('_valueDate' as keyof IAdministrableProductDefinitionProperty);
    }
    if (type !== 'Boolean') {
      otherKeys.push('valueBoolean' as keyof IAdministrableProductDefinitionProperty);
      otherKeys.push('_valueBoolean' as keyof IAdministrableProductDefinitionProperty);
    }
    if (type !== 'Attachment') {
      otherKeys.push('valueAttachment' as keyof IAdministrableProductDefinitionProperty);
      otherKeys.push('_valueAttachment' as keyof IAdministrableProductDefinitionProperty);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the AdministrableProductDefinitionProperty instance
   */
  build(): AdministrableProductDefinitionProperty {
    return new AdministrableProductDefinitionProperty(this.data);
  }

  /**
   * Build and validate the AdministrableProductDefinitionProperty instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<AdministrableProductDefinitionProperty> {
    const administrableProductDefinitionProperty = this.build();
    await administrableProductDefinitionProperty.validateOrThrow();
    return administrableProductDefinitionProperty;
  }
}
