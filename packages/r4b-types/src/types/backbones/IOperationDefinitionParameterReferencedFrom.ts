import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * OperationDefinitionParameterReferencedFrom Interface
 * 
 * References to this parameter
 * 
 *
 * @see https://hl7.org/fhir/R4B/operationdefinitionparameterreferencedfrom.html
 */
export interface IOperationDefinitionParameterReferencedFrom extends IBackboneElement {
  /**
   * Referencing parameter
   */
  source: string;
  /**
   * Extension for source
   */
  _source?: IElement;

  /**
   * Element id of reference
   */
  sourceId?: string;
  /**
   * Extension for sourceId
   */
  _sourceId?: IElement;

}
