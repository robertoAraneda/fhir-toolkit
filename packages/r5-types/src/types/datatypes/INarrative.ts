import type { IDataType, IElement } from '../../base/index.js';
import type { NarrativeStatusType } from '../../valuesets/index.js';

/**
 * Narrative Interface
 * 
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 * 
 *
 * @see https://hl7.org/fhir/R4/narrative.html
 */
export interface INarrative extends IDataType {
  /**
   * generated | extensions | additional | empty
   */
  status: NarrativeStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * Limited xhtml content
   */
  div: string;
  /**
   * Extension for div
   */
  _div?: IElement;

}
