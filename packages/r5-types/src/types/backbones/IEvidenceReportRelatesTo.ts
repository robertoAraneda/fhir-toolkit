import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IEvidenceReportRelatesToTarget } from './IEvidenceReportRelatesToTarget.js';
import type { ReportRelationshipTypeType } from '../../valuesets/index.js';

/**
 * EvidenceReportRelatesTo Interface
 * 
 * Relationships to other compositions/documents
 * 
 *
 * @see https://hl7.org/fhir/R5/evidencereportrelatesto.html
 */
export interface IEvidenceReportRelatesTo extends IBackboneElement {
  /**
   * replaces | amends | appends | transforms | replacedWith | amendedWith | appendedWith | transformedWith
   */
  code: ReportRelationshipTypeType;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Target of the relationship
   */
  target: IEvidenceReportRelatesToTarget;

}
