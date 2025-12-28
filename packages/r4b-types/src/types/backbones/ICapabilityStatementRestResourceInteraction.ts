import type { IBackboneElement, IElement } from '../../base/index.js';
import type { TypeRestfulInteractionType } from '../../valuesets/index.js';

/**
 * CapabilityStatementRestResourceInteraction Interface
 * 
 * What operations are supported?
 * 
 *
 * @see https://hl7.org/fhir/R4B/capabilitystatementrestresourceinteraction.html
 */
export interface ICapabilityStatementRestResourceInteraction extends IBackboneElement {
  /**
   * read | vread | update | patch | delete | history-instance | history-type | create | search-type
   */
  code: TypeRestfulInteractionType;
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
