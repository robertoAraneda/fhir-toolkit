import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';

/**
 * EvidenceReportRelatesToTarget Interface
 * 
 * Target of the relationship
 * 
 *
 * @see https://hl7.org/fhir/R5/evidencereportrelatestotarget.html
 */
export interface IEvidenceReportRelatesToTarget extends IBackboneElement {
  /**
   * Target of the relationship URL
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * Target of the relationship Identifier
   */
  identifier?: IIdentifier;

  /**
   * Target of the relationship Display
   */
  display?: string;
  /**
   * Extension for display
   */
  _display?: IElement;

  /**
   * Target of the relationship Resource reference
   */
  resource?: IReference<'Resource'>;

}
