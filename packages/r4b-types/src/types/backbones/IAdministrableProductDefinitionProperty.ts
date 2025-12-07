import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * AdministrableProductDefinitionProperty Interface
 * 
 * Characteristics e.g. a product's onset of action
 * 
 *
 * @see https://hl7.org/fhir/R4/administrableproductdefinitionproperty.html
 */
export interface IAdministrableProductDefinitionProperty extends IBackboneElement {
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
  valueAttachment?: IAttachment;

  /**
   * The status of characteristic e.g. assigned or pending
   */
  status?: ICodeableConcept<PublicationStatusType>;

}
