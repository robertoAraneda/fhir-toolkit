import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { BiologicallyDerivedProduct } from '../../models/resources/BiologicallyDerivedProduct.js';
import type {
  IBiologicallyDerivedProduct,
  IBiologicallyDerivedProductCollection,
  IBiologicallyDerivedProductProperty,
  ICodeableConcept,
  ICoding,
  IIdentifier,
  IRange,
  IReference,
} from '@fhir-toolkit/r5-types';

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
 *   .addParent({ ... })
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
  setProductCategory(productCategory: ICoding): this {
    this.data.productCategory = productCategory;
    return this;
  }

  /**
   * Set productCode
   * A code that identifies the kind of this biologically derived product
   */
  setProductCode(productCode: ICodeableConcept): this {
    this.data.productCode = productCode;
    return this;
  }

  /**
   * Set biologicalSourceEvent
   * An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled
   */
  setBiologicalSourceEvent(biologicalSourceEvent: IIdentifier): this {
    this.data.biologicalSourceEvent = biologicalSourceEvent;
    return this;
  }

  /**
   * Set division
   * A unique identifier for an aliquot of a product
   */
  setDivision(division: string): this {
    this.data.division = division;
    return this;
  }

  /**
   * Set productStatus
   * available | unavailable
   */
  setProductStatus(productStatus: ICoding): this {
    this.data.productStatus = productStatus;
    return this;
  }

  /**
   * Set expirationDate
   * Date, and where relevant time, of expiration
   */
  setExpirationDate(expirationDate: string): this {
    this.data.expirationDate = expirationDate;
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
   * Set storageTempRequirements
   * Product storage temperature requirements
   */
  setStorageTempRequirements(storageTempRequirements: IRange): this {
    this.data.storageTempRequirements = storageTempRequirements;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add parent
   * The parent biologically-derived product
   */
  addParent(parent: IReference<'BiologicallyDerivedProduct'>): this {
    return this.addToArray('parent', parent);
  }

  /**
   * Add request
   * Request to obtain and/or infuse this product
   */
  addRequest(request: IReference<'ServiceRequest'>): this {
    return this.addToArray('request', request);
  }

  /**
   * Add identifier
   * Instance identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add processingFacility
   * Processing facilities responsible for the labeling and distribution of this biologically derived product
   */
  addProcessingFacility(processingFacility: IReference<'Organization'>): this {
    return this.addToArray('processingFacility', processingFacility);
  }

  /**
   * Add property
   * A property that is specific to this BiologicallyDerviedProduct instance
   */
  addProperty(property: IBiologicallyDerivedProductProperty): this {
    return this.addToArray('property', property);
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
