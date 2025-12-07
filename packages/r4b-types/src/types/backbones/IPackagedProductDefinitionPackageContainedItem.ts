import type { IBackboneElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * PackagedProductDefinitionPackageContainedItem Interface
 * 
 * The item(s) within the packaging
 * 
 *
 * @see https://hl7.org/fhir/R4/packagedproductdefinitionpackagecontaineditem.html
 */
export interface IPackagedProductDefinitionPackageContainedItem extends IBackboneElement {
  /**
   * The actual item(s) of medication, as manufactured, or a device, or other medically related item (food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package
   */
  item: ICodeableReference;

  /**
   * The number of this type of item within this packaging
   */
  amount?: IQuantity;

}
