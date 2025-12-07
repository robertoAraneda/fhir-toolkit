import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IObservation,
  IObservationComponent,
  IObservationReferenceRange,
  IPeriod,
  IQuantity,
  IRange,
  IRatio,
  IReference,
  ISampledData,
  ITiming,
  ObservationStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to Observation */
const OBSERVATION_PROPERTIES = [
  'identifier',
  'basedOn',
  'partOf',
  'status',
  '_status',
  'category',
  'code',
  'subject',
  'focus',
  'encounter',
  'effectiveDateTime',
  '_effectiveDateTime',
  'effectivePeriod',
  'effectiveTiming',
  'effectiveInstant',
  '_effectiveInstant',
  'issued',
  '_issued',
  'performer',
  'valueQuantity',
  'valueCodeableConcept',
  'valueString',
  '_valueString',
  'valueBoolean',
  '_valueBoolean',
  'valueInteger',
  '_valueInteger',
  'valueRange',
  'valueRatio',
  'valueSampledData',
  'valueTime',
  '_valueTime',
  'valueDateTime',
  '_valueDateTime',
  'valuePeriod',
  'dataAbsentReason',
  'interpretation',
  'note',
  'bodySite',
  'method',
  'specimen',
  'device',
  'referenceRange',
  'hasMember',
  'derivedFrom',
  'component',
] as const;

/**
 * Observation - Measurements and simple assertions made about a patient, device or other subject.
 *
 * @see https://hl7.org/fhir/R4/observation.html
 *
 * @example
 * const observation = new Observation({
 *   // ... properties
 * });
 */
export class Observation extends DomainResource implements IObservation {
  readonly resourceType = 'Observation' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business Identifier for observation */
  identifier?: IIdentifier[];

  /** Fulfills plan, proposal or order */
  basedOn?: IReference<'CarePlan' | 'DeviceRequest' | 'ImmunizationRecommendation' | 'MedicationRequest' | 'NutritionOrder' | 'ServiceRequest'>[];

  /** Part of referenced event */
  partOf?: IReference<'MedicationAdministration' | 'MedicationDispense' | 'MedicationStatement' | 'Procedure' | 'Immunization' | 'ImagingStudy'>[];

  /** registered | preliminary | final | amended + */
  status: ObservationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Classification of  type of observation */
  category?: ICodeableConcept[];

  /** Type of observation (code / type) */
  code: ICodeableConcept;

  /** Who and/or what the observation is about */
  subject?: IReference<'Patient' | 'Group' | 'Device' | 'Location'>;

  /** What the observation is about, when it is not about the subject of record */
  focus?: IReference<'Resource'>[];

  /** Healthcare event during which this observation is made */
  encounter?: IReference<'Encounter'>;

  /** Clinically relevant time/time-period for observation */
  effectiveDateTime?: string;

  /** Extension for effectiveDateTime */
  _effectiveDateTime?: IElement;

  /** Clinically relevant time/time-period for observation */
  effectivePeriod?: IPeriod;

  /** Clinically relevant time/time-period for observation */
  effectiveTiming?: ITiming;

  /** Clinically relevant time/time-period for observation */
  effectiveInstant?: string;

  /** Extension for effectiveInstant */
  _effectiveInstant?: IElement;

  /** Date/Time this version was made available */
  issued?: string;

  /** Extension for issued */
  _issued?: IElement;

  /** Who is responsible for the observation */
  performer?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'RelatedPerson'>[];

  /** Actual result */
  valueQuantity?: IQuantity;

  /** Actual result */
  valueCodeableConcept?: ICodeableConcept;

  /** Actual result */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Actual result */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Actual result */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** Actual result */
  valueRange?: IRange;

  /** Actual result */
  valueRatio?: IRatio;

  /** Actual result */
  valueSampledData?: ISampledData;

  /** Actual result */
  valueTime?: string;

  /** Extension for valueTime */
  _valueTime?: IElement;

  /** Actual result */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** Actual result */
  valuePeriod?: IPeriod;

  /** Why the result is missing */
  dataAbsentReason?: ICodeableConcept;

  /** High, low, normal, etc. */
  interpretation?: ICodeableConcept[];

  /** Comments about the observation */
  note?: IAnnotation[];

  /** Observed body part */
  bodySite?: ICodeableConcept;

  /** How it was done */
  method?: ICodeableConcept;

  /** Specimen used for this observation */
  specimen?: IReference<'Specimen'>;

  /** (Measurement) Device */
  device?: IReference<'Device' | 'DeviceMetric'>;

  /** Provides guide for interpretation */
  referenceRange?: IObservationReferenceRange[];

  /** Related resource that belongs to the Observation group */
  hasMember?: IReference<'Observation' | 'QuestionnaireResponse' | 'MolecularSequence'>[];

  /** Related measurements the observation is made from */
  derivedFrom?: IReference<'DocumentReference' | 'ImagingStudy' | 'Media' | 'QuestionnaireResponse' | 'Observation' | 'MolecularSequence'>[];

  /** Component results */
  component?: IObservationComponent[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IObservation>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, OBSERVATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Observation from a JSON object
   */
  static fromJSON(json: IObservation): Observation {
    return new Observation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Observation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IObservation>): Observation {
    return new Observation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Observation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IObservation) => Partial<IObservation>): Observation {
    const currentData = this.toJSON();
    return new Observation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IObservation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IObservation {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, OBSERVATION_PROPERTIES);
    return result as IObservation;
  }

  /**
   * Create a deep clone of this Observation
   */
  clone(): Observation {
    return new Observation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Observation
   */
  toString(): string {
    const parts: string[] = ['Observation'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
