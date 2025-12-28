import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ConsentProvisionActor Interface
 * 
 * Who|what controlled by this provision (or group, by role)
 * 
 *
 * @see https://hl7.org/fhir/R5/consentprovisionactor.html
 */
export interface IConsentProvisionActor extends IBackboneElement {
  /**
   * How the actor is involved
   */
  role?: ICodeableConcept;

  /**
   * Resource for the actor (or group, by role)
   */
  reference?: IReference<'Device' | 'Group' | 'CareTeam' | 'Organization' | 'Patient' | 'Practitioner' | 'RelatedPerson' | 'PractitionerRole'>;

}
