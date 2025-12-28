import type { IBackboneElement } from '../../base/index.js';
import type { IChargeItemDefinitionApplicability } from './IChargeItemDefinitionApplicability.js';
import type { IChargeItemDefinitionPropertyGroupPriceComponent } from './IChargeItemDefinitionPropertyGroupPriceComponent.js';

/**
 * ChargeItemDefinitionPropertyGroup Interface
 * 
 * Group of properties which are applicable under the same conditions
 * 
 *
 * @see https://hl7.org/fhir/R4B/chargeitemdefinitionpropertygroup.html
 */
export interface IChargeItemDefinitionPropertyGroup extends IBackboneElement {
  /**
   * Conditions under which the priceComponent is applicable
   */
  applicability?: IChargeItemDefinitionApplicability[];

  /**
   * Components of total line item price
   */
  priceComponent?: IChargeItemDefinitionPropertyGroupPriceComponent[];

}
