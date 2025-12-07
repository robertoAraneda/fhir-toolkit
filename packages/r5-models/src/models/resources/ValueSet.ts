import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IElement,
  IIdentifier,
  IPeriod,
  IRelatedArtifact,
  IUsageContext,
  IValueSet,
  IValueSetCompose,
  IValueSetExpansion,
  IValueSetScope,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ValueSet */
const VALUE_SET_PROPERTIES = [
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
  'status',
  '_status',
  'experimental',
  '_experimental',
  'date',
  '_date',
  'publisher',
  '_publisher',
  'contact',
  'description',
  '_description',
  'useContext',
  'jurisdiction',
  'immutable',
  '_immutable',
  'purpose',
  '_purpose',
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
  'compose',
  'expansion',
  'scope',
] as const;

/**
 * ValueSet - A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [CodeSystem](codesystem.html) definitions and their use in [coded elements](terminologies.html).
 *
 * @see https://hl7.org/fhir/R4/valueset.html
 *
 * @example
 * const valueSet = new ValueSet({
 *   resourceType: 'ValueSet',
 *   // ... properties
 * });
 */
export class ValueSet extends DomainResource implements IValueSet {
  readonly resourceType = 'ValueSet' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this value set, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the value set (business identifier) */
  identifier?: IIdentifier[];

  /** Business version of the value set */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** Name for this value set (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this value set (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

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

  /** Name of the publisher/steward (organization or individual) */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the value set */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for value set (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Indicates whether or not any change to the content logical definition may occur */
  immutable?: boolean;

  /** Extension for immutable */
  _immutable?: IElement;

  /** Why this value set is defined */
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

  /** When the ValueSet was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** When the ValueSet was last reviewed by the publisher */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** When the ValueSet is expected to be used */
  effectivePeriod?: IPeriod;

  /** E.g. Education, Treatment, Assessment, etc */
  topic?: ICodeableConcept[];

  /** Who authored the ValueSet */
  author?: IContactDetail[];

  /** Who edited the ValueSet */
  editor?: IContactDetail[];

  /** Who reviewed the ValueSet */
  reviewer?: IContactDetail[];

  /** Who endorsed the ValueSet */
  endorser?: IContactDetail[];

  /** Additional documentation, citations, etc */
  relatedArtifact?: IRelatedArtifact[];

  /** Content logical definition of the value set (CLD) */
  compose?: IValueSetCompose;

  /** Used when the value set is "expanded" */
  expansion?: IValueSetExpansion;

  /** Description of the semantic space the Value Set Expansion is intended to cover and should further clarify the text in ValueSet.description */
  scope?: IValueSetScope;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IValueSet>) {
    super(data);
    if (data) {
      this.assignProps(data, VALUE_SET_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ValueSet from a JSON object
   */
  static fromJSON(json: IValueSet): ValueSet {
    return new ValueSet(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ValueSet with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IValueSet>): ValueSet {
    return new ValueSet({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ValueSet by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IValueSet) => Partial<IValueSet>): ValueSet {
    const currentData = this.toJSON();
    return new ValueSet({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IValueSet)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IValueSet {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, VALUE_SET_PROPERTIES);
    return result as IValueSet;
  }

  /**
   * Create a deep clone of this ValueSet
   */
  clone(): ValueSet {
    return new ValueSet(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ValueSet
   */
  toString(): string {
    const parts: string[] = ['ValueSet'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
