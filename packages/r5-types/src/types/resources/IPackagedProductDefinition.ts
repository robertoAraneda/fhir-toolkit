import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IMarketingStatus } from '../datatypes/IMarketingStatus.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IPackagedProductDefinitionLegalStatusOfSupply } from '../backbones/IPackagedProductDefinitionLegalStatusOfSupply.js';
import type { IPackagedProductDefinitionPackaging } from '../backbones/IPackagedProductDefinitionPackaging.js';
import type { IPackagedProductDefinitionPackagingProperty } from '../backbones/IPackagedProductDefinitionPackagingProperty.js';

/**
 * PackagedProductDefinition Interface
 * 
 * A medically related item or items, in a container or package.
 * 
 *
 * @see https://hl7.org/fhir/R4/packagedproductdefinition.html
 */
export interface IPackagedProductDefinition extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'PackagedProductDefinition';

  /**
   * A unique identifier for this package as whole - not for the content of the package
   */
  identifier?: IIdentifier[];

  /**
   * A name for this package. Typically as listed in a drug formulary, catalogue, inventory etc
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * A high level category e.g. medicinal product, raw material, shipping container etc
   */
  type?: ICodeableConcept;

  /**
   * The product that this is a pack for
   */
  packageFor?: IReference<'MedicinalProductDefinition'>[];

  /**
   * The status within the lifecycle of this item. High level - not intended to duplicate details elsewhere e.g. legal status, or authorization/marketing status
   */
  status?: ICodeableConcept;

  /**
   * The date at which the given status became applicable
   */
  statusDate?: string;
  /**
   * Extension for statusDate
   */
  _statusDate?: IElement;

  /**
   * A total of the complete count of contained items of a particular type/form, independent of sub-packaging or organization. This can be considered as the pack size. See also packaging.containedItem.amount (especially the long definition)
   */
  containedItemQuantity?: IQuantity[];

  /**
   * Textual description. Note that this is not the name of the package or product
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The legal status of supply of the packaged item as classified by the regulator
   */
  legalStatusOfSupply?: IPackagedProductDefinitionLegalStatusOfSupply[];

  /**
   * Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated
   */
  marketingStatus?: IMarketingStatus[];

  /**
   * Identifies if the drug product is supplied with another item such as a diluent or adjuvant
   */
  copackagedIndicator?: boolean;
  /**
   * Extension for copackagedIndicator
   */
  _copackagedIndicator?: IElement;

  /**
   * Manufacturer of this package type (multiple means these are all possible manufacturers)
   */
  manufacturer?: IReference<'Organization'>[];

  /**
   * Additional information or supporting documentation about the packaged product
   */
  attachedDocument?: IReference<'DocumentReference'>[];

  /**
   * A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap
   */
  packaging?: IPackagedProductDefinitionPackaging;

  /**
   * Allows the key features to be recorded, such as "hospital pack", "nurse prescribable"
   */
  characteristic?: IPackagedProductDefinitionPackagingProperty[];

}
