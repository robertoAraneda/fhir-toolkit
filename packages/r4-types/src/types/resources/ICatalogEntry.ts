import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ICatalogEntryRelatedEntry } from '../backbones/ICatalogEntryRelatedEntry.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * CatalogEntry Interface
 * 
 * Catalog entries are wrappers that contextualize items included in a catalog.
 * 
 *
 * @see https://hl7.org/fhir/R4/catalogentry.html
 */
export interface ICatalogEntry extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'CatalogEntry';

  /**
   * Unique identifier of the catalog item
   */
  identifier?: IIdentifier[];

  /**
   * The type of item - medication, device, service, protocol or other
   */
  type?: ICodeableConcept;

  /**
   * Whether the entry represents an orderable item
   */
  orderable: boolean;
  /**
   * Extension for orderable
   */
  _orderable?: IElement;

  /**
   * The item that is being defined
   */
  referencedItem: IReference<'Medication' | 'Device' | 'Organization' | 'Practitioner' | 'PractitionerRole' | 'HealthcareService' | 'ActivityDefinition' | 'PlanDefinition' | 'SpecimenDefinition' | 'ObservationDefinition' | 'Binary'>;

  /**
   * Any additional identifier(s) for the catalog item, in the same granularity or concept
   */
  additionalIdentifier?: IIdentifier[];

  /**
   * Classification (category or class) of the item entry
   */
  classification?: ICodeableConcept[];

  /**
   * draft | active | retired | unknown
   */
  status?: PublicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * The time period in which this catalog entry is expected to be active
   */
  validityPeriod?: IPeriod;

  /**
   * The date until which this catalog entry is expected to be active
   */
  validTo?: string;
  /**
   * Extension for validTo
   */
  _validTo?: IElement;

  /**
   * When was this catalog last updated
   */
  lastUpdated?: string;
  /**
   * Extension for lastUpdated
   */
  _lastUpdated?: IElement;

  /**
   * Additional characteristics of the catalog entry
   */
  additionalCharacteristic?: ICodeableConcept[];

  /**
   * Additional classification of the catalog entry
   */
  additionalClassification?: ICodeableConcept[];

  /**
   * An item that this catalog entry is related to
   */
  relatedEntry?: ICatalogEntryRelatedEntry[];

}
