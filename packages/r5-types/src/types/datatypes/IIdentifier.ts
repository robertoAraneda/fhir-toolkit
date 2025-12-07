import type { ICodeableConcept, IDataType, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from './IPeriod.js';
import type { IdentifierUseType } from '../../valuesets/index.js';

/**
 * Identifier Interface
 * 
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 * 
 *
 * @see https://hl7.org/fhir/R4/identifier.html
 */
export interface IIdentifier extends IDataType {
  /**
   * usual | official | temp | secondary | old (If known)
   */
  use?: IdentifierUseType;
  /**
   * Extension for use
   */
  _use?: IElement;

  /**
   * Description of identifier
   */
  type?: ICodeableConcept;

  /**
   * The namespace for the identifier value
   */
  system?: string;
  /**
   * Extension for system
   */
  _system?: IElement;

  /**
   * The value that is unique
   */
  value?: string;
  /**
   * Extension for value
   */
  _value?: IElement;

  /**
   * Time period when id is/was valid for use
   */
  period?: IPeriod;

  /**
   * Organization that issued id (may be just text)
   */
  assigner?: IReference<'Organization'>;

}
