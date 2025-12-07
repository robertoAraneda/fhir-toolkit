import { DomainResource } from '../base/DomainResource.js';
import type {
  ICatalogEntry,
  ICatalogEntryRelatedEntry,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to CatalogEntry */
const CATALOG_ENTRY_PROPERTIES = [
  'identifier',
  'type',
  'orderable',
  '_orderable',
  'referencedItem',
  'additionalIdentifier',
  'classification',
  'status',
  '_status',
  'validityPeriod',
  'validTo',
  '_validTo',
  'lastUpdated',
  '_lastUpdated',
  'additionalCharacteristic',
  'additionalClassification',
  'relatedEntry',
] as const;

/**
 * CatalogEntry - Catalog entries are wrappers that contextualize items included in a catalog.
 *
 * @see https://hl7.org/fhir/R4/catalogentry.html
 *
 * @example
 * const catalogEntry = new CatalogEntry({
 *   resourceType: 'CatalogEntry',
 *   // ... properties
 * });
 */
export class CatalogEntry extends DomainResource implements ICatalogEntry {
  readonly resourceType = 'CatalogEntry' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique identifier of the catalog item */
  identifier?: IIdentifier[];

  /** The type of item - medication, device, service, protocol or other */
  type?: ICodeableConcept;

  /** Whether the entry represents an orderable item */
  orderable: boolean;

  /** Extension for orderable */
  _orderable?: IElement;

  /** The item that is being defined */
  referencedItem: IReference<'Medication' | 'Device' | 'Organization' | 'Practitioner' | 'PractitionerRole' | 'HealthcareService' | 'ActivityDefinition' | 'PlanDefinition' | 'SpecimenDefinition' | 'ObservationDefinition' | 'Binary'>;

  /** Any additional identifier(s) for the catalog item, in the same granularity or concept */
  additionalIdentifier?: IIdentifier[];

  /** Classification (category or class) of the item entry */
  classification?: ICodeableConcept[];

  /** draft | active | retired | unknown */
  status?: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** The time period in which this catalog entry is expected to be active */
  validityPeriod?: IPeriod;

  /** The date until which this catalog entry is expected to be active */
  validTo?: string;

  /** Extension for validTo */
  _validTo?: IElement;

  /** When was this catalog last updated */
  lastUpdated?: string;

  /** Extension for lastUpdated */
  _lastUpdated?: IElement;

  /** Additional characteristics of the catalog entry */
  additionalCharacteristic?: ICodeableConcept[];

  /** Additional classification of the catalog entry */
  additionalClassification?: ICodeableConcept[];

  /** An item that this catalog entry is related to */
  relatedEntry?: ICatalogEntryRelatedEntry[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICatalogEntry>) {
    super(data);
    if (data) {
      this.assignProps(data, CATALOG_ENTRY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CatalogEntry from a JSON object
   */
  static fromJSON(json: ICatalogEntry): CatalogEntry {
    return new CatalogEntry(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CatalogEntry with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICatalogEntry>): CatalogEntry {
    return new CatalogEntry({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CatalogEntry by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICatalogEntry) => Partial<ICatalogEntry>): CatalogEntry {
    const currentData = this.toJSON();
    return new CatalogEntry({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICatalogEntry)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICatalogEntry {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, CATALOG_ENTRY_PROPERTIES);
    return result as ICatalogEntry;
  }

  /**
   * Create a deep clone of this CatalogEntry
   */
  clone(): CatalogEntry {
    return new CatalogEntry(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CatalogEntry
   */
  toString(): string {
    const parts: string[] = ['CatalogEntry'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
