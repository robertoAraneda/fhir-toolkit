import { DomainResource } from '../base/DomainResource.js';
import type {
  EventStatusType,
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIdentifier,
  INutritionIntake,
  INutritionIntakeConsumedItem,
  INutritionIntakeIngredientLabel,
  INutritionIntakePerformer,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to NutritionIntake */
const NUTRITION_INTAKE_PROPERTIES = [
  'identifier',
  'instantiatesCanonical',
  '_instantiatesCanonical',
  'instantiatesUri',
  '_instantiatesUri',
  'basedOn',
  'partOf',
  'status',
  '_status',
  'statusReason',
  'code',
  'subject',
  'encounter',
  'occurrenceDateTime',
  '_occurrenceDateTime',
  'occurrencePeriod',
  'recorded',
  '_recorded',
  'reportedBoolean',
  '_reportedBoolean',
  'reportedReference',
  'consumedItem',
  'ingredientLabel',
  'performer',
  'location',
  'derivedFrom',
  'reason',
  'note',
] as const;

/**
 * NutritionIntake - A record of food or fluid that is being consumed by a patient.   A NutritionIntake may indicate that the patient may be consuming the food or fluid now or has consumed the food or fluid in the past.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay or through an app that tracks food or fluids consumed.   The consumption information may come from sources such as the patient's memory, from a nutrition label,  or from a clinician documenting observed intake.
 *
 * @see https://hl7.org/fhir/R5/nutritionintake.html
 *
 * @example
 * const nutritionIntake = new NutritionIntake({
 *   // ... properties
 * });
 */
export class NutritionIntake extends DomainResource implements INutritionIntake {
  readonly resourceType = 'NutritionIntake' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External identifier */
  identifier?: IIdentifier[];

  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: string[];

  /** Extension for instantiatesCanonical */
  _instantiatesCanonical?: IElement;

  /** Instantiates external protocol or definition */
  instantiatesUri?: string[];

  /** Extension for instantiatesUri */
  _instantiatesUri?: IElement;

  /** Fulfils plan, proposal or order */
  basedOn?: IReference<'NutritionOrder' | 'CarePlan' | 'ServiceRequest'>[];

  /** Part of referenced event */
  partOf?: IReference<'NutritionIntake' | 'Procedure' | 'Observation'>[];

  /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown */
  status: EventStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Reason for current status */
  statusReason?: ICodeableConcept[];

  /** Code representing an overall type of nutrition intake */
  code?: ICodeableConcept;

  /** Who is/was consuming the food or fluid */
  subject: IReference<'Patient' | 'Group'>;

  /** Encounter associated with NutritionIntake */
  encounter?: IReference<'Encounter'>;

  /** The date/time or interval when the food or fluid is/was consumed */
  occurrenceDateTime?: string;

  /** Extension for occurrenceDateTime */
  _occurrenceDateTime?: IElement;

  /** The date/time or interval when the food or fluid is/was consumed */
  occurrencePeriod?: IPeriod;

  /** When the intake was recorded */
  recorded?: string;

  /** Extension for recorded */
  _recorded?: IElement;

  /** Person or organization that provided the information about the consumption of this food or fluid */
  reportedBoolean?: boolean;

  /** Extension for reportedBoolean */
  _reportedBoolean?: IElement;

  /** Person or organization that provided the information about the consumption of this food or fluid */
  reportedReference?: IReference;

  /** What food or fluid product or item was consumed */
  consumedItem: INutritionIntakeConsumedItem[];

  /** Total nutrient for the whole meal, product, serving */
  ingredientLabel?: INutritionIntakeIngredientLabel[];

  /** Who was performed in the intake */
  performer?: INutritionIntakePerformer[];

  /** Where the intake occurred */
  location?: IReference<'Location'>;

  /** Additional supporting information */
  derivedFrom?: IReference<'Resource'>[];

  /** Reason for why the food or fluid is /was consumed */
  reason?: ICodeableReference[];

  /** Further information about the consumption */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<INutritionIntake>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_INTAKE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionIntake from a JSON object
   */
  static fromJSON(json: INutritionIntake): NutritionIntake {
    return new NutritionIntake(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionIntake with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionIntake>): NutritionIntake {
    return new NutritionIntake({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionIntake by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionIntake) => Partial<INutritionIntake>): NutritionIntake {
    const currentData = this.toJSON();
    return new NutritionIntake({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionIntake)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionIntake {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, NUTRITION_INTAKE_PROPERTIES);
    return result as INutritionIntake;
  }

  /**
   * Create a deep clone of this NutritionIntake
   */
  clone(): NutritionIntake {
    return new NutritionIntake(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionIntake
   */
  toString(): string {
    const parts: string[] = ['NutritionIntake'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
