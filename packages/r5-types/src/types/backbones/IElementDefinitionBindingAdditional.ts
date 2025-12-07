import type { IElement } from '../../base/index.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { AdditionalBindingPurposeVSType } from '../../valuesets/index.js';

/**
 * ElementDefinitionBindingAdditional Interface
 * 
 * Additional Bindings - more rules about the binding
 * 
 *
 * @see https://hl7.org/fhir/R4/elementdefinitionbindingadditional.html
 */
export interface IElementDefinitionBindingAdditional extends IElement {
  /**
   * maximum | minimum | required | extensible | candidate | current | preferred | ui | starter | component
   */
  purpose: AdditionalBindingPurposeVSType;
  /**
   * Extension for purpose
   */
  _purpose?: IElement;

  /**
   * The value set for the additional binding
   */
  valueSet: string;
  /**
   * Extension for valueSet
   */
  _valueSet?: IElement;

  /**
   * Documentation of the purpose of use of the binding
   */
  documentation?: string;
  /**
   * Extension for documentation
   */
  _documentation?: IElement;

  /**
   * Concise documentation - for summary tables
   */
  shortDoco?: string;
  /**
   * Extension for shortDoco
   */
  _shortDoco?: IElement;

  /**
   * Qualifies the usage - jurisdiction, gender, workflow status etc.
   */
  usage?: IUsageContext[];

  /**
   * Whether binding can applies to all repeats, or just one
   */
  any?: boolean;
  /**
   * Extension for any
   */
  _any?: IElement;

}
