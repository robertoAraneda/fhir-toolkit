import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';

/**
 * MedicationKnowledgeMedicineClassification Interface
 * 
 * Categorization of the medication within a formulary or classification system
 * 
 *
 * @see https://hl7.org/fhir/R4B/medicationknowledgemedicineclassification.html
 */
export interface IMedicationKnowledgeMedicineClassification extends IBackboneElement {
  /**
   * The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification)
   */
  type: ICodeableConcept;

  /**
   * Specific category assigned to the medication
   */
  classification?: ICodeableConcept[];

}
