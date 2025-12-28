import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IValueSetExpansionContains } from './IValueSetExpansionContains.js';
import type { IValueSetExpansionParameter } from './IValueSetExpansionParameter.js';

/**
 * ValueSetExpansion Interface
 * 
 * Used when the value set is "expanded"
 * 
 *
 * @see https://hl7.org/fhir/R4B/valuesetexpansion.html
 */
export interface IValueSetExpansion extends IBackboneElement {
  /**
   * Identifies the value set expansion (business identifier)
   */
  identifier?: string;
  /**
   * Extension for identifier
   */
  _identifier?: IElement;

  /**
   * Time ValueSet expansion happened
   */
  timestamp: string;
  /**
   * Extension for timestamp
   */
  _timestamp?: IElement;

  /**
   * Total number of codes in the expansion
   */
  total?: number;
  /**
   * Extension for total
   */
  _total?: IElement;

  /**
   * Offset at which this resource starts
   */
  offset?: number;
  /**
   * Extension for offset
   */
  _offset?: IElement;

  /**
   * Parameter that controlled the expansion process
   */
  parameter?: IValueSetExpansionParameter[];

  /**
   * Codes in the value set
   */
  contains?: IValueSetExpansionContains[];

}
