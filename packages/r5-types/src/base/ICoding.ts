import type { IElement } from './IElement.js';

/**
 * Coding Interface
 *
 * A reference to a code defined by a terminology system.
 *
 * @typeParam T - The type of the code value, defaults to string
 * @see https://hl7.org/fhir/R4/coding.html
 */
export interface ICoding<T extends string = string> extends IElement {
  /**
   * Identity of the terminology system
   */
  system?: string;
  /**
   * Extension for system
   */
  _system?: IElement;

  /**
   * Version of the system - if relevant
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * Symbol in syntax defined by the system
   */
  code?: T;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Representation defined by the system
   */
  display?: string;
  /**
   * Extension for display
   */
  _display?: IElement;

  /**
   * If this coding was chosen directly by the user
   */
  userSelected?: boolean;
  /**
   * Extension for userSelected
   */
  _userSelected?: IElement;
}
