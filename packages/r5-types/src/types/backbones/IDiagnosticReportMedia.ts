import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * DiagnosticReportMedia Interface
 * 
 * Key images or data associated with this report
 * 
 *
 * @see https://hl7.org/fhir/R5/diagnosticreportmedia.html
 */
export interface IDiagnosticReportMedia extends IBackboneElement {
  /**
   * Comment about the image or data (e.g. explanation)
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

  /**
   * Reference to the image or data source
   */
  link: IReference<'DocumentReference'>;

}
