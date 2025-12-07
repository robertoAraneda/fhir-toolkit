import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * SubstanceDefinitionProperty Interface
 * 
 * General specifications for this substance
 * 
 *
 * @see https://hl7.org/fhir/R4/substancedefinitionproperty.html
 */
export interface ISubstanceDefinitionProperty extends IBackboneElement {
  /**
   * A code expressing the type of property
   */
  type: ICodeableConcept;

  /**
   * A value for the property
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * A value for the property
   */
  valueQuantity?: IQuantity;

  /**
   * A value for the property
   */
  valueDate?: string;
  /**
   * Extension for valueDate
   */
  _valueDate?: IElement;

  /**
   * A value for the property
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * A value for the property
   */
  valueAttachment?: IAttachment;

}
