import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * MedicationDispensePerformer Interface
 * 
 * Who performed event
 * 
 *
 * @see https://hl7.org/fhir/R5/medicationdispenseperformer.html
 */
export interface IMedicationDispensePerformer extends IBackboneElement {
  /**
   * Who performed the dispense and what they did
   */
  function?: ICodeableConcept;

  /**
   * Individual who was performing
   */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'Patient' | 'Device' | 'RelatedPerson' | 'CareTeam'>;

}
