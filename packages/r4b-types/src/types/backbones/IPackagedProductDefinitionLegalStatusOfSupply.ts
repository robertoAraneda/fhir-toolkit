import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * PackagedProductDefinitionLegalStatusOfSupply Interface
 * 
 * The legal status of supply of the packaged item as classified by the regulator
 * 
 *
 * @see https://hl7.org/fhir/R4/packagedproductdefinitionlegalstatusofsupply.html
 */
export interface IPackagedProductDefinitionLegalStatusOfSupply extends IBackboneElement {
  /**
   * The actual status of supply. In what situation this package type may be supplied for use
   */
  code?: ICodeableConcept;

  /**
   * The place where the legal status of supply applies
   */
  jurisdiction?: ICodeableConcept;

}
