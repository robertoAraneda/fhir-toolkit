import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * EvidenceVariableCharacteristicDefinitionByTypeAndValue Interface
 * 
 * Defines the characteristic using type and value
 * 
 *
 * @see https://hl7.org/fhir/R4/evidencevariablecharacteristicdefinitionbytypeandvalue.html
 */
export interface IEvidenceVariableCharacteristicDefinitionByTypeAndValue extends IBackboneElement {
  /**
   * Expresses the type of characteristic
   */
  type: ICodeableConcept;

  /**
   * Method for how the characteristic value was determined
   */
  method?: ICodeableConcept[];

  /**
   * Device used for determining characteristic
   */
  device?: IReference<'Device' | 'DeviceMetric'>;

  /**
   * Defines the characteristic when coupled with characteristic.type
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Defines the characteristic when coupled with characteristic.type
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Defines the characteristic when coupled with characteristic.type
   */
  valueQuantity?: IQuantity;

  /**
   * Defines the characteristic when coupled with characteristic.type
   */
  valueRange?: IRange;

  /**
   * Defines the characteristic when coupled with characteristic.type
   */
  valueReference?: IReference;

  /**
   * Defines the characteristic when coupled with characteristic.type
   */
  valueId?: string;
  /**
   * Extension for valueId
   */
  _valueId?: IElement;

  /**
   * Reference point for valueQuantity or valueRange
   */
  offset?: ICodeableConcept;

}
