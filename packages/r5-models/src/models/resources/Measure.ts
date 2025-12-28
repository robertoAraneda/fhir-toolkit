import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IElement,
  IIdentifier,
  IMeasure,
  IMeasureGroup,
  IMeasureSupplementalData,
  IMeasureTerm,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Measure */
const MEASURE_PROPERTIES = [
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
  'subtitle',
  '_subtitle',
  'status',
  '_status',
  'experimental',
  '_experimental',
  'subjectCodeableConcept',
  'subjectReference',
  'basis',
  '_basis',
  'date',
  '_date',
  'publisher',
  '_publisher',
  'contact',
  'description',
  '_description',
  'useContext',
  'jurisdiction',
  'purpose',
  '_purpose',
  'usage',
  '_usage',
  'copyright',
  '_copyright',
  'copyrightLabel',
  '_copyrightLabel',
  'approvalDate',
  '_approvalDate',
  'lastReviewDate',
  '_lastReviewDate',
  'effectivePeriod',
  'topic',
  'author',
  'editor',
  'reviewer',
  'endorser',
  'relatedArtifact',
  'library',
  '_library',
  'disclaimer',
  '_disclaimer',
  'scoring',
  'scoringUnit',
  'compositeScoring',
  'type',
  'riskAdjustment',
  '_riskAdjustment',
  'rateAggregation',
  '_rateAggregation',
  'rationale',
  '_rationale',
  'clinicalRecommendationStatement',
  '_clinicalRecommendationStatement',
  'improvementNotation',
  'term',
  'guidance',
  '_guidance',
  'group',
  'supplementalData',
] as const;

/**
 * Measure - The Measure resource provides the definition of a quality measure.
 *
 * @see https://hl7.org/fhir/R5/measure.html
 *
 * @example
 * const measure = new Measure({
 *   // ... properties
 * });
 */
export class Measure extends DomainResource implements IMeasure {
  readonly resourceType = 'Measure' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this measure, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the measure */
  identifier?: IIdentifier[];

  /** Business version of the measure */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** Name for this measure (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this measure (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Subordinate title of the measure */
  subtitle?: string;

  /** Extension for subtitle */
  _subtitle?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** For testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
  subjectCodeableConcept?: ICodeableConcept;

  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
  subjectReference?: IReference;

  /** Population basis */
  basis?: string;

  /** Extension for basis */
  _basis?: IElement;

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Name of the publisher/steward (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the measure */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for measure (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this measure is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Describes the clinical usage of the measure */
  usage?: string;

  /** Extension for usage */
  _usage?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** Copyright holder and year(s) */
  copyrightLabel?: string;

  /** Extension for copyrightLabel */
  _copyrightLabel?: IElement;

  /** When the measure was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the measure was last reviewed by the publisher */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the measure is expected to be used */
  effectivePeriod?: IPeriod;

  /** The category of the measure, such as Education, Treatment, Assessment, etc */
  topic?: ICodeableConcept[];

  /** Who authored the content */
  author?: IContactDetail[];

  /** Who edited the content */
  editor?: IContactDetail[];

  /** Who reviewed the content */
  reviewer?: IContactDetail[];

  /** Who endorsed the content */
  endorser?: IContactDetail[];

  /** Additional documentation, citations, etc */
  relatedArtifact?: IRelatedArtifact[];

  /** Logic used by the measure */
  library?: string[];

  /** Extension for library */
  _library?: IElement;

  /** Disclaimer for use of the measure or its referenced content */
  disclaimer?: string;

  /** Extension for disclaimer */
  _disclaimer?: IElement;

  /** proportion | ratio | continuous-variable | cohort */
  scoring?: ICodeableConcept;

  /** What units? */
  scoringUnit?: ICodeableConcept;

  /** opportunity | all-or-nothing | linear | weighted */
  compositeScoring?: ICodeableConcept;

  /** process | outcome | structure | patient-reported-outcome | composite */
  type?: ICodeableConcept[];

  /** How risk adjustment is applied for this measure */
  riskAdjustment?: string;

  /** Extension for riskAdjustment */
  _riskAdjustment?: IElement;

  /** How is rate aggregation performed for this measure */
  rateAggregation?: string;

  /** Extension for rateAggregation */
  _rateAggregation?: IElement;

  /** Detailed description of why the measure exists */
  rationale?: string;

  /** Extension for rationale */
  _rationale?: IElement;

  /** Summary of clinical guidelines */
  clinicalRecommendationStatement?: string;

  /** Extension for clinicalRecommendationStatement */
  _clinicalRecommendationStatement?: IElement;

  /** increase | decrease */
  improvementNotation?: ICodeableConcept;

  /** Defined terms used in the measure documentation */
  term?: IMeasureTerm[];

  /** Additional guidance for implementers (deprecated) */
  guidance?: string;

  /** Extension for guidance */
  _guidance?: IElement;

  /** Population criteria group */
  group?: IMeasureGroup[];

  /** What other data should be reported with the measure */
  supplementalData?: IMeasureSupplementalData[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IMeasure>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, MEASURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Measure from a JSON object
   */
  static fromJSON(json: IMeasure): Measure {
    return new Measure(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Measure with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMeasure>): Measure {
    return new Measure({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Measure by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMeasure) => Partial<IMeasure>): Measure {
    const currentData = this.toJSON();
    return new Measure({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMeasure)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMeasure {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEASURE_PROPERTIES);
    return result as IMeasure;
  }

  /**
   * Create a deep clone of this Measure
   */
  clone(): Measure {
    return new Measure(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Measure
   */
  toString(): string {
    const parts: string[] = ['Measure'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
