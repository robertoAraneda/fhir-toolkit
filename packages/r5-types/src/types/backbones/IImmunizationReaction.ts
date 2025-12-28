import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ICodeableReference } from '../datatypes/ICodeableReference.js';

/**
 * ImmunizationReaction Interface
 * 
 * Details of a reaction that follows immunization
 * 
 *
 * @see https://hl7.org/fhir/R5/immunizationreaction.html
 */
export interface IImmunizationReaction extends IBackboneElement {
  /**
   * When reaction started
   */
  date?: string;
  /**
   * Extension for date
   */
  _date?: IElement;

  /**
   * Additional information on reaction
   */
  manifestation?: ICodeableReference;

  /**
   * Indicates self-reported reaction
   */
  reported?: boolean;
  /**
   * Extension for reported
   */
  _reported?: IElement;

}
