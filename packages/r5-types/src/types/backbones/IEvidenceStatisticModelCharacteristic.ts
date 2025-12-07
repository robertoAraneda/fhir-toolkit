import type { IBackboneElement, ICodeableConcept } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IEvidenceStatisticAttributeEstimate } from './IEvidenceStatisticAttributeEstimate.js';
import type { IEvidenceStatisticModelCharacteristicVariable } from './IEvidenceStatisticModelCharacteristicVariable.js';

/**
 * EvidenceStatisticModelCharacteristic Interface
 * 
 * An aspect of the statistical model
 * 
 *
 * @see https://hl7.org/fhir/R4/evidencestatisticmodelcharacteristic.html
 */
export interface IEvidenceStatisticModelCharacteristic extends IBackboneElement {
  /**
   * Model specification
   */
  code: ICodeableConcept;

  /**
   * Numerical value to complete model specification
   */
  value?: IQuantity;

  /**
   * A variable adjusted for in the adjusted analysis
   */
  variable?: IEvidenceStatisticModelCharacteristicVariable[];

  /**
   * An attribute of the statistic used as a model characteristic
   */
  attributeEstimate?: IEvidenceStatisticAttributeEstimate[];

}
