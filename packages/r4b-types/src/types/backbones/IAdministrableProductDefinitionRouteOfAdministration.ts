import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRatio } from '../datatypes/IRatio.js';
import type { IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies } from './IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies.js';

/**
 * AdministrableProductDefinitionRouteOfAdministration Interface
 * 
 * The path by which the product is taken into or makes contact with the body
 * 
 *
 * @see https://hl7.org/fhir/R4B/administrableproductdefinitionrouteofadministration.html
 */
export interface IAdministrableProductDefinitionRouteOfAdministration extends IBackboneElement {
  /**
   * Coded expression for the route
   */
  code: ICodeableConcept;

  /**
   * The first dose (dose quantity) administered can be specified for the product
   */
  firstDose?: IQuantity;

  /**
   * The maximum single dose that can be administered
   */
  maxSingleDose?: IQuantity;

  /**
   * The maximum dose quantity to be administered in any one 24-h period
   */
  maxDosePerDay?: IQuantity;

  /**
   * The maximum dose per treatment period that can be administered
   */
  maxDosePerTreatmentPeriod?: IRatio;

  /**
   * The maximum treatment period during which the product can be administered
   */
  maxTreatmentPeriod?: IDuration;

  /**
   * A species for which this route applies
   */
  targetSpecies?: IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies[];

}
