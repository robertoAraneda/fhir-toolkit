import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IMoney } from '../datatypes/IMoney.js';
import type { InvoicePriceComponentTypeType } from '../../valuesets/index.js';

/**
 * ChargeItemDefinitionPropertyGroupPriceComponent Interface
 * 
 * Components of total line item price
 * 
 *
 * @see https://hl7.org/fhir/R4B/chargeitemdefinitionpropertygrouppricecomponent.html
 */
export interface IChargeItemDefinitionPropertyGroupPriceComponent extends IBackboneElement {
  /**
   * base | surcharge | deduction | discount | tax | informational
   */
  type: InvoicePriceComponentTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Code identifying the specific component
   */
  code?: ICodeableConcept;

  /**
   * Factor used for calculating this component
   */
  factor?: number;
  /**
   * Extension for factor
   */
  _factor?: IElement;

  /**
   * Monetary amount associated with this component
   */
  amount?: IMoney;

}
