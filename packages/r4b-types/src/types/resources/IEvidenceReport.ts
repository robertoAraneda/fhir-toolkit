import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IContactDetail } from '../datatypes/IContactDetail.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IRelatedArtifact } from '../datatypes/IRelatedArtifact.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { IEvidenceReportRelatesTo } from '../backbones/IEvidenceReportRelatesTo.js';
import type { IEvidenceReportSection } from '../backbones/IEvidenceReportSection.js';
import type { IEvidenceReportSubject } from '../backbones/IEvidenceReportSubject.js';
import type { PublicationStatusType } from '../../valuesets/index.js';

/**
 * EvidenceReport Interface
 * 
 * The EvidenceReport Resource is a specialized container for a collection of resources and codable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts.
 * 
 *
 * @see https://hl7.org/fhir/R4/evidencereport.html
 */
export interface IEvidenceReport extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'EvidenceReport';

  /**
   * Canonical identifier for this EvidenceReport, represented as a globally unique URI
   */
  url?: string;
  /**
   * Extension for url
   */
  _url?: IElement;

  /**
   * draft | active | retired | unknown
   */
  status: PublicationStatusType;
  /**
   * Extension for status
   */
  _status?: IElement;

  /**
   * The context that the content is intended to support
   */
  useContext?: IUsageContext[];

  /**
   * Unique identifier for the evidence report
   */
  identifier?: IIdentifier[];

  /**
   * Identifiers for articles that may relate to more than one evidence report
   */
  relatedIdentifier?: IIdentifier[];

  /**
   * Citation for this report
   */
  citeAsReference?: IReference;

  /**
   * Citation for this report
   */
  citeAsMarkdown?: string;
  /**
   * Extension for citeAsMarkdown
   */
  _citeAsMarkdown?: IElement;

  /**
   * Kind of report
   */
  type?: ICodeableConcept;

  /**
   * Used for footnotes and annotations
   */
  note?: IAnnotation[];

  /**
   * Link, description or reference to artifact associated with the report
   */
  relatedArtifact?: IRelatedArtifact[];

  /**
   * Focus of the report
   */
  subject: IEvidenceReportSubject;

  /**
   * Name of the publisher (organization or individual)
   */
  publisher?: string;
  /**
   * Extension for publisher
   */
  _publisher?: IElement;

  /**
   * Contact details for the publisher
   */
  contact?: IContactDetail[];

  /**
   * Who authored the content
   */
  author?: IContactDetail[];

  /**
   * Who edited the content
   */
  editor?: IContactDetail[];

  /**
   * Who reviewed the content
   */
  reviewer?: IContactDetail[];

  /**
   * Who endorsed the content
   */
  endorser?: IContactDetail[];

  /**
   * Relationships to other compositions/documents
   */
  relatesTo?: IEvidenceReportRelatesTo[];

  /**
   * Composition is broken into sections
   */
  section?: IEvidenceReportSection[];

}
