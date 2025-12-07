import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IProductShelfLife } from '../datatypes/IProductShelfLife.js';
import type { IPackagedProductDefinitionPackagingContainedItem } from './IPackagedProductDefinitionPackagingContainedItem.js';
import type { IPackagedProductDefinitionPackagingProperty } from './IPackagedProductDefinitionPackagingProperty.js';

/**
 * PackagedProductDefinitionPackaging Interface
 * 
 * A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap
 * 
 *
 * @see https://hl7.org/fhir/R4/packagedproductdefinitionpackaging.html
 */
export interface IPackagedProductDefinitionPackaging extends IBackboneElement {
  /**
   * An identifier that is specific to this particular part of the packaging. Including possibly a Data Carrier Identifier
   */
  identifier?: IIdentifier[];

  /**
   * The physical type of the container of the items
   */
  type?: ICodeableConcept;

  /**
   * Is this a part of the packaging (e.g. a cap or bottle stopper), rather than the packaging itself (e.g. a bottle or vial)
   */
  componentPart?: boolean;
  /**
   * Extension for componentPart
   */
  _componentPart?: IElement;

  /**
   * The quantity of this level of packaging in the package that contains it (with the outermost level being 1)
   */
  quantity?: number;
  /**
   * Extension for quantity
   */
  _quantity?: IElement;

  /**
   * Material type of the package item
   */
  material?: ICodeableConcept[];

  /**
   * A possible alternate material for this part of the packaging, that is allowed to be used instead of the usual material
   */
  alternateMaterial?: ICodeableConcept[];

  /**
   * Shelf Life and storage information
   */
  shelfLifeStorage?: IProductShelfLife[];

  /**
   * Manufacturer of this packaging item (multiple means these are all potential manufacturers)
   */
  manufacturer?: IReference<'Organization'>[];

  /**
   * General characteristics of this item
   */
  property?: IPackagedProductDefinitionPackagingProperty[];

  /**
   * The item(s) within the packaging
   */
  containedItem?: IPackagedProductDefinitionPackagingContainedItem[];

  /**
   * Allows containers (and parts of containers) within containers, still as a part of single packaged product
   */
  packaging?: IPackagedProductDefinitionPackaging[];

}
