import type { IBackboneElement, IElement } from '../../base/index.js';
import type { AuditEventAgentNetworkTypeType } from '../../valuesets/index.js';

/**
 * AuditEventAgentNetwork Interface
 * 
 * Logical network location for application activity
 * 
 *
 * @see https://hl7.org/fhir/R4/auditeventagentnetwork.html
 */
export interface IAuditEventAgentNetwork extends IBackboneElement {
  /**
   * Identifier for the network access point of the user device
   */
  address?: string;
  /**
   * Extension for address
   */
  _address?: IElement;

  /**
   * The type of network access point
   */
  type?: AuditEventAgentNetworkTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

}
