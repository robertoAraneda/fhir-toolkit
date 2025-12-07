import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMarketingStatus } from '../datatypes/IMarketingStatus.js';
import type { IMedicinalProductPackagedBatchIdentifier } from '../backbones/IMedicinalProductPackagedBatchIdentifier.js';
import type { IMedicinalProductPackagedPackageItem } from '../backbones/IMedicinalProductPackagedPackageItem.js';

/**
 * MedicinalProductPackaged Interface
 * 
 * A medicinal product in a container or package.
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductpackaged.html
 */
export interface IMedicinalProductPackaged extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicinalProductPackaged';

  /**
   * Unique identifier
   */
  identifier?: IIdentifier[];

  /**
   * The product with this is a pack for
   */
  subject?: IReference<'MedicinalProduct'>[];

  /**
   * Textual description
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The legal status of supply of the medicinal product as classified by the regulator
   */
  legalStatusOfSupply?: ICodeableConcept;

  /**
   * Marketing information
   */
  marketingStatus?: IMarketingStatus[];

  /**
   * Manufacturer of this Package Item
   */
  marketingAuthorization?: IReference<'MedicinalProductAuthorization'>;

  /**
   * Manufacturer of this Package Item
   */
  manufacturer?: IReference<'Organization'>[];

  /**
   * Batch numbering
   */
  batchIdentifier?: IMedicinalProductPackagedBatchIdentifier[];

  /**
   * A packaging item, as a contained for medicine, possibly with other packaging items within
   */
  packageItem: IMedicinalProductPackagedPackageItem[];

}
