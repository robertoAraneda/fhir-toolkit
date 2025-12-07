import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { CatalogEntry } from '../../models/resources/CatalogEntry.js';
import type {
  ICatalogEntry,
  ICatalogEntryRelatedEntry,
  ICodeableConcept,
  IIdentifier,
  IPeriod,
  IReference,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/**
 * CatalogEntryBuilder - Fluent builder for CatalogEntry resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const catalogEntry = new CatalogEntryBuilder()
 *   .setId('123')
 *   .setType(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class CatalogEntryBuilder extends DomainResourceBuilder<CatalogEntry, ICatalogEntry> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set type
   * The type of item - medication, device, service, protocol or other
   */
  setType(type: ICodeableConcept): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set orderable
   * Whether the entry represents an orderable item
   */
  setOrderable(orderable: boolean): this {
    this.data.orderable = orderable;
    return this;
  }

  /**
   * Set referencedItem
   * The item that is being defined
   */
  setReferencedItem(referencedItem: IReference<'Medication' | 'Device' | 'Organization' | 'Practitioner' | 'PractitionerRole' | 'HealthcareService' | 'ActivityDefinition' | 'PlanDefinition' | 'SpecimenDefinition' | 'ObservationDefinition' | 'Binary'>): this {
    this.data.referencedItem = referencedItem;
    return this;
  }

  /**
   * Set status
   * draft | active | retired | unknown
   */
  setStatus(status: PublicationStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set validityPeriod
   * The time period in which this catalog entry is expected to be active
   */
  setValidityPeriod(validityPeriod: IPeriod): this {
    this.data.validityPeriod = validityPeriod;
    return this;
  }

  /**
   * Set validTo
   * The date until which this catalog entry is expected to be active
   */
  setValidTo(validTo: string): this {
    this.data.validTo = validTo;
    return this;
  }

  /**
   * Set lastUpdated
   * When was this catalog last updated
   */
  setLastUpdated(lastUpdated: string): this {
    this.data.lastUpdated = lastUpdated;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Unique identifier of the catalog item
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add additionalIdentifier
   * Any additional identifier(s) for the catalog item, in the same granularity or concept
   */
  addAdditionalIdentifier(additionalIdentifier: IIdentifier): this {
    return this.addToArray('additionalIdentifier', additionalIdentifier);
  }

  /**
   * Add classification
   * Classification (category or class) of the item entry
   */
  addClassification(classification: ICodeableConcept): this {
    return this.addToArray('classification', classification);
  }

  /**
   * Add additionalCharacteristic
   * Additional characteristics of the catalog entry
   */
  addAdditionalCharacteristic(additionalCharacteristic: ICodeableConcept): this {
    return this.addToArray('additionalCharacteristic', additionalCharacteristic);
  }

  /**
   * Add additionalClassification
   * Additional classification of the catalog entry
   */
  addAdditionalClassification(additionalClassification: ICodeableConcept): this {
    return this.addToArray('additionalClassification', additionalClassification);
  }

  /**
   * Add relatedEntry
   * An item that this catalog entry is related to
   */
  addRelatedEntry(relatedEntry: ICatalogEntryRelatedEntry): this {
    return this.addToArray('relatedEntry', relatedEntry);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the CatalogEntry instance
   */
  build(): CatalogEntry {
    return new CatalogEntry(this.data);
  }

  /**
   * Build and validate the CatalogEntry instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<CatalogEntry> {
    const catalogEntry = this.build();
    await catalogEntry.validateOrThrow();
    return catalogEntry;
  }
}
