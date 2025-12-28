import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';

/**
 * MessageHeaderSource Interface
 * 
 * Message source application
 * 
 *
 * @see https://hl7.org/fhir/R5/messageheadersource.html
 */
export interface IMessageHeaderSource extends IBackboneElement {
  /**
   * Actual source address or Endpoint resource
   */
  endpointUrl?: string;
  /**
   * Extension for endpointUrl
   */
  _endpointUrl?: IElement;

  /**
   * Actual source address or Endpoint resource
   */
  endpointReference?: IReference;

  /**
   * Name of system
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Name of software running the system
   */
  software?: string;
  /**
   * Extension for software
   */
  _software?: IElement;

  /**
   * Version of software running
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Human contact for problems
   */
  contact?: IContactPoint;

}
