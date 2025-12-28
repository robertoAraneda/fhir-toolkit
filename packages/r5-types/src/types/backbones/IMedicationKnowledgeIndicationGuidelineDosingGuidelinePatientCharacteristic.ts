import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * MedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic Interface
 * 
 * Characteristics of the patient that are relevant to the administration guidelines
 * 
 *
 * @see https://hl7.org/fhir/R5/medicationknowledgeindicationguidelinedosingguidelinepatientcharacteristic.html
 */
export interface IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic extends IBackboneElement {
  /**
   * Categorization of specific characteristic that is relevant to the administration guideline
   */
  type: ICodeableConcept;

  /**
   * The specific characteristic
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * The specific characteristic
   */
  valueQuantity?: IQuantity;

  /**
   * The specific characteristic
   */
  valueRange?: IRange;

}
