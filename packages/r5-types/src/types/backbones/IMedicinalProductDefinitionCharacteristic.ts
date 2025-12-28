import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * MedicinalProductDefinitionCharacteristic Interface
 * 
 * Key product features such as "sugar free", "modified release"
 * 
 *
 * @see https://hl7.org/fhir/R5/medicinalproductdefinitioncharacteristic.html
 */
export interface IMedicinalProductDefinitionCharacteristic extends IBackboneElement {
  /**
   * A code expressing the type of characteristic
   */
  type: ICodeableConcept;

  /**
   * A value for the characteristic
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * A value for the characteristic
   */
  valueMarkdown?: string;
  /**
   * Extension for valueMarkdown
   */
  _valueMarkdown?: IElement;

  /**
   * A value for the characteristic
   */
  valueQuantity?: IQuantity;

  /**
   * A value for the characteristic
   */
  valueInteger?: number;
  /**
   * Extension for valueInteger
   */
  _valueInteger?: IElement;

  /**
   * A value for the characteristic
   */
  valueDate?: string;
  /**
   * Extension for valueDate
   */
  _valueDate?: IElement;

  /**
   * A value for the characteristic
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * A value for the characteristic
   */
  valueAttachment?: IAttachment;

}
