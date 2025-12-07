import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IEvidenceStatisticAttributeEstimate } from './IEvidenceStatisticAttributeEstimate.js';
import type { IEvidenceStatisticModelCharacteristic } from './IEvidenceStatisticModelCharacteristic.js';
import type { IEvidenceStatisticSampleSize } from './IEvidenceStatisticSampleSize.js';

/**
 * EvidenceStatistic Interface
 * 
 * Values and parameters for a single statistic
 * 
 *
 * @see https://hl7.org/fhir/R4/evidencestatistic.html
 */
export interface IEvidenceStatistic extends IBackboneElement {
  /**
   * Description of content
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Footnotes and/or explanatory notes
   */
  note?: IAnnotation[];

  /**
   * Type of statistic, e.g., relative risk
   */
  statisticType?: ICodeableConcept;

  /**
   * Associated category for categorical variable
   */
  category?: ICodeableConcept;

  /**
   * Statistic value
   */
  quantity?: IQuantity;

  /**
   * The number of events associated with the statistic
   */
  numberOfEvents?: number;
  /**
   * Extension for numberOfEvents
   */
  _numberOfEvents?: IElement;

  /**
   * The number of participants affected
   */
  numberAffected?: number;
  /**
   * Extension for numberAffected
   */
  _numberAffected?: IElement;

  /**
   * Number of samples in the statistic
   */
  sampleSize?: IEvidenceStatisticSampleSize;

  /**
   * An attribute of the Statistic
   */
  attributeEstimate?: IEvidenceStatisticAttributeEstimate[];

  /**
   * An aspect of the statistical model
   */
  modelCharacteristic?: IEvidenceStatisticModelCharacteristic[];

}
