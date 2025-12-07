import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * InventoryItemAssociation Interface
 * 
 * Association with other items or products
 * 
 *
 * @see https://hl7.org/fhir/R4/inventoryitemassociation.html
 */
export interface IInventoryItemAssociation extends IBackboneElement {
  /**
   * The type of association between the device and the other item
   */
  associationType: ICodeableConcept;

  /**
   * The related item or product
   */
  relatedItem: IReference<'InventoryItem' | 'Medication' | 'MedicationKnowledge' | 'Device' | 'DeviceDefinition' | 'NutritionProduct' | 'BiologicallyDerivedProduct'>;

  /**
   * The quantity of the product in this product
   */
  quantity: IRatio;

}
