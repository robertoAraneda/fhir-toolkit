import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * MedicationKnowledgeRegulatorySubstitution Interface
 * 
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective
 * 
 *
 * @see https://hl7.org/fhir/R4B/medicationknowledgeregulatorysubstitution.html
 */
export interface IMedicationKnowledgeRegulatorySubstitution extends IBackboneElement {
  /**
   * Specifies the type of substitution allowed
   */
  type: ICodeableConcept;

  /**
   * Specifies if regulation allows for changes in the medication when dispensing
   */
  allowed: boolean;
  /**
   * Extension for allowed
   */
  _allowed?: IElement;

}
