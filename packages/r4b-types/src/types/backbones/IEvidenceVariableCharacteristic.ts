import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IExpression } from '../datatypes/IExpression.js';
import type { IEvidenceVariableCharacteristicTimeFromStart } from './IEvidenceVariableCharacteristicTimeFromStart.js';
import type { GroupMeasureType } from '../../valuesets/index.js';

/**
 * EvidenceVariableCharacteristic Interface
 * 
 * What defines the members of the evidence element
 * 
 *
 * @see https://hl7.org/fhir/R4/evidencevariablecharacteristic.html
 */
export interface IEvidenceVariableCharacteristic extends IBackboneElement {
  /**
   * Natural language description of the characteristic
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * What code or expression defines members?
   */
  definitionReference?: IReference;

  /**
   * What code or expression defines members?
   */
  definitionCanonical?: string;
  /**
   * Extension for definitionCanonical
   */
  _definitionCanonical?: IElement;

  /**
   * What code or expression defines members?
   */
  definitionCodeableConcept?: ICodeableConcept;

  /**
   * What code or expression defines members?
   */
  definitionExpression?: IExpression;

  /**
   * Method used for describing characteristic
   */
  method?: ICodeableConcept;

  /**
   * Device used for determining characteristic
   */
  device?: IReference<'Device' | 'DeviceMetric'>;

  /**
   * Whether the characteristic includes or excludes members
   */
  exclude?: boolean;
  /**
   * Extension for exclude
   */
  _exclude?: IElement;

  /**
   * Observation time from study start
   */
  timeFromStart?: IEvidenceVariableCharacteristicTimeFromStart;

  /**
   * mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median
   */
  groupMeasure?: GroupMeasureType;
  /**
   * Extension for groupMeasure
   */
  _groupMeasure?: IElement;

}
