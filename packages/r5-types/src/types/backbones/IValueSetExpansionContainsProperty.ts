import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';
import type { IValueSetExpansionContainsPropertySubProperty } from './IValueSetExpansionContainsPropertySubProperty.js';

/**
 * ValueSetExpansionContainsProperty Interface
 * 
 * Property value for the concept
 * 
 *
 * @see https://hl7.org/fhir/R5/valuesetexpansioncontainsproperty.html
 */
export interface IValueSetExpansionContainsProperty extends IBackboneElement {
  /**
   * Reference to ValueSet.expansion.property.code
   */
  code: string;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Value of the property for this concept
   */
  valueCode?: string;
  /**
   * Extension for valueCode
   */
  _valueCode?: IElement;

  /**
   * Value of the property for this concept
   */
  valueCoding?: ICoding;

  /**
   * Value of the property for this concept
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Value of the property for this concept
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Value of the property for this concept
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Value of the property for this concept
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * Value of the property for this concept
   */
  valueDecimal?: number;
  /**
   * Extension for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * SubProperty value for the concept
   */
  subProperty?: IValueSetExpansionContainsPropertySubProperty[];

}
