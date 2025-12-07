import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IValueSetComposeInclude } from './IValueSetComposeInclude.js';

/**
 * ValueSetCompose Interface
 * 
 * Content logical definition of the value set (CLD)
 * 
 *
 * @see https://hl7.org/fhir/R4/valuesetcompose.html
 */
export interface IValueSetCompose extends IBackboneElement {
  /**
   * Fixed date for references with no specified version (transitive)
   */
  lockedDate?: string;
  /**
   * Extension for lockedDate
   */
  _lockedDate?: IElement;

  /**
   * Whether inactive codes are in the value set
   */
  inactive?: boolean;
  /**
   * Extension for inactive
   */
  _inactive?: IElement;

  /**
   * Include one or more codes from a code system or other value set(s)
   */
  include: IValueSetComposeInclude[];

  /**
   * Explicitly exclude codes from a code system or other value sets
   */
  exclude?: IValueSetComposeInclude[];

  /**
   * Property to return if client doesn't override
   */
  property?: string[];
  /**
   * Extension for property
   */
  _property?: IElement;

}
