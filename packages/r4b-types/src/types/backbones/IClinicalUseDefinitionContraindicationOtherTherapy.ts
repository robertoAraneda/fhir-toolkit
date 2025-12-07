import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * ClinicalUseDefinitionContraindicationOtherTherapy Interface
 * 
 * Information about use of the product in relation to other therapies described as part of the contraindication
 * 
 *
 * @see https://hl7.org/fhir/R4/clinicalusedefinitioncontraindicationothertherapy.html
 */
export interface IClinicalUseDefinitionContraindicationOtherTherapy extends IBackboneElement {
  /**
   * The type of relationship between the product indication/contraindication and another therapy
   */
  relationshipType: ICodeableConcept;

  /**
   * Reference to a specific medication as part of an indication or contraindication
   */
  therapy: ICodeableReference;

}
