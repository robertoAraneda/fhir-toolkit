import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * MedicinalProductAuthorizationJurisdictionalAuthorization Interface
 * 
 * Authorization in areas within a country
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductauthorizationjurisdictionalauthorization.html
 */
export interface IMedicinalProductAuthorizationJurisdictionalAuthorization extends IBackboneElement {
  /**
   * The assigned number for the marketing authorization
   */
  identifier?: IIdentifier[];

  /**
   * Country of authorization
   */
  country?: ICodeableConcept;

  /**
   * Jurisdiction within a country
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * The legal status of supply in a jurisdiction or region
   */
  legalStatusOfSupply?: ICodeableConcept;

  /**
   * The start and expected end date of the authorization
   */
  validityPeriod?: IPeriod;

}
