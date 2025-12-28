import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * ManufacturedItemDefinitionProperty Interface
 * 
 * General characteristics of this item
 * 
 *
 * @see https://hl7.org/fhir/R5/manufactureditemdefinitionproperty.html
 */
export interface IManufacturedItemDefinitionProperty extends IBackboneElement {
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
  valueQuantity?: IQuantity;

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
  valueMarkdown?: string;
  /**
   * Extension for valueMarkdown
   */
  _valueMarkdown?: IElement;

  /**
   * A value for the characteristic
   */
  valueAttachment?: IAttachment;

  /**
   * A value for the characteristic
   */
  valueReference?: IReference;

}
