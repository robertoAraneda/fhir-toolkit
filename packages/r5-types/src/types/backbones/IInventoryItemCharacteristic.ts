import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAddress } from '../datatypes/IAddress.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IRatio } from '../datatypes/IRatio.js';

/**
 * InventoryItemCharacteristic Interface
 * 
 * Characteristic of the item
 * 
 *
 * @see https://hl7.org/fhir/R4/inventoryitemcharacteristic.html
 */
export interface IInventoryItemCharacteristic extends IBackboneElement {
  /**
   * The characteristic that is being defined
   */
  characteristicType: ICodeableConcept;

  /**
   * The value of the attribute
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * The value of the attribute
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * The value of the attribute
   */
  valueDecimal?: number;
  /**
   * Extension for valueDecimal
   */
  _valueDecimal?: IElement;

  /**
   * The value of the attribute
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * The value of the attribute
   */
  valueUrl?: string;
  /**
   * Extension for valueUrl
   */
  _valueUrl?: IElement;

  /**
   * The value of the attribute
   */
  valueDateTime?: string;
  /**
   * Extension for valueDateTime
   */
  _valueDateTime?: IElement;

  /**
   * The value of the attribute
   */
  valueQuantity?: IQuantity;

  /**
   * The value of the attribute
   */
  valueRange?: IRange;

  /**
   * The value of the attribute
   */
  valueRatio?: IRatio;

  /**
   * The value of the attribute
   */
  valueAnnotation?: IAnnotation;

  /**
   * The value of the attribute
   */
  valueAddress?: IAddress;

  /**
   * The value of the attribute
   */
  valueDuration?: IDuration;

  /**
   * The value of the attribute
   */
  valueCodeableConcept?: ICodeableConcept;

}
