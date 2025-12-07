import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPackagedProductDefinitionPackageContainedItem } from './IPackagedProductDefinitionPackageContainedItem.js';
import type { IPackagedProductDefinitionPackageProperty } from './IPackagedProductDefinitionPackageProperty.js';
import type { IPackagedProductDefinitionPackageShelfLifeStorage } from './IPackagedProductDefinitionPackageShelfLifeStorage.js';

/**
 * PackagedProductDefinitionPackage Interface
 * 
 * A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap
 * 
 *
 * @see https://hl7.org/fhir/R4/packagedproductdefinitionpackage.html
 */
export interface IPackagedProductDefinitionPackage extends IBackboneElement {
  /**
   * An identifier that is specific to this particular part of the packaging. Including possibly a Data Carrier Identifier
   */
  identifier?: IIdentifier[];

  /**
   * The physical type of the container of the items
   */
  type?: ICodeableConcept;

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
  shelfLifeStorage?: IPackagedProductDefinitionPackageShelfLifeStorage[];

  /**
   * Manufacturer of this package Item (multiple means these are all possible manufacturers)
   */
  manufacturer?: IReference<'Organization'>[];

  /**
   * General characteristics of this item
   */
  property?: IPackagedProductDefinitionPackageProperty[];

  /**
   * The item(s) within the packaging
   */
  containedItem?: IPackagedProductDefinitionPackageContainedItem[];

  /**
   * Allows containers (and parts of containers) within containers, still a single packaged product
   */
  package?: IPackagedProductDefinitionPackage[];

}
