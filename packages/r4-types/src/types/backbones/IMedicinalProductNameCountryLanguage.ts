import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * MedicinalProductNameCountryLanguage Interface
 * 
 * Country where the name applies
 * 
 *
 * @see https://hl7.org/fhir/R4/medicinalproductnamecountrylanguage.html
 */
export interface IMedicinalProductNameCountryLanguage extends IBackboneElement {
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
