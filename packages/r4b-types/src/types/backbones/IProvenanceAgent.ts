import type { IBackboneElement, ICodeableConcept, IReference } from '../../base/index.js';

/**
 * ProvenanceAgent Interface
 * 
 * Actor involved
 * 
 *
 * @see https://hl7.org/fhir/R4B/provenanceagent.html
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
   * Who participated
   */
  who: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Patient' | 'Device' | 'Organization'>;

  /**
   * Who the agent is representing
   */
  onBehalfOf?: IReference<'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Patient' | 'Device' | 'Organization'>;

}
