import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * NutritionProductProductCharacteristic Interface
 * 
 * Specifies descriptive properties of the nutrition product
 * 
 *
 * @see https://hl7.org/fhir/R4B/nutritionproductproductcharacteristic.html
 */
export interface INutritionProductProductCharacteristic extends IBackboneElement {
  /**
   * Code specifying the type of characteristic
   */
  type: ICodeableConcept;

  /**
   * The value of the characteristic
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * The value of the characteristic
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * The value of the characteristic
   */
  valueQuantity?: IQuantity;

  /**
   * The value of the characteristic
   */
  valueBase64Binary?: string;
  /**
   * Extension for valueBase64Binary
   */
  _valueBase64Binary?: IElement;

  /**
   * The value of the characteristic
   */
  valueAttachment?: IAttachment;

  /**
   * The value of the characteristic
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

}
