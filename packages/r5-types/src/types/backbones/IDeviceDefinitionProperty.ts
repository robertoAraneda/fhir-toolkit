import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * DeviceDefinitionProperty Interface
 * 
 * Inherent, essentially fixed, characteristics of this kind of device, e.g., time properties, size, etc
 * 
 *
 * @see https://hl7.org/fhir/R5/devicedefinitionproperty.html
 */
export interface IDeviceDefinitionProperty extends IBackboneElement {
  /**
   * Code that specifies the property being represented
   */
  type: ICodeableConcept;

  /**
   * Value of the property
   */
  valueQuantity?: IQuantity;

  /**
   * Value of the property
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Value of the property
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Value of the property
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Value of the property
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * Value of the property
   */
  valueRange?: IRange;

  /**
   * Value of the property
   */
  valueAttachment?: IAttachment;

}
