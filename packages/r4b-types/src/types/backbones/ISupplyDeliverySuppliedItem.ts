import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * SupplyDeliverySuppliedItem Interface
 * 
 * The item that is delivered or supplied
 * 
 *
 * @see https://hl7.org/fhir/R4B/supplydeliverysupplieditem.html
 */
export interface ISupplyDeliverySuppliedItem extends IBackboneElement {
  /**
   * Amount dispensed
   */
  quantity?: IQuantity;

  /**
   * Medication, Substance, or Device supplied
   */
  itemCodeableConcept?: ICodeableConcept;

  /**
   * Medication, Substance, or Device supplied
   */
  itemReference?: IReference;

}
