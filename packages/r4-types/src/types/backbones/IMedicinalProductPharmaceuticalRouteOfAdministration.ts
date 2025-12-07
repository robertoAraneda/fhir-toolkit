import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRatio } from '../datatypes/IRatio.js';
import type { IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies } from './IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies.js';

/**
 * MedicinalProductPharmaceuticalRouteOfAdministration Interface
 * 
 * The path by which the pharmaceutical product is taken into or makes contact with the body
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductpharmaceuticalrouteofadministration.html
 */
export interface IMedicinalProductPharmaceuticalRouteOfAdministration extends IBackboneElement {
  /**
   * Coded expression for the route
   */
  code: ICodeableConcept;

  /**
   * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement
   */
  firstDose?: IQuantity;

  /**
   * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement
   */
  maxSingleDose?: IQuantity;

  /**
   * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation
   */
  maxDosePerDay?: IQuantity;

  /**
   * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation
   */
  maxDosePerTreatmentPeriod?: IRatio;

  /**
   * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation
   */
  maxTreatmentPeriod?: IDuration;

  /**
   * A species for which this route applies
   */
  targetSpecies?: IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[];

}
