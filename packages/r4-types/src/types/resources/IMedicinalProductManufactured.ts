import type { ICodeableConcept, IDomainResource, IReference } from '../../base/index.js';
import type { IProdCharacteristic } from '../datatypes/IProdCharacteristic.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * MedicinalProductManufactured Interface
 * 
 * The manufactured item as contained in the packaged medicinal product.
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductmanufactured.html
 */
export interface IMedicinalProductManufactured extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'MedicinalProductManufactured';

  /**
   * Dose form as manufactured and before any transformation into the pharmaceutical product
   */
  manufacturedDoseForm: ICodeableConcept;

  /**
   * The “real world” units in which the quantity of the manufactured item is described
   */
  unitOfPresentation?: ICodeableConcept;

  /**
   * The quantity or "count number" of the manufactured item
   */
  quantity: IQuantity;

  /**
   * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues)
   */
  manufacturer?: IReference<'Organization'>[];

  /**
   * Ingredient
   */
  ingredient?: IReference<'MedicinalProductIngredient'>[];

  /**
   * Dimensions, color etc.
   */
  physicalCharacteristics?: IProdCharacteristic;

  /**
   * Other codeable characteristics
   */
  otherCharacteristics?: ICodeableConcept[];

}
