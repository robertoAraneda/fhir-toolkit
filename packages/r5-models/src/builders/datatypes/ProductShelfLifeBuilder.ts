import { ElementBuilder } from '../base/ElementBuilder.js';
import { ProductShelfLife } from '../../models/datatypes/ProductShelfLife.js';
import type { ChoiceTypeValue } from '../base/ChoiceTypeValue.js';
import type {
  ICodeableConcept,
  IDuration,
  IProductShelfLife,
} from '@fhir-toolkit/r5-types';

/**
 * ProductShelfLifeBuilder - Fluent builder for ProductShelfLife datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const productShelfLife = new ProductShelfLifeBuilder()
 *   .setType(value)
 *   .addSpecialPrecautionsForStorage({ ... })
 *   .build();
 */
export class ProductShelfLifeBuilder extends ElementBuilder<ProductShelfLife, IProductShelfLife> {
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
    const key = `period${type}` as keyof IProductShelfLife;
    const otherKeys: (keyof IProductShelfLife)[] = [];
    if (type !== 'Duration') {
      otherKeys.push('periodDuration' as keyof IProductShelfLife);
      otherKeys.push('_periodDuration' as keyof IProductShelfLife);
    }
    if (type !== 'String') {
      otherKeys.push('periodString' as keyof IProductShelfLife);
      otherKeys.push('_periodString' as keyof IProductShelfLife);
    }
    return this.setChoiceType(key, value, otherKeys);
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add specialPrecautionsForStorage
   * Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified
   */
  addSpecialPrecautionsForStorage(specialPrecautionsForStorage: ICodeableConcept): this {
    return this.addToArray('specialPrecautionsForStorage', specialPrecautionsForStorage);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the ProductShelfLife instance
   */
  build(): ProductShelfLife {
    return new ProductShelfLife(this.data);
  }

  /**
   * Build and validate the ProductShelfLife instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<ProductShelfLife> {
    const productShelfLife = this.build();
    await productShelfLife.validateOrThrow();
    return productShelfLife;
  }
}
