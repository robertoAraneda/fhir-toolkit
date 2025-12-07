import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * ImmunizationReaction Interface
 * 
 * Details of a reaction that follows immunization
 * 
 *
 * @see https://hl7.org/fhir/R4/immunizationreaction.html
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
  detail?: IReference<'Observation'>;

  /**
   * Indicates self-reported reaction
   */
  reported?: boolean;
  /**
   * Extension for reported
   */
  _reported?: IElement;

}
