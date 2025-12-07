import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  ICoding,
  IContactDetail,
  IElement,
  IIdentifier,
  IObservationDefinition,
  IObservationDefinitionComponent,
  IObservationDefinitionQualifiedValue,
  IPeriod,
  IReference,
  IUsageContext,
  ObservationDataTypeType,
  PublicationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ObservationDefinition */
const OBSERVATION_DEFINITION_PROPERTIES = [
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
  'approvalDate',
  '_approvalDate',
  'lastReviewDate',
  '_lastReviewDate',
  'effectivePeriod',
  'derivedFromCanonical',
  '_derivedFromCanonical',
  'derivedFromUri',
  '_derivedFromUri',
  'subject',
  'performerType',
  'category',
  'code',
  'permittedDataType',
  '_permittedDataType',
  'multipleResultsAllowed',
  '_multipleResultsAllowed',
  'bodySite',
  'method',
  'specimen',
  'device',
  'preferredReportName',
  '_preferredReportName',
  'permittedUnit',
  'qualifiedValue',
  'hasMember',
  'component',
] as const;

/**
 * ObservationDefinition - Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 *
 * @see https://hl7.org/fhir/R4/observationdefinition.html
 *
 * @example
 * const observationDefinition = new ObservationDefinition({
 *   resourceType: 'ObservationDefinition',
 *   // ... properties
 * });
 */
export class ObservationDefinition extends DomainResource implements IObservationDefinition {
  readonly resourceType = 'ObservationDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Logical canonical URL to reference this ObservationDefinition (globally unique) */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  /** Business identifier of the ObservationDefinition */
  identifier?: IIdentifier;

  /** Business version of the ObservationDefinition */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** How to compare versions */
  versionAlgorithmString?: string;

  /** Extension for versionAlgorithmString */
  _versionAlgorithmString?: IElement;

  /** How to compare versions */
  versionAlgorithmCoding?: ICoding;

  /** Name for this ObservationDefinition (computer friendly) */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Name for this ObservationDefinition (human friendly) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** draft | active | retired | unknown */
  status: PublicationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** If for testing purposes, not real usage */
  experimental?: boolean;

  /** Extension for experimental */
  _experimental?: IElement;

  /** Date last changed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** The name of the individual or organization that published the ObservationDefinition */
  publisher?: string;

  /** Extension for publisher */
  _publisher?: IElement;

  /** Contact details for the publisher */
  contact?: IContactDetail[];

  /** Natural language description of the ObservationDefinition */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Content intends to support these contexts */
  useContext?: IUsageContext[];

  /** Intended jurisdiction for this ObservationDefinition (if applicable) */
  jurisdiction?: ICodeableConcept[];

  /** Why this ObservationDefinition is defined */
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

  /** When ObservationDefinition was approved by publisher */
  approvalDate?: string;

  /** Extension for approvalDate */
  _approvalDate?: IElement;

  /** Date on which the asset content was last reviewed by the publisher */
  lastReviewDate?: string;

  /** Extension for lastReviewDate */
  _lastReviewDate?: IElement;

  /** The effective date range for the ObservationDefinition */
  effectivePeriod?: IPeriod;

  /** Based on FHIR definition of another observation */
  derivedFromCanonical?: string[];

  /** Extension for derivedFromCanonical */
  _derivedFromCanonical?: IElement;

  /** Based on external definition */
  derivedFromUri?: string[];

  /** Extension for derivedFromUri */
  _derivedFromUri?: IElement;

  /** Type of subject for the defined observation */
  subject?: ICodeableConcept[];

  /** Desired kind of performer for such kind of observation */
  performerType?: ICodeableConcept;

  /** General type of observation */
  category?: ICodeableConcept[];

  /** Type of observation */
  code: ICodeableConcept;

  /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period */
  permittedDataType?: ObservationDataTypeType[];

  /** Extension for permittedDataType */
  _permittedDataType?: IElement;

  /** Multiple results allowed for conforming observations */
  multipleResultsAllowed?: boolean;

  /** Extension for multipleResultsAllowed */
  _multipleResultsAllowed?: IElement;

  /** Body part to be observed */
  bodySite?: ICodeableConcept;

  /** Method used to produce the observation */
  method?: ICodeableConcept;

  /** Kind of specimen used by this type of observation */
  specimen?: IReference<'SpecimenDefinition'>[];

  /** Measurement device or model of device */
  device?: IReference<'DeviceDefinition' | 'Device'>[];

  /** The preferred name to be used when reporting the observation results */
  preferredReportName?: string;

  /** Extension for preferredReportName */
  _preferredReportName?: IElement;

  /** Unit for quantitative results */
  permittedUnit?: ICoding[];

  /** Set of qualified values for observation results */
  qualifiedValue?: IObservationDefinitionQualifiedValue[];

  /** Definitions of related resources belonging to this kind of observation group */
  hasMember?: IReference<'ObservationDefinition' | 'Questionnaire'>[];

  /** Component results */
  component?: IObservationDefinitionComponent[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IObservationDefinition>) {
    super(data);
    if (data) {
      this.assignProps(data, OBSERVATION_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ObservationDefinition from a JSON object
   */
  static fromJSON(json: IObservationDefinition): ObservationDefinition {
    return new ObservationDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ObservationDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IObservationDefinition>): ObservationDefinition {
    return new ObservationDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ObservationDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IObservationDefinition) => Partial<IObservationDefinition>): ObservationDefinition {
    const currentData = this.toJSON();
    return new ObservationDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IObservationDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IObservationDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, OBSERVATION_DEFINITION_PROPERTIES);
    return result as IObservationDefinition;
  }

  /**
   * Create a deep clone of this ObservationDefinition
   */
  clone(): ObservationDefinition {
    return new ObservationDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ObservationDefinition
   */
  toString(): string {
    const parts: string[] = ['ObservationDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
