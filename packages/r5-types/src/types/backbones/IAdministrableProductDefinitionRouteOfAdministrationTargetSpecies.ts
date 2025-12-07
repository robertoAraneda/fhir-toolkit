import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod } from './IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod.js';

/**
 * AdministrableProductDefinitionRouteOfAdministrationTargetSpecies Interface
 * 
 * A species for which this route applies
 * 
 *
 * @see https://hl7.org/fhir/R4/administrableproductdefinitionrouteofadministrationtargetspecies.html
 */
export interface IAdministrableProductDefinitionRouteOfAdministrationTargetSpecies extends IBackboneElement {
  /**
   * Coded expression for the species
   */
  code: ICodeableConcept;

  /**
   * A species specific time during which consumption of animal product is not appropriate
   */
  withdrawalPeriod?: IAdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod[];

}
