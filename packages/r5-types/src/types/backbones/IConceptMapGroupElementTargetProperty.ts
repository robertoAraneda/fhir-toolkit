import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';

/**
 * ConceptMapGroupElementTargetProperty Interface
 * 
 * Property value for the source -> target mapping
 * 
 *
 * @see https://hl7.org/fhir/R4/conceptmapgroupelementtargetproperty.html
 */
export interface IConceptMapGroupElementTargetProperty extends IBackboneElement {
  /**
   * Reference to ConceptMap.property.code
   */
  code: string;
  /**
   * Extension for code
   */
  _code?: IElement;

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
   * Value of the property for this concept
   */
  valueCode?: string;
  /**
   * Extension for valueCode
   */
  _valueCode?: IElement;

}
