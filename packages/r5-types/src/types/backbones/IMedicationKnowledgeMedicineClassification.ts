import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * MedicationKnowledgeMedicineClassification Interface
 * 
 * Categorization of the medication within a formulary or classification system
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgemedicineclassification.html
 */
export interface IMedicationKnowledgeMedicineClassification extends IBackboneElement {
  /**
   * The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification)
   */
  type: ICodeableConcept;

  /**
   * The source of the classification
   */
  sourceString?: string;
  /**
   * Extension for sourceString
   */
  _sourceString?: IElement;

  /**
   * The source of the classification
   */
  sourceUri?: string;
  /**
   * Extension for sourceUri
   */
  _sourceUri?: IElement;

  /**
   * Specific category assigned to the medication
   */
  classification?: ICodeableConcept[];

}
