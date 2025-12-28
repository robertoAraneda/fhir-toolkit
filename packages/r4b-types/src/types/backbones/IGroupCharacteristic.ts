import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * GroupCharacteristic Interface
 * 
 * Include / Exclude group members by Trait
 * 
 *
 * @see https://hl7.org/fhir/R4B/groupcharacteristic.html
 */
export interface IGroupCharacteristic extends IBackboneElement {
  /**
   * Kind of characteristic
   */
  code: ICodeableConcept;

  /**
   * Value held by characteristic
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Value held by characteristic
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Value held by characteristic
   */
  valueQuantity?: IQuantity;

  /**
   * Value held by characteristic
   */
  valueRange?: IRange;

  /**
   * Value held by characteristic
   */
  valueReference?: IReference;

  /**
   * Group includes or excludes
   */
  exclude: boolean;
  /**
   * Extension for exclude
   */
  _exclude?: IElement;

  /**
   * Period over which characteristic is tested
   */
  period?: IPeriod;

}
