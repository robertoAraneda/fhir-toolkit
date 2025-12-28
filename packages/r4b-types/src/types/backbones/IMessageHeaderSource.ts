import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IContactPoint } from '../datatypes/IContactPoint.js';

/**
 * MessageHeaderSource Interface
 * 
 * Message source application
 * 
 *
 * @see https://hl7.org/fhir/R4B/messageheadersource.html
 */
export interface IMessageHeaderSource extends IBackboneElement {
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

  /**
   * Actual message source address or id
   */
  endpoint: string;
  /**
   * Extension for endpoint
   */
  _endpoint?: IElement;

}
