import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { NamingSystemIdentifierTypeType } from '../../valuesets/index.js';

/**
 * NamingSystemUniqueId Interface
 * 
 * Unique identifiers used for system
 * 
 *
 * @see https://hl7.org/fhir/R4B/namingsystemuniqueid.html
 */
export interface INamingSystemUniqueId extends IBackboneElement {
  /**
   * oid | uuid | uri | other
   */
  type: NamingSystemIdentifierTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * The unique identifier
   */
  value: string;
  /**
   * Extension for value
   */
  _value?: IElement;

  /**
   * Is this the id that should be used for this type
   */
  preferred?: boolean;
  /**
   * Extension for preferred
   */
  _preferred?: IElement;

  /**
   * Notes about identifier usage
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

  /**
   * When is identifier valid?
   */
  period?: IPeriod;

}
