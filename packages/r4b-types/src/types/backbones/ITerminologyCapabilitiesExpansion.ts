import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ITerminologyCapabilitiesExpansionParameter } from './ITerminologyCapabilitiesExpansionParameter.js';

/**
 * TerminologyCapabilitiesExpansion Interface
 * 
 * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation
 * 
 *
 * @see https://hl7.org/fhir/R4B/terminologycapabilitiesexpansion.html
 */
export interface ITerminologyCapabilitiesExpansion extends IBackboneElement {
  /**
   * Whether the server can return nested value sets
   */
  hierarchical?: boolean;
  /**
   * Extension for hierarchical
   */
  _hierarchical?: IElement;

  /**
   * Whether the server supports paging on expansion
   */
  paging?: boolean;
  /**
   * Extension for paging
   */
  _paging?: IElement;

  /**
   * Allow request for incomplete expansions?
   */
  incomplete?: boolean;
  /**
   * Extension for incomplete
   */
  _incomplete?: IElement;

  /**
   * Supported expansion parameter
   */
  parameter?: ITerminologyCapabilitiesExpansionParameter[];

  /**
   * Documentation about text searching works
   */
  textFilter?: string;
  /**
   * Extension for textFilter
   */
  _textFilter?: IElement;

}
