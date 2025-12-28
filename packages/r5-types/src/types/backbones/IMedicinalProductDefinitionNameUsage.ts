import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * MedicinalProductDefinitionNameUsage Interface
 * 
 * Country and jurisdiction where the name applies
 * 
 *
 * @see https://hl7.org/fhir/R5/medicinalproductdefinitionnameusage.html
 */
export interface IMedicinalProductDefinitionNameUsage extends IBackboneElement {
  /**
   * Country code for where this name applies
   */
  country: ICodeableConcept;

  /**
   * Jurisdiction code for where this name applies
   */
  jurisdiction?: ICodeableConcept;

  /**
   * Language code for this name
   */
  language: ICodeableConcept;

}
