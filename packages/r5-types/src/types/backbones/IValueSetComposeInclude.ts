import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IValueSetComposeIncludeConcept } from './IValueSetComposeIncludeConcept.js';
import type { IValueSetComposeIncludeFilter } from './IValueSetComposeIncludeFilter.js';

/**
 * ValueSetComposeInclude Interface
 * 
 * Include one or more codes from a code system or other value set(s)
 * 
 *
 * @see https://hl7.org/fhir/R5/valuesetcomposeinclude.html
 */
export interface IValueSetComposeInclude extends IBackboneElement {
  /**
   * The system the codes come from
   */
  system?: string;
  /**
   * Extension for system
   */
  _system?: IElement;

  /**
   * Specific version of the code system referred to
   */
  version?: string;
  /**
   * Extension for version
   */
  _version?: IElement;

  /**
   * A concept defined in the system
   */
  concept?: IValueSetComposeIncludeConcept[];

  /**
   * Select codes/concepts by their properties (including relationships)
   */
  filter?: IValueSetComposeIncludeFilter[];

  /**
   * Select the contents included in this value set
   */
  valueSet?: string[];
  /**
   * Extension for valueSet
   */
  _valueSet?: IElement;

  /**
   * A copyright statement for the specific code system included in the value set
   */
  copyright?: string;
  /**
   * Extension for copyright
   */
  _copyright?: IElement;

}
