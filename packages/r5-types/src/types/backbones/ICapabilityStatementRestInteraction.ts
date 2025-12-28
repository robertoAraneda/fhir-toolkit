import type { IBackboneElement, IElement } from '../../base/index.js';
import type { SystemRestfulInteractionType } from '../../valuesets/index.js';

/**
 * CapabilityStatementRestInteraction Interface
 * 
 * What operations are supported?
 * 
 *
 * @see https://hl7.org/fhir/R5/capabilitystatementrestinteraction.html
 */
export interface ICapabilityStatementRestInteraction extends IBackboneElement {
  /**
   * transaction | batch | search-system | history-system
   */
  code: SystemRestfulInteractionType;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Anything special about operation behavior
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

}
