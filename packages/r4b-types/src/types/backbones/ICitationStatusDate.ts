import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IPeriod } from '../datatypes/IPeriod.js';

/**
 * CitationStatusDate Interface
 * 
 * An effective date or period for a status of the citation
 * 
 *
 * @see https://hl7.org/fhir/R4/citationstatusdate.html
 */
export interface ICitationStatusDate extends IBackboneElement {
  /**
   * Classification of the status
   */
  activity: ICodeableConcept;

  /**
   * Either occurred or expected
   */
  actual?: boolean;
  /**
   * Extension for actual
   */
  _actual?: IElement;

  /**
   * When the status started and/or ended
   */
  period: IPeriod;

}
