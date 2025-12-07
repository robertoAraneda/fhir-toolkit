import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
  ISpecimenDefinition,
  ISpecimenDefinitionTypeTested,
  IUsageContext,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SpecimenDefinition */
const SPECIMEN_DEFINITION_PROPERTIES = [
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
  'derivedFromCanonical',
  '_derivedFromCanonical',
  'derivedFromUri',
  '_derivedFromUri',
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
  'useContext',
  'jurisdiction',
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
  'typeCollected',
  'patientPreparation',
  'timeAspect',
  '_timeAspect',
  'collection',
  'typeTested',
] as const;

/**
 * SpecimenDefinition - A kind of specimen with associated set of requirements.
 *
 * @see https://hl7.org/fhir/R4/specimendefinition.html
 *
 * @example
 * const specimenDefinition = new SpecimenDefinition({
 *   // ... properties
 * });
 */
export class SpecimenDefinition extends DomainResource implements ISpecimenDefinition {
  readonly resourceType = 'SpecimenDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Logical canonical URL to reference this SpecimenDefinition (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Business identifier */
  identifier?: IIdentifier;

  /** Business version of the SpecimenDefinition */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** Name for this {{title}} (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this SpecimenDefinition (Human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Based on FHIR definition of another SpecimenDefinition */
  derivedFromCanonical?: string[];

  /** Extension for derivedFromCanonical */
  _derivedFromCanonical?: IElement;

  /** Based on external definition */
  derivedFromUri?: string[];

  /** Extension for derivedFromUri */
  _derivedFromUri?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** If this SpecimenDefinition is not for real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Type of subject for specimen collection */
  subjectCodeableConcept?: ICodeableConcept;

  /** Type of subject for specimen collection */
  subjectReference?: IReference;

  /** Date status first applied */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** The name of the individual or organization that published the SpecimenDefinition */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the SpecimenDefinition */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Content intends to support these contexts */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for this SpecimenDefinition (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this SpecimenDefinition is defined */
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

  /** When SpecimenDefinition was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** The date on which the asset content was last reviewed by the publisher */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** The effective date range for the SpecimenDefinition */
  effectivePeriod?: IPeriod;

  /** Kind of material to collect */
  typeCollected?: ICodeableConcept;

  /** Patient preparation for collection */
  patientPreparation?: ICodeableConcept[];

  /** Time aspect for collection */
  timeAspect?: string;

  /** Extension for timeAspect */
  _timeAspect?: IElement;

  /** Specimen collection procedure */
  collection?: ICodeableConcept[];

  /** Specimen in container intended for testing by lab */
  typeTested?: ISpecimenDefinitionTypeTested[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ISpecimenDefinition>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, SPECIMEN_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SpecimenDefinition from a JSON object
   */
  static fromJSON(json: ISpecimenDefinition): SpecimenDefinition {
    return new SpecimenDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SpecimenDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISpecimenDefinition>): SpecimenDefinition {
    return new SpecimenDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SpecimenDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISpecimenDefinition) => Partial<ISpecimenDefinition>): SpecimenDefinition {
    const currentData = this.toJSON();
    return new SpecimenDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISpecimenDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISpecimenDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SPECIMEN_DEFINITION_PROPERTIES);
    return result as ISpecimenDefinition;
  }

  /**
   * Create a deep clone of this SpecimenDefinition
   */
  clone(): SpecimenDefinition {
    return new SpecimenDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SpecimenDefinition
   */
  toString(): string {
    const parts: string[] = ['SpecimenDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
