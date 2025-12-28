import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * MedicationDispenseSubstitution Interface
 * 
 * Whether a substitution was performed on the dispense
 * 
 *
 * @see https://hl7.org/fhir/R5/medicationdispensesubstitution.html
 */
export interface IMedicationDispenseSubstitution extends IBackboneElement {
  /**
   * Whether a substitution was or was not performed on the dispense
   */
  wasSubstituted: boolean;
  /**
   * Extension for wasSubstituted
   */
  _wasSubstituted?: IElement;

  /**
   * Code signifying whether a different drug was dispensed from what was prescribed
   */
  type?: ICodeableConcept;

  /**
   * Why was substitution made
   */
  reason?: ICodeableConcept[];

  /**
   * Who is responsible for the substitution
   */
  responsibleParty?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

}
