import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * SupplyDeliverySuppliedItem Interface
 * 
 * The item that is delivered or supplied
 * 
 *
 * @see https://hl7.org/fhir/R5/supplydeliverysupplieditem.html
 */
export interface ISupplyDeliverySuppliedItem extends IBackboneElement {
  /**
   * Amount supplied
   */
  quantity?: IQuantity;

  /**
   * Medication, Substance, Device or Biologically Derived Product supplied
   */
  itemCodeableConcept?: ICodeableConcept;

  /**
   * Medication, Substance, Device or Biologically Derived Product supplied
   */
  itemReference?: IReference;

}
