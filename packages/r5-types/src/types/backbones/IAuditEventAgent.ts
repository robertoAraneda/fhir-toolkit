import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';

/**
 * AuditEventAgent Interface
 * 
 * Actor involved in the event
 * 
 *
 * @see https://hl7.org/fhir/R5/auditeventagent.html
 */
export interface IAuditEventAgent extends IBackboneElement {
  /**
   * How agent participated
   */
  type?: ICodeableConcept;

  /**
   * Agent role in the event
   */
  role?: ICodeableConcept[];

  /**
   * Identifier of who
   */
  who: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>;

  /**
   * Whether user is initiator
   */
  requestor?: boolean;
  /**
   * Extension for requestor
   */
  _requestor?: IElement;

  /**
   * The agent location when the event occurred
   */
  location?: IReference<'Location'>;

  /**
   * Policy that authorized the agent participation in the event
   */
  policy?: string[];
  /**
   * Extension for policy
   */
  _policy?: IElement;

  /**
   * This agent network location for the activity
   */
  networkReference?: IReference;

  /**
   * This agent network location for the activity
   */
  networkUri?: string;
  /**
   * Extension for networkUri
   */
  _networkUri?: IElement;

  /**
   * This agent network location for the activity
   */
  networkString?: string;
  /**
   * Extension for networkString
   */
  _networkString?: IElement;

  /**
   * Allowable authorization for this agent
   */
  authorization?: ICodeableConcept[];

}
