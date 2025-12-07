import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * MedicationKnowledgeDefinitionalDrugCharacteristic Interface
 * 
 * Specifies descriptive properties of the medicine
 * 
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgedefinitionaldrugcharacteristic.html
 */
export interface IMedicationKnowledgeDefinitionalDrugCharacteristic extends IBackboneElement {
  /**
   * Code specifying the type of characteristic of medication
   */
  type?: ICodeableConcept;

  /**
   * Description of the characteristic
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Description of the characteristic
   */
  valueString?: string;
  /**
   * Extension for valueString
   */
  _valueString?: IElement;

  /**
   * Description of the characteristic
   */
  valueQuantity?: IQuantity;

  /**
   * Description of the characteristic
   */
  valueBase64Binary?: string;
  /**
   * Extension for valueBase64Binary
   */
  _valueBase64Binary?: IElement;

  /**
   * Description of the characteristic
   */
  valueAttachment?: IAttachment;

}
