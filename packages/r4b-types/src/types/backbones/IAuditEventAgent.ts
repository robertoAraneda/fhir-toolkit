import type { IBackboneElement, ICodeableConcept, ICoding, IElement, IReference } from '../../base/index.js';
import type { IAuditEventAgentNetwork } from './IAuditEventAgentNetwork.js';

/**
 * AuditEventAgent Interface
 * 
 * Actor involved in the event
 * 
 *
 * @see https://hl7.org/fhir/R4/auditeventagent.html
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
  who?: IReference<'PractitionerRole' | 'Practitioner' | 'Organization' | 'Device' | 'Patient' | 'RelatedPerson'>;

  /**
   * Alternative User identity
   */
  altId?: string;
  /**
   * Extension for altId
   */
  _altId?: IElement;

  /**
   * Human friendly name for the agent
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Whether user is initiator
   */
  requestor: boolean;
  /**
   * Extension for requestor
   */
  _requestor?: IElement;

  /**
   * Where
   */
  location?: IReference<'Location'>;

  /**
   * Policy that authorized event
   */
  policy?: string[];
  /**
   * Extension for policy
   */
  _policy?: IElement;

  /**
   * Type of media
   */
  media?: ICoding;

  /**
   * Logical network location for application activity
   */
  network?: IAuditEventAgentNetwork;

  /**
   * Reason given for this user
   */
  purposeOfUse?: ICodeableConcept[];

}
