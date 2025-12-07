import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IElement,
  IIdentifier,
  IRequirements,
  IRequirementsStatement,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Requirements */
const REQUIREMENTS_PROPERTIES = [
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
  'purpose',
  '_purpose',
  'copyright',
  '_copyright',
  'copyrightLabel',
  '_copyrightLabel',
  'derivedFrom',
  '_derivedFrom',
  'reference',
  '_reference',
  'actor',
  '_actor',
  'statement',
] as const;

/**
 * Requirements - A set of requirements - a list of features or behaviors of designed systems that are necessary to achieve organizational or regulatory goals.
 *
 * @see https://hl7.org/fhir/R4/requirements.html
 *
 * @example
 * const requirements = new Requirements({
 *   resourceType: 'Requirements',
 *   // ... properties
 * });
 */
export class Requirements extends DomainResource implements IRequirements {
  readonly resourceType = 'Requirements' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Canonical identifier for this Requirements, represented as a URI (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Additional identifier for the Requirements (business identifier) */
  identifier?: IIdentifier[];

  /** Business version of the Requirements */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** Name for this Requirements (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this Requirements (human friendly) */
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

  /** Natural language description of the requirements */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The context that the content is intended to support */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for Requirements (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this Requirements is defined */
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

  /** Other set of Requirements this builds on */
  derivedFrom?: string[];

  /** Extension for derivedFrom */
  _derivedFrom?: IElement;

  /** External artifact (rule/document etc. that) created this set of requirements */
  reference?: string[];

  /** Extension for reference */
  _reference?: IElement;

  /** Actor for these requirements */
  actor?: string[];

  /** Extension for actor */
  _actor?: IElement;

  /** Actual statement as markdown */
  statement?: IRequirementsStatement[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IRequirements>) {
    super(data);
    if (data) {
      this.assignProps(data, REQUIREMENTS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Requirements from a JSON object
   */
  static fromJSON(json: IRequirements): Requirements {
    return new Requirements(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Requirements with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRequirements>): Requirements {
    return new Requirements({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Requirements by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRequirements) => Partial<IRequirements>): Requirements {
    const currentData = this.toJSON();
    return new Requirements({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRequirements)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRequirements {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, REQUIREMENTS_PROPERTIES);
    return result as IRequirements;
  }

  /**
   * Create a deep clone of this Requirements
   */
  clone(): Requirements {
    return new Requirements(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Requirements
   */
  toString(): string {
    const parts: string[] = ['Requirements'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
