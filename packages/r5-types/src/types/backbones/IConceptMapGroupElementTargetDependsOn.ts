import type { IBackboneElement, ICoding, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * ConceptMapGroupElementTargetDependsOn Interface
 * 
 * Other properties required for this mapping
 * 
 *
 * @see https://hl7.org/fhir/R4/conceptmapgroupelementtargetdependson.html
 */
export interface IConceptMapGroupElementTargetDependsOn extends IBackboneElement {
  /**
   * A reference to a mapping attribute defined in ConceptMap.additionalAttribute
   */
  attribute: string;
  /**
   * Extension for attribute
   */
  _attribute?: IElement;

  /**
   * Value of the referenced data element
   */
  valueCode?: string;
  /**
   * Extension for valueCode
   */
  _valueCode?: IElement;

  /**
   * Value of the referenced data element
   */
  valueCoding?: ICoding;

  /**
   * Value of the referenced data element
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Value of the referenced data element
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Value of the referenced data element
   */
  valueQuantity?: IQuantity;

  /**
   * The mapping depends on a data element with a value from this value set
   */
  valueSet?: string;
  /**
   * Extension for valueSet
   */
  _valueSet?: IElement;

}
