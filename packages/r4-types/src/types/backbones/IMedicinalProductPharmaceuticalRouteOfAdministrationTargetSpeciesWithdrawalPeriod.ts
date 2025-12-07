import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod Interface
 * 
 * A species specific time during which consumption of animal product is not appropriate
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductpharmaceuticalrouteofadministrationtargetspecieswithdrawalperiod.html
 */
export interface IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends IBackboneElement {
  /**
   * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk
   */
  tissue: ICodeableConcept;

  /**
   * A value for the time
   */
  value: IQuantity;

  /**
   * Extra information about the withdrawal period
   */
  supportingInformation?: string;
  /**
   * Extension for supportingInformation
   */
  _supportingInformation?: IElement;

}
