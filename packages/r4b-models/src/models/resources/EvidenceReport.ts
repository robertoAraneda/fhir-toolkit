import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IContactDetail,
  IElement,
  IEvidenceReport,
  IEvidenceReportRelatesTo,
  IEvidenceReportSection,
  IEvidenceReportSubject,
  IIdentifier,
  IReference,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to EvidenceReport */
const EVIDENCE_REPORT_PROPERTIES = [
  'url',
  '_url',
  'status',
  '_status',
  'useContext',
  'identifier',
  'relatedIdentifier',
  'citeAsReference',
  'citeAsMarkdown',
  '_citeAsMarkdown',
  'type',
  'note',
  'relatedArtifact',
  'subject',
  'publisher',
  '_publisher',
  'contact',
  'author',
  'editor',
  'reviewer',
  'endorser',
  'relatesTo',
  'section',
] as const;

/**
 * EvidenceReport - The EvidenceReport Resource is a specialized container for a collection of resources and codable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts.
 *
 * @see https://hl7.org/fhir/R4/evidencereport.html
 *
 * @example
 * const evidenceReport = new EvidenceReport({
 *   resourceType: 'EvidenceReport',
 *   // ... properties
 * });
 */
export class EvidenceReport extends DomainResource implements IEvidenceReport {
  readonly resourceType = 'EvidenceReport' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this EvidenceReport, represented as a globally unique URI */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Unique identifier for the evidence report */
  identifier?: IIdentifier[];

  /** Identifiers for articles that may relate to more than one evidence report */
  relatedIdentifier?: IIdentifier[];

  /** Citation for this report */
  citeAsReference?: IReference;

  /** Citation for this report */
  citeAsMarkdown?: string;

  /** Extension for citeAsMarkdown */
  _citeAsMarkdown?: IElement;

  /** Kind of report */
  type?: ICodeableConcept;

  /** Used for footnotes and annotations */
  note?: IAnnotation[];

  /** Link, description or reference to artifact associated with the report */
  relatedArtifact?: IRelatedArtifact[];

  /** Focus of the report */
  subject: IEvidenceReportSubject;

  /** Name of the publisher (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Who authored the content */
  author?: IContactDetail[];

  /** Who edited the content */
  editor?: IContactDetail[];

  /** Who reviewed the content */
  reviewer?: IContactDetail[];

  /** Who endorsed the content */
  endorser?: IContactDetail[];

  /** Relationships to other compositions/documents */
  relatesTo?: IEvidenceReportRelatesTo[];

  /** Composition is broken into sections */
  section?: IEvidenceReportSection[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceReport>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_REPORT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceReport from a JSON object
   */
  static fromJSON(json: IEvidenceReport): EvidenceReport {
    return new EvidenceReport(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceReport with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceReport>): EvidenceReport {
    return new EvidenceReport({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceReport by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceReport) => Partial<IEvidenceReport>): EvidenceReport {
    const currentData = this.toJSON();
    return new EvidenceReport({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceReport)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceReport {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, EVIDENCE_REPORT_PROPERTIES);
    return result as IEvidenceReport;
  }

  /**
   * Create a deep clone of this EvidenceReport
   */
  clone(): EvidenceReport {
    return new EvidenceReport(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceReport
   */
  toString(): string {
    const parts: string[] = ['EvidenceReport'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
