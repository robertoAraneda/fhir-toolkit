import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PackagedProductDefinitionPackageShelfLifeStorage } from '../../models/backbones/PackagedProductDefinitionPackageShelfLifeStorage.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IDuration,
  IPackagedProductDefinitionPackageShelfLifeStorage,
} from '@fhir-toolkit/r4b-types';

/**
 * PackagedProductDefinitionPackageShelfLifeStorageBuilder - Fluent builder for PackagedProductDefinitionPackageShelfLifeStorage backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const packagedProductDefinitionPackageShelfLifeStorage = new PackagedProductDefinitionPackageShelfLifeStorageBuilder()
 *   .setType(value)
 *   .addSpecialPrecautionsForStorage({ ... })
 *   .build();
 */
export class PackagedProductDefinitionPackageShelfLifeStorageBuilder extends BackboneElementBuilder<PackagedProductDefinitionPackageShelfLifeStorage, IPackagedProductDefinitionPackageShelfLifeStorage> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  // ============================================================================
  // Choice Types
  // ============================================================================

  /**
   * Set period choice type (periodDuration, periodString)
   * @param type - 'Duration' | 'String'
   * @param value - The value for the chosen type
   *
   * @example
   * builder.setPeriod('Duration', value)
   */
  setPeriod<T extends 'Duration' | 'String'>(
    type: T,
    value: ChoiceTypeValue<T>
  ): this {
    const key = `period${type}` as keyof IPackagedProductDefinitionPackageShelfLifeStorage;
    const otherKeys: (keyof IPackagedProductDefinitionPackageShelfLifeStorage)[] = [];
    if (type !== 'Duration') {
      otherKeys.push('periodDuration' as keyof IPackagedProductDefinitionPackageShelfLifeStorage);
      otherKeys.push('_periodDuration' as keyof IPackagedProductDefinitionPackageShelfLifeStorage);
    }
    if (type !== 'String') {
      otherKeys.push('periodString' as keyof IPackagedProductDefinitionPackageShelfLifeStorage);
      otherKeys.push('_periodString' as keyof IPackagedProductDefinitionPackageShelfLifeStorage);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add specialPrecautionsForStorage
   * Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary. The controlled term and the controlled term identifier shall be specified
   */
  addSpecialPrecautionsForStorage(specialPrecautionsForStorage: ICodeableConcept): this {
    return this.addToArray('specialPrecautionsForStorage', specialPrecautionsForStorage);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PackagedProductDefinitionPackageShelfLifeStorage instance
   */
  build(): PackagedProductDefinitionPackageShelfLifeStorage {
    return new PackagedProductDefinitionPackageShelfLifeStorage(this.data);
  }

  /**
   * Build and validate the PackagedProductDefinitionPackageShelfLifeStorage instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PackagedProductDefinitionPackageShelfLifeStorage> {
    const packagedProductDefinitionPackageShelfLifeStorage = this.build();
    await packagedProductDefinitionPackageShelfLifeStorage.validateOrThrow();
    return packagedProductDefinitionPackageShelfLifeStorage;
  }
}
