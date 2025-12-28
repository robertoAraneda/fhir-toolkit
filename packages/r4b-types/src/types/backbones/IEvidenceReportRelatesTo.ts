import type { IBackboneElement, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { ReportRelationshipTypeType } from '../../valuesets/index.js';

/**
 * EvidenceReportRelatesTo Interface
 * 
 * Relationships to other compositions/documents
 * 
 *
 * @see https://hl7.org/fhir/R4B/evidencereportrelatesto.html
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
  targetIdentifier?: IIdentifier;

  /**
   * Target of the relationship
   */
  targetReference?: IReference;

}
