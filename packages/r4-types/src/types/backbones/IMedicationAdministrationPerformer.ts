import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * MedicationAdministrationPerformer Interface
 * 
 * Who performed the medication administration and what they did
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationadministrationperformer.html
 */
export interface IMedicationAdministrationPerformer extends IBackboneElement {
  /**
   * Type of performance
   */
  function?: ICodeableConcept;

  /**
   * Who performed the medication administration
   */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson' | 'Device'>;

}
