import { DomainResource } from '../base/DomainResource.js';
import type {
  AllergyIntoleranceCategoryType,
  AllergyIntoleranceClinicalStatusType,
  AllergyIntoleranceCriticalityType,
  AllergyIntoleranceTypeType,
  AllergyIntoleranceVerificationStatusType,
  IAge,
  IAllergyIntolerance,
  IAllergyIntoleranceReaction,
  IAnnotation,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IPeriod,
  IRange,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to AllergyIntolerance */
const ALLERGY_INTOLERANCE_PROPERTIES = [
  'identifier',
  'clinicalStatus',
  'verificationStatus',
  'type',
  '_type',
  'category',
  '_category',
  'criticality',
  '_criticality',
  'code',
  'patient',
  'encounter',
  'onsetDateTime',
  '_onsetDateTime',
  'onsetAge',
  'onsetPeriod',
  'onsetRange',
  'onsetString',
  '_onsetString',
  'recordedDate',
  '_recordedDate',
  'recorder',
  'asserter',
  'lastOccurrence',
  '_lastOccurrence',
  'note',
  'reaction',
] as const;

/**
 * AllergyIntolerance - Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.
 *
 * @see https://hl7.org/fhir/R4B/allergyintolerance.html
 *
 * @example
 * const allergyIntolerance = new AllergyIntolerance({
 *   // ... properties
 * });
 */
export class AllergyIntolerance extends DomainResource implements IAllergyIntolerance {
  readonly resourceType = 'AllergyIntolerance' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External ids for this item */
  identifier?: IIdentifier[];

  /** active | inactive | resolved */
  clinicalStatus?: ICodeableConcept<AllergyIntoleranceClinicalStatusType>;

  /** unconfirmed | confirmed | refuted | entered-in-error */
  verificationStatus?: ICodeableConcept<AllergyIntoleranceVerificationStatusType>;

  /** allergy | intolerance - Underlying mechanism (if known) */
  type?: AllergyIntoleranceTypeType;

  /** Extension for type */
  _type?: IElement;

  /** food | medication | environment | biologic */
  category?: AllergyIntoleranceCategoryType[];

  /** Extension for category */
  _category?: IElement;

  /** low | high | unable-to-assess */
  criticality?: AllergyIntoleranceCriticalityType;

  /** Extension for criticality */
  _criticality?: IElement;

  /** Code that identifies the allergy or intolerance */
  code?: ICodeableConcept;

  /** Who the sensitivity is for */
  patient: IReference<'Patient'>;

  /** Encounter when the allergy or intolerance was asserted */
  encounter?: IReference<'Encounter'>;

  /** When allergy or intolerance was identified */
  onsetDateTime?: string;

  /** Extension for onsetDateTime */
  _onsetDateTime?: IElement;

  /** When allergy or intolerance was identified */
  onsetAge?: IAge;

  /** When allergy or intolerance was identified */
  onsetPeriod?: IPeriod;

  /** When allergy or intolerance was identified */
  onsetRange?: IRange;

  /** When allergy or intolerance was identified */
  onsetString?: string;

  /** Extension for onsetString */
  _onsetString?: IElement;

  /** Date first version of the resource instance was recorded */
  recordedDate?: string;

  /** Extension for recordedDate */
  _recordedDate?: IElement;

  /** Who recorded the sensitivity */
  recorder?: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson'>;

  /** Source of the information about the allergy */
  asserter?: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole'>;

  /** Date(/time) of last known occurrence of a reaction */
  lastOccurrence?: string;

  /** Extension for lastOccurrence */
  _lastOccurrence?: IElement;

  /** Additional text not captured in other fields */
  note?: IAnnotation[];

  /** Adverse Reaction Events linked to exposure to substance */
  reaction?: IAllergyIntoleranceReaction[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IAllergyIntolerance>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, ALLERGY_INTOLERANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AllergyIntolerance from a JSON object
   */
  static fromJSON(json: IAllergyIntolerance): AllergyIntolerance {
    return new AllergyIntolerance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AllergyIntolerance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAllergyIntolerance>): AllergyIntolerance {
    return new AllergyIntolerance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AllergyIntolerance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAllergyIntolerance) => Partial<IAllergyIntolerance>): AllergyIntolerance {
    const currentData = this.toJSON();
    return new AllergyIntolerance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAllergyIntolerance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAllergyIntolerance {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, ALLERGY_INTOLERANCE_PROPERTIES);
    return result as IAllergyIntolerance;
  }

  /**
   * Create a deep clone of this AllergyIntolerance
   */
  clone(): AllergyIntolerance {
    return new AllergyIntolerance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AllergyIntolerance
   */
  toString(): string {
    const parts: string[] = ['AllergyIntolerance'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
