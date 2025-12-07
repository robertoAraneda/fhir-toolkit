import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';

/**
 * MedicationRequestSubstitution Interface
 * 
 * Any restrictions on medication substitution
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationrequestsubstitution.html
 */
export interface IMedicationRequestSubstitution extends IBackboneElement {
  /**
   * Whether substitution is allowed or not
   */
  allowedBoolean?: boolean;
  /**
   * Extension for allowedBoolean
   */
  _allowedBoolean?: IElement;

  /**
   * Whether substitution is allowed or not
   */
  allowedCodeableConcept?: ICodeableConcept;

  /**
   * Why should (not) substitution be made
   */
  reason?: ICodeableConcept;

}
