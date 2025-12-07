import type { IBackboneElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';
import type { IMedicationKnowledgeIndicationGuidelineDosingGuideline } from './IMedicationKnowledgeIndicationGuidelineDosingGuideline.js';

/**
 * MedicationKnowledgeIndicationGuideline Interface
 * 
 * Guidelines or protocols for administration of the medication for an indication
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgeindicationguideline.html
 */
export interface IMedicationKnowledgeIndicationGuideline extends IBackboneElement {
  /**
   * Indication for use that applies to the specific administration guideline
   */
  indication?: ICodeableReference[];

  /**
   * Guidelines for dosage of the medication
   */
  dosingGuideline?: IMedicationKnowledgeIndicationGuidelineDosingGuideline[];

}
