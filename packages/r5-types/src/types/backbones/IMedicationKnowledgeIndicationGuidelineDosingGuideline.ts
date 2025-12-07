import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage } from './IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage.js';
import type { IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic } from './IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic.js';

/**
 * MedicationKnowledgeIndicationGuidelineDosingGuideline Interface
 * 
 * Guidelines for dosage of the medication
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgeindicationguidelinedosingguideline.html
 */
export interface IMedicationKnowledgeIndicationGuidelineDosingGuideline extends IBackboneElement {
  /**
   * Intention of the treatment
   */
  treatmentIntent?: ICodeableConcept;

  /**
   * Dosage for the medication for the specific guidelines
   */
  dosage?: IMedicationKnowledgeIndicationGuidelineDosingGuidelineDosage[];

  /**
   * Type of treatment the guideline applies to
   */
  administrationTreatment?: ICodeableConcept;

  /**
   * Characteristics of the patient that are relevant to the administration guidelines
   */
  patientCharacteristic?: IMedicationKnowledgeIndicationGuidelineDosingGuidelinePatientCharacteristic[];

}
