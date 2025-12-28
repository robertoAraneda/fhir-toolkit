import type { IBackboneElement } from '../../base/index.js';
import type { IMonetaryComponent } from '../datatypes/IMonetaryComponent.js';
import type { IChargeItemDefinitionApplicability } from './IChargeItemDefinitionApplicability.js';

/**
 * ChargeItemDefinitionPropertyGroup Interface
 * 
 * Group of properties which are applicable under the same conditions
 * 
 *
 * @see https://hl7.org/fhir/R5/chargeitemdefinitionpropertygroup.html
 */
export interface IChargeItemDefinitionPropertyGroup extends IBackboneElement {
  /**
   * Conditions under which the priceComponent is applicable
   */
  applicability?: IChargeItemDefinitionApplicability[];

  /**
   * Components of total line item price
   */
  priceComponent?: IMonetaryComponent[];

}
