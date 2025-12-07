import type { IBackboneElement, IElement } from '../../base/index.js';

/**
 * ValueSetExpansionParameter Interface
 * 
 * Parameter that controlled the expansion process
 * 
 *
 * @see https://hl7.org/fhir/R4/valuesetexpansionparameter.html
 */
export interface IValueSetExpansionParameter extends IBackboneElement {
  /**
   * Name as assigned by the client or server
   */
  name: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Value of the named parameter
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Value of the named parameter
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Value of the named parameter
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Value of the named parameter
   */
  valueDecimal?: number;
  /**
   * Extension for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * Value of the named parameter
   */
  valueUri?: string;
  /**
   * Extension for valueUri
   */
  _valueUri?: IElement;

  /**
   * Value of the named parameter
   */
  valueCode?: string;
  /**
   * Extension for valueCode
   */
  _valueCode?: IElement;

  /**
   * Value of the named parameter
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

}
