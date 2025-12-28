import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IElement,
  IEvidence,
  IEvidenceCertainty,
  IEvidenceStatistic,
  IEvidenceVariableDefinition,
  IIdentifier,
  IReference,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Evidence */
const EVIDENCE_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'versionAlgorithmString',
  '_versionAlgorithmString',
  'versionAlgorithmCoding',
  'name',
  '_name',
  'title',
  '_title',
  'citeAsReference',
  'citeAsMarkdown',
  '_citeAsMarkdown',
  'status',
  '_status',
  'experimental',
  '_experimental',
  'date',
  '_date',
  'approvalDate',
  '_approvalDate',
  'lastReviewDate',
  '_lastReviewDate',
  'publisher',
  '_publisher',
  'contact',
  'author',
  'editor',
  'reviewer',
  'endorser',
  'useContext',
  'purpose',
  '_purpose',
  'copyright',
  '_copyright',
  'copyrightLabel',
  '_copyrightLabel',
  'relatedArtifact',
  'description',
  '_description',
  'assertion',
  '_assertion',
  'note',
  'variableDefinition',
  'synthesisType',
  'studyDesign',
  'statistic',
  'certainty',
] as const;

/**
 * Evidence - The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence.
 *
 * @see https://hl7.org/fhir/R5/evidence.html
 *
 * @example
 * const evidence = new Evidence({
 *   // ... properties
 * });
 */
export class Evidence extends DomainResource implements IEvidence {
  readonly resourceType = 'Evidence' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this evidence, represented as a globally unique URI */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the summary */
  identifier?: IIdentifier[];

  /** Business version of this summary */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** Name for this summary (machine friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this summary (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Citation for this evidence */
  citeAsReference?: IReference;

  /** Citation for this evidence */
  citeAsMarkdown?: string;

  /** Extension for citeAsMarkdown */
  _citeAsMarkdown?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** When the summary was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the summary was last reviewed by the publisher */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** Name of the publisher/steward (organization or individual) */
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

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Why this Evidence is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** Copyright holder and year(s) */
  copyrightLabel?: string;

  /** Extension for copyrightLabel */
  _copyrightLabel?: IElement;

  /** Link or citation to artifact associated with the summary */
  relatedArtifact?: IRelatedArtifact[];

  /** Description of the particular summary */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Declarative description of the Evidence */
  assertion?: string;

  /** Extension for assertion */
  _assertion?: IElement;

  /** Footnotes and/or explanatory notes */
  note?: IAnnotation[];

  /** Evidence variable such as population, exposure, or outcome */
  variableDefinition: IEvidenceVariableDefinition[];

  /** The method to combine studies */
  synthesisType?: ICodeableConcept;

  /** The design of the study that produced this evidence */
  studyDesign?: ICodeableConcept[];

  /** Values and parameters for a single statistic */
  statistic?: IEvidenceStatistic[];

  /** Certainty or quality of the evidence */
  certainty?: IEvidenceCertainty[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IEvidence>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Evidence from a JSON object
   */
  static fromJSON(json: IEvidence): Evidence {
    return new Evidence(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Evidence with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidence>): Evidence {
    return new Evidence({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Evidence by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidence) => Partial<IEvidence>): Evidence {
    const currentData = this.toJSON();
    return new Evidence({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidence)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidence {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, EVIDENCE_PROPERTIES);
    return result as IEvidence;
  }

  /**
   * Create a deep clone of this Evidence
   */
  clone(): Evidence {
    return new Evidence(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Evidence
   */
  toString(): string {
    const parts: string[] = ['Evidence'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
