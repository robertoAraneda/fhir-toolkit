import type { IBackboneElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * PackagedProductDefinitionPackagingContainedItem Interface
 * 
 * The item(s) within the packaging
 * 
 *
 * @see https://hl7.org/fhir/R4/packagedproductdefinitionpackagingcontaineditem.html
 */
export interface IPackagedProductDefinitionPackagingContainedItem extends IBackboneElement {
  /**
   * The actual item(s) of medication, as manufactured, or a device, or other medically related item (food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package
   */
  item: ICodeableReference;

  /**
   * The number of this type of item within this packaging or for continuous items such as liquids it is the quantity (for example 25ml). See also PackagedProductDefinition.containedItemQuantity (especially the long definition)
   */
  amount?: IQuantity;

}
