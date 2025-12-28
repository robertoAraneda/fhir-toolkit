import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';

/**
 * EvidenceStatisticSampleSize Interface
 * 
 * Number of samples in the statistic
 * 
 *
 * @see https://hl7.org/fhir/R5/evidencestatisticsamplesize.html
 */
export interface IEvidenceStatisticSampleSize extends IBackboneElement {
  /**
   * Textual description of sample size for statistic
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Footnote or explanatory note about the sample size
   */
  note?: IAnnotation[];

  /**
   * Number of contributing studies
   */
  numberOfStudies?: number;
  /**
   * Extension for numberOfStudies
   */
  _numberOfStudies?: IElement;

  /**
   * Cumulative number of participants
   */
  numberOfParticipants?: number;
  /**
   * Extension for numberOfParticipants
   */
  _numberOfParticipants?: IElement;

  /**
   * Number of participants with known results for measured variables
   */
  knownDataCount?: number;
  /**
   * Extension for knownDataCount
   */
  _knownDataCount?: IElement;

}
