import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * EncounterParticipant Interface
 * 
 * List of participants involved in the encounter
 * 
 *
 * @see https://hl7.org/fhir/R4/encounterparticipant.html
 */
export interface IEncounterParticipant extends IBackboneElement {
  /**
   * Role of participant in encounter
   */
  type?: ICodeableConcept[];

  /**
   * Period of time during the encounter that the participant participated
   */
  period?: IPeriod;

  /**
   * The individual, device, or service participating in the encounter
   */
  actor?: IReference<'Patient' | 'Group' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'HealthcareService'>;

}
