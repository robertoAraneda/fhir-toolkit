import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IMedicationKnowledgeAdministrationGuidelinesDosage } from './IMedicationKnowledgeAdministrationGuidelinesDosage.js';
import type { IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics } from './IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics.js';

/**
 * MedicationKnowledgeAdministrationGuidelines Interface
 * 
 * Guidelines for administration of the medication
 * 
 *
 * @see https://hl7.org/fhir/R4B/medicationknowledgeadministrationguidelines.html
 */
export interface IMedicationKnowledgeAdministrationGuidelines extends IBackboneElement {
  /**
   * Dosage for the medication for the specific guidelines
   */
  dosage?: IMedicationKnowledgeAdministrationGuidelinesDosage[];

  /**
   * Indication for use that apply to the specific administration guidelines
   */
  indicationCodeableConcept?: ICodeableConcept;

  /**
   * Indication for use that apply to the specific administration guidelines
   */
  indicationReference?: IReference;

  /**
   * Characteristics of the patient that are relevant to the administration guidelines
   */
  patientCharacteristics?: IMedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[];

}
