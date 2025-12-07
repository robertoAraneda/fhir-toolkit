import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod } from './IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod.js';

/**
 * MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies Interface
 * 
 * A species for which this route applies
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductpharmaceuticalrouteofadministrationtargetspecies.html
 */
export interface IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends IBackboneElement {
  /**
   * Coded expression for the species
   */
  code: ICodeableConcept;

  /**
   * A species specific time during which consumption of animal product is not appropriate
   */
  withdrawalPeriod?: IMedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[];

}
