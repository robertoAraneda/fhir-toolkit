import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IContactDetail,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  IRelatedArtifact,
  IResearchElementDefinition,
  IResearchElementDefinitionCharacteristic,
  IUsageContext,
  PublicationStatusType,
  ResearchElementTypeType,
  VariableTypeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ResearchElementDefinition */
const RESEARCH_ELEMENT_DEFINITION_PROPERTIES = [
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
  'type',
  '_type',
  'variableType',
  '_variableType',
  'characteristic',
] as const;

/**
 * ResearchElementDefinition - The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.
 *
 * @see https://hl7.org/fhir/R4/researchelementdefinition.html
 *
 * @example
 * const researchElementDefinition = new ResearchElementDefinition({
 *   resourceType: 'ResearchElementDefinition',
 *   // ... properties
 * });
 */
export class ResearchElementDefinition extends DomainResource implements IResearchElementDefinition {
  readonly resourceType = 'ResearchElementDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this research element definition, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the research element definition */
  identifier?: IIdentifier[];

  /** Business version of the research element definition */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Name for this research element definition (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this research element definition (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Title for use in informal contexts */
  shortTitle?: string;

  /** Extension for shortTitle */
  _shortTitle?: IElement;

  /** Subordinate title of the ResearchElementDefinition */
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

  /** Natural language description of the research element definition */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Used for footnotes or explanatory notes */
  comment?: string[];

  /** Extension for comment */
  _comment?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for research element definition (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this research element definition is defined */
  purpose?: string;

  /** Extension for purpose */
  _purpose?: IElement;

  /** Describes the clinical usage of the ResearchElementDefinition */
  usage?: string;

  /** Extension for usage */
  _usage?: IElement;

  /** Use and/or publishing restrictions */
  copyright?: string;

  /** Extension for copyright */
  _copyright?: IElement;

  /** When the research element definition was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the research element definition was last reviewed */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the research element definition is expected to be used */
  effectivePeriod?: IPeriod;

  /** The category of the ResearchElementDefinition, such as Education, Treatment, Assessment, etc. */
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

  /** Logic used by the ResearchElementDefinition */
  library?: string[];

  /** Extension for library */
  _library?: IElement;

  /** population | exposure | outcome */
  type: ResearchElementTypeType;

  /** Extension for type */
  _type?: IElement;

  /** dichotomous | continuous | descriptive */
  variableType?: VariableTypeType;

  /** Extension for variableType */
  _variableType?: IElement;

  /** What defines the members of the research element */
  characteristic: IResearchElementDefinitionCharacteristic[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IResearchElementDefinition>) {
    super(data);
    if (data) {
      this.assignProps(data, RESEARCH_ELEMENT_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ResearchElementDefinition from a JSON object
   */
  static fromJSON(json: IResearchElementDefinition): ResearchElementDefinition {
    return new ResearchElementDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ResearchElementDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IResearchElementDefinition>): ResearchElementDefinition {
    return new ResearchElementDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ResearchElementDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IResearchElementDefinition) => Partial<IResearchElementDefinition>): ResearchElementDefinition {
    const currentData = this.toJSON();
    return new ResearchElementDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IResearchElementDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IResearchElementDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, RESEARCH_ELEMENT_DEFINITION_PROPERTIES);
    return result as IResearchElementDefinition;
  }

  /**
   * Create a deep clone of this ResearchElementDefinition
   */
  clone(): ResearchElementDefinition {
    return new ResearchElementDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ResearchElementDefinition
   */
  toString(): string {
    const parts: string[] = ['ResearchElementDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
