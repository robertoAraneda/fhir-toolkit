import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * SubstanceInstance Interface
 * 
 * If this describes a specific package/container of the substance
 * 
 *
 * @see https://hl7.org/fhir/R4/substanceinstance.html
 */
export interface ISubstanceInstance extends IBackboneElement {
  /**
   * Identifier of the package/container
   */
  identifier?: IIdentifier;

  /**
   * When no longer valid to use
   */
  expiry?: string;
  /**
   * Extension for expiry
   */
  _expiry?: IElement;

  /**
   * Amount of substance in the package
   */
  quantity?: IQuantity;

}
