import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * ClinicalUseDefinitionWarning Interface
 * 
 * Critical environmental, health or physical risks or hazards. For example 'Do not operate heavy machinery', 'May cause drowsiness'
 * 
 *
 * @see https://hl7.org/fhir/R4B/clinicalusedefinitionwarning.html
 */
export interface IClinicalUseDefinitionWarning extends IBackboneElement {
  /**
   * A textual definition of this warning, with formatting
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * A coded or unformatted textual definition of this warning
   */
  code?: ICodeableConcept;

}
