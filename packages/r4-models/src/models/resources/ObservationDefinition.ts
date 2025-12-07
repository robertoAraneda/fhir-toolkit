import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IObservationDefinition,
  IObservationDefinitionQualifiedInterval,
  IObservationDefinitionQuantitativeDetails,
  IReference,
  ObservationDataTypeType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ObservationDefinition */
const OBSERVATION_DEFINITION_PROPERTIES = [
  'category',
  'code',
  'identifier',
  'permittedDataType',
  '_permittedDataType',
  'multipleResultsAllowed',
  '_multipleResultsAllowed',
  'method',
  'preferredReportName',
  '_preferredReportName',
  'quantitativeDetails',
  'qualifiedInterval',
  'validCodedValueSet',
  'normalCodedValueSet',
  'abnormalCodedValueSet',
  'criticalCodedValueSet',
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

  /** Category of observation */
  category?: ICodeableConcept[];

  /** Type of observation (code / type) */
  code: ICodeableConcept;

  /** Business identifier for this ObservationDefinition instance */
  identifier?: IIdentifier[];

  /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period */
  permittedDataType?: ObservationDataTypeType[];

  /** Extension for permittedDataType */
  _permittedDataType?: IElement;

  /** Multiple results allowed */
  multipleResultsAllowed?: boolean;

  /** Extension for multipleResultsAllowed */
  _multipleResultsAllowed?: IElement;

  /** Method used to produce the observation */
  method?: ICodeableConcept;

  /** Preferred report name */
  preferredReportName?: string;

  /** Extension for preferredReportName */
  _preferredReportName?: IElement;

  /** Characteristics of quantitative results */
  quantitativeDetails?: IObservationDefinitionQuantitativeDetails;

  /** Qualified range for continuous and ordinal observation results */
  qualifiedInterval?: IObservationDefinitionQualifiedInterval[];

  /** Value set of valid coded values for the observations conforming to this ObservationDefinition */
  validCodedValueSet?: IReference<'ValueSet'>;

  /** Value set of normal coded values for the observations conforming to this ObservationDefinition */
  normalCodedValueSet?: IReference<'ValueSet'>;

  /** Value set of abnormal coded values for the observations conforming to this ObservationDefinition */
  abnormalCodedValueSet?: IReference<'ValueSet'>;

  /** Value set of critical coded values for the observations conforming to this ObservationDefinition */
  criticalCodedValueSet?: IReference<'ValueSet'>;

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
