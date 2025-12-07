import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ProvenanceAgent Interface
 * 
 * Actor involved
 * 
 *
 * @see https://hl7.org/fhir/R4/provenanceagent.html
 */
export interface IProvenanceAgent extends IBackboneElement {
  /**
   * How the agent participated
   */
  type?: ICodeableConcept;

  /**
   * What the agents role was
   */
  role?: ICodeableConcept[];

  /**
   * The agent that participated in the event
   */
  who: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>;

  /**
   * The agent that delegated
   */
  onBehalfOf?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient'>;

}
