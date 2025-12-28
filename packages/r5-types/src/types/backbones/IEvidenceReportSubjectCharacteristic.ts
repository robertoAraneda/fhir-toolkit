import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * EvidenceReportSubjectCharacteristic Interface
 * 
 * Characteristic
 * 
 *
 * @see https://hl7.org/fhir/R5/evidencereportsubjectcharacteristic.html
 */
export interface IEvidenceReportSubjectCharacteristic extends IBackboneElement {
  /**
   * Characteristic code
   */
  code: ICodeableConcept;

  /**
   * Characteristic value
   */
  valueReference?: IReference;

  /**
   * Characteristic value
   */
  valueCodeableConcept?: ICodeableConcept;

  /**
   * Characteristic value
   */
  valueBoolean?: boolean;
  /**
   * Extension for valueBoolean
   */
  _valueBoolean?: IElement;

  /**
   * Characteristic value
   */
  valueQuantity?: IQuantity;

  /**
   * Characteristic value
   */
  valueRange?: IRange;

  /**
   * Is used to express not the characteristic
   */
  exclude?: boolean;
  /**
   * Extension for exclude
   */
  _exclude?: IElement;

  /**
   * Timeframe for the characteristic
   */
  period?: IPeriod;

}
