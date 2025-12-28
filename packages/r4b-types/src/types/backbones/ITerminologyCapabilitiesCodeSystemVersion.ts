import type { IBackboneElement, IElement } from '../../base/index.js';
import type { ITerminologyCapabilitiesCodeSystemVersionFilter } from './ITerminologyCapabilitiesCodeSystemVersionFilter.js';

/**
 * TerminologyCapabilitiesCodeSystemVersion Interface
 * 
 * Version of Code System supported
 * 
 *
 * @see https://hl7.org/fhir/R4B/terminologycapabilitiescodesystemversion.html
 */
export interface ITerminologyCapabilitiesCodeSystemVersion extends IBackboneElement {
  /**
   * Version identifier for this version
   */
  code?: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * If this is the default version for this code system
   */
  isDefault?: boolean;
  /**
   * Extension for isDefault
   */
  _isDefault?: IElement;

  /**
   * If compositional grammar is supported
   */
  compositional?: boolean;
  /**
   * Extension for compositional
   */
  _compositional?: IElement;

  /**
   * Language Displays supported
   */
  language?: string[];
  /**
   * Extension for language
   */
  _language?: IElement;

  /**
   * Filter Properties supported
   */
  filter?: ITerminologyCapabilitiesCodeSystemVersionFilter[];

  /**
   * Properties supported for $lookup
   */
  property?: string[];
  /**
   * Extension for property
   */
  _property?: IElement;

}
