import type { IBackboneElement, IElement, IReference } from '../../base/index.js';

/**
 * DiagnosticReportMedia Interface
 * 
 * Key images associated with this report
 * 
 *
 * @see https://hl7.org/fhir/R4/diagnosticreportmedia.html
 */
export interface IDiagnosticReportMedia extends IBackboneElement {
  /**
   * Comment about the image (e.g. explanation)
   */
  comment?: string;
  /**
   * Extension for comment
   */
  _comment?: IElement;

  /**
   * Reference to the image source
   */
  link: IReference<'Media'>;

}
