import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IResearchDefinition,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ResearchDefinition */
const RESEARCH_DEFINITION_PROPERTIES = [
  'url',
  '_url',
  'identifier',
  'version',
  '_version',
  'name',
  '_name',
  'title',
  '_title',
  'shortTitle',
  '_shortTitle',
  'subtitle',
  '_subtitle',
  'status',
  '_status',
  'experimental',
  '_experimental',
  'subjectCodeableConcept',
  'subjectReference',
  'date',
  '_date',
  'publisher',
  '_publisher',
  'contact',
  'description',
  '_description',
  'comment',
  '_comment',
  'useContext',
  'jurisdiction',
  'purpose',
  '_purpose',
  'usage',
  '_usage',
  'copyright',
  '_copyright',
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
  'population',
  'exposure',
  'exposureAlternative',
  'outcome',
] as const;

/**
 * ResearchDefinition - The ResearchDefinition resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.
 *
 * @see https://hl7.org/fhir/R4/researchdefinition.html
 *
 * @example
 * const researchDefinition = new ResearchDefinition({
 *   // ... properties
 * });
 */
export class ResearchDefinition extends DomainResource implements IResearchDefinition {
  readonly resourceType = 'ResearchDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this research definition, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the research definition */
  identifier?: IIdentifier[];

  /** Business version of the research definition */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this research definition (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this research definition (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Title for use in informal contexts */
  shortTitle?: string;

  /** Extension for shortTitle */
  _shortTitle?: IElement;

  /** Subordinate title of the ResearchDefinition */
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

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Name of the publisher (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the research definition */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Used for footnotes or explanatory notes */
  comment?: string[];

  /** Extension for comment */
  _comment?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for research definition (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this research definition is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Describes the clinical usage of the ResearchDefinition */
  usage?: string;

  /** Extension for usage */
  _usage?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** When the research definition was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the research definition was last reviewed */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the research definition is expected to be used */
  effectivePeriod?: IPeriod;

  /** The category of the ResearchDefinition, such as Education, Treatment, Assessment, etc. */
  topic?: ICodeableConcept[];

  /** Who authored the content */
  author?: IContactDetail[];

  /** Who edited the content */
  editor?: IContactDetail[];

  /** Who reviewed the content */
  reviewer?: IContactDetail[];

  /** Who endorsed the content */
  endorser?: IContactDetail[];

  /** Additional documentation, citations, etc. */
  relatedArtifact?: IRelatedArtifact[];

  /** Logic used by the ResearchDefinition */
  library?: string[];

  /** Extension for library */
  _library?: IElement;

  /** What population? */
  population: IReference<'ResearchElementDefinition'>;

  /** What exposure? */
  exposure?: IReference<'ResearchElementDefinition'>;

  /** What alternative exposure state? */
  exposureAlternative?: IReference<'ResearchElementDefinition'>;

  /** What outcome? */
  outcome?: IReference<'ResearchElementDefinition'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IResearchDefinition>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, RESEARCH_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ResearchDefinition from a JSON object
   */
  static fromJSON(json: IResearchDefinition): ResearchDefinition {
    return new ResearchDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ResearchDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IResearchDefinition>): ResearchDefinition {
    return new ResearchDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ResearchDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IResearchDefinition) => Partial<IResearchDefinition>): ResearchDefinition {
    const currentData = this.toJSON();
    return new ResearchDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IResearchDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IResearchDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, RESEARCH_DEFINITION_PROPERTIES);
    return result as IResearchDefinition;
  }

  /**
   * Create a deep clone of this ResearchDefinition
   */
  clone(): ResearchDefinition {
    return new ResearchDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ResearchDefinition
   */
  toString(): string {
    const parts: string[] = ['ResearchDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
