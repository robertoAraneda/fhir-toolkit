import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';

/**
 * MedicationKnowledgeDrugCharacteristic Interface
 * 
 * Specifies descriptive properties of the medicine
 * 
 *
 * @see https://hl7.org/fhir/R4B/medicationknowledgedrugcharacteristic.html
 */
export interface IMedicationKnowledgeDrugCharacteristic extends IBackboneElement {
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

}
