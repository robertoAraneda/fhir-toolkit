import { ElementBuilder } from '../base/ElementBuilder.js';
import { ProductShelfLife } from '../../models/datatypes/ProductShelfLife.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IProductShelfLife,
  IQuantity,
} from '@fhir-toolkit/r4-types';

/**
 * ProductShelfLifeBuilder - Fluent builder for ProductShelfLife datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const productShelfLife = new ProductShelfLifeBuilder()
 *   .setIdentifier(value)
 *   .addSpecialPrecautionsForStorage({ ... })
 *   .build();
 */
export class ProductShelfLifeBuilder extends ElementBuilder<ProductShelfLife, IProductShelfLife> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set identifier
   * Unique identifier for the packaged Medicinal Product
   */
  setIdentifier(identifier: IIdentifier): this {
    this.data.identifier = identifier;
    return this;
  }

  /**
   * Set type
   * This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set period
   * The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used
   */
  setPeriod(period: IQuantity): this {
    this.data.period = period;
    return this;
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
