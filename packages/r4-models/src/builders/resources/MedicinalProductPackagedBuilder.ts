import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { MedicinalProductPackaged } from '../../models/resources/MedicinalProductPackaged.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IMarketingStatus,
  IMedicinalProductPackaged,
  IMedicinalProductPackagedBatchIdentifier,
  IMedicinalProductPackagedPackageItem,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * MedicinalProductPackagedBuilder - Fluent builder for MedicinalProductPackaged resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const medicinalProductPackaged = new MedicinalProductPackagedBuilder()
 *   .setId('123')
 *   .setDescription(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class MedicinalProductPackagedBuilder extends DomainResourceBuilder<MedicinalProductPackaged, IMedicinalProductPackaged> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set description
   * Textual description
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set legalStatusOfSupply
   * The legal status of supply of the medicinal product as classified by the regulator
   */
  setLegalStatusOfSupply(legalStatusOfSupply: ICodeableConcept): this {
    this.data.legalStatusOfSupply = legalStatusOfSupply;
    return this;
  }

  /**
   * Set marketingAuthorization
   * Manufacturer of this Package Item
   */
  setMarketingAuthorization(marketingAuthorization: IReference<'MedicinalProductAuthorization'>): this {
    this.data.marketingAuthorization = marketingAuthorization;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Unique identifier
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add subject
   * The product with this is a pack for
   */
  addSubject(subject: IReference<'MedicinalProduct'>): this {
    return this.addToArray('subject', subject);
  }

  /**
   * Add marketingStatus
   * Marketing information
   */
  addMarketingStatus(marketingStatu: IMarketingStatus): this {
    return this.addToArray('marketingStatus', marketingStatu);
  }

  /**
   * Add manufacturer
   * Manufacturer of this Package Item
   */
  addManufacturer(manufacturer: IReference<'Organization'>): this {
    return this.addToArray('manufacturer', manufacturer);
  }

  /**
   * Add batchIdentifier
   * Batch numbering
   */
  addBatchIdentifier(batchIdentifier: IMedicinalProductPackagedBatchIdentifier): this {
    return this.addToArray('batchIdentifier', batchIdentifier);
  }

  /**
   * Add packageItem
   * A packaging item, as a contained for medicine, possibly with other packaging items within
   */
  addPackageItem(packageItem: IMedicinalProductPackagedPackageItem): this {
    return this.addToArray('packageItem', packageItem);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the MedicinalProductPackaged instance
   */
  build(): MedicinalProductPackaged {
    return new MedicinalProductPackaged(this.data);
  }

  /**
   * Build and validate the MedicinalProductPackaged instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<MedicinalProductPackaged> {
    const medicinalProductPackaged = this.build();
    await medicinalProductPackaged.validateOrThrow();
    return medicinalProductPackaged;
  }
}
