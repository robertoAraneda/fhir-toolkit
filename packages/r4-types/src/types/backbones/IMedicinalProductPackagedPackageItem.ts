import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IProdCharacteristic } from '../datatypes/IProdCharacteristic.js';
import type { IProductShelfLife } from '../datatypes/IProductShelfLife.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * MedicinalProductPackagedPackageItem Interface
 * 
 * A packaging item, as a contained for medicine, possibly with other packaging items within
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductpackagedpackageitem.html
 */
export interface IMedicinalProductPackagedPackageItem extends IBackboneElement {
  /**
   * Including possibly Data Carrier Identifier
   */
  identifier?: IIdentifier[];

  /**
   * The physical type of the container of the medicine
   */
  type: ICodeableConcept;

  /**
   * The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1
   */
  quantity: IQuantity;

  /**
   * Material type of the package item
   */
  material?: ICodeableConcept[];

  /**
   * A possible alternate material for the packaging
   */
  alternateMaterial?: ICodeableConcept[];

  /**
   * A device accompanying a medicinal product
   */
  device?: IReference<'DeviceDefinition'>[];

  /**
   * The manufactured item as contained in the packaged medicinal product
   */
  manufacturedItem?: IReference<'MedicinalProductManufactured'>[];

  /**
   * Allows containers within containers
   */
  packageItem?: IMedicinalProductPackagedPackageItem[];

  /**
   * Dimensions, color etc.
   */
  physicalCharacteristics?: IProdCharacteristic;

  /**
   * Other codeable characteristics
   */
  otherCharacteristics?: ICodeableConcept[];

  /**
   * Shelf Life and storage information
   */
  shelfLifeStorage?: IProductShelfLife[];

  /**
   * Manufacturer of this Package Item
   */
  manufacturer?: IReference<'Organization'>[];

}
