import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * MedicationKnowledgeMonograph Interface
 * 
 * Associated documentation about the medication
 * 
 *
 * @see https://hl7.org/fhir/R4B/medicationknowledgemonograph.html
 */
export interface IMedicationKnowledgeMonograph extends IBackboneElement {
  /**
   * The category of medication document
   */
  type?: ICodeableConcept;

  /**
   * Associated documentation about the medication
   */
  source?: IReference<'DocumentReference' | 'Media'>;

}
