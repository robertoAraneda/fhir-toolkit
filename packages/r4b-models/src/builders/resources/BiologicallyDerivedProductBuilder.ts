import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { BiologicallyDerivedProduct } from '../../models/resources/BiologicallyDerivedProduct.js';
import type {
  BiologicallyDerivedProductCategoryType,
  BiologicallyDerivedProductStatusType,
  IBiologicallyDerivedProduct,
  IBiologicallyDerivedProductCollection,
  IBiologicallyDerivedProductManipulation,
  IBiologicallyDerivedProductProcessing,
  IBiologicallyDerivedProductStorage,
  ICodeableConcept,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/**
 * BiologicallyDerivedProductBuilder - Fluent builder for BiologicallyDerivedProduct resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const biologicallyDerivedProduct = new BiologicallyDerivedProductBuilder()
 *   .setId('123')
 *   .setProductCategory(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class BiologicallyDerivedProductBuilder extends DomainResourceBuilder<BiologicallyDerivedProduct, IBiologicallyDerivedProduct> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set productCategory
   * organ | tissue | fluid | cells | biologicalAgent
   */
  setProductCategory(productCategory: BiologicallyDerivedProductCategoryType): this {
    this.data.productCategory = productCategory;
    return this;
  }

  /**
   * Set productCode
   * What this biologically derived product is
   */
  setProductCode(productCode: ICodeableConcept): this {
    this.data.productCode = productCode;
    return this;
  }

  /**
   * Set status
   * available | unavailable
   */
  setStatus(status: BiologicallyDerivedProductStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set quantity
   * The amount of this biologically derived product
   */
  setQuantity(quantity: number): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set collection
   * How this product was collected
   */
  setCollection(collection: IBiologicallyDerivedProductCollection): this {
    this.data.collection = collection;
    return this;
  }

  /**
   * Set manipulation
   * Any manipulation of product post-collection
   */
  setManipulation(manipulation: IBiologicallyDerivedProductManipulation): this {
    this.data.manipulation = manipulation;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * External ids for this item
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add request
   * Procedure request
   */
  addRequest(request: IReference<'ServiceRequest'>): this {
    return this.addToArray('request', request);
  }

  /**
   * Add parent
   * BiologicallyDerivedProduct parent
   */
  addParent(parent: IReference<'BiologicallyDerivedProduct'>): this {
    return this.addToArray('parent', parent);
  }

  /**
   * Add processing
   * Any processing of the product during collection
   */
  addProcessing(processing: IBiologicallyDerivedProductProcessing): this {
    return this.addToArray('processing', processing);
  }

  /**
   * Add storage
   * Product storage
   */
  addStorage(storage: IBiologicallyDerivedProductStorage): this {
    return this.addToArray('storage', storage);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the BiologicallyDerivedProduct instance
   */
  build(): BiologicallyDerivedProduct {
    return new BiologicallyDerivedProduct(this.data);
  }

  /**
   * Build and validate the BiologicallyDerivedProduct instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<BiologicallyDerivedProduct> {
    const biologicallyDerivedProduct = this.build();
    await biologicallyDerivedProduct.validateOrThrow();
    return biologicallyDerivedProduct;
  }
}
