import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics Interface
 * 
 * Characteristics of the patient that are relevant to the administration guidelines
 * 
 *
 * @see https://hl7.org/fhir/R4B/medicationknowledgeadministrationguidelinespatientcharacteristics.html
 */
export interface IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends IBackboneElement {
  /**
   * Specific characteristic that is relevant to the administration guideline
   */
  characteristicCodeableConcept?: ICodeableConcept;

  /**
   * Specific characteristic that is relevant to the administration guideline
   */
  characteristicQuantity?: IQuantity;

  /**
   * The specific characteristic
   */
  value?: string[];
  /**
   * Extension for value
   */
  _value?: IElement;

}
