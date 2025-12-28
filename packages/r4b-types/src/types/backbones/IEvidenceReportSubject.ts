import type { IBackboneElement } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IEvidenceReportSubjectCharacteristic } from './IEvidenceReportSubjectCharacteristic.js';

/**
 * EvidenceReportSubject Interface
 * 
 * Focus of the report
 * 
 *
 * @see https://hl7.org/fhir/R4B/evidencereportsubject.html
 */
export interface IEvidenceReportSubject extends IBackboneElement {
  /**
   * Characteristic
   */
  characteristic?: IEvidenceReportSubjectCharacteristic[];

  /**
   * Footnotes and/or explanatory notes
   */
  note?: IAnnotation[];

}
