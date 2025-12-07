import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIdentifier,
  INutritionOrder,
  INutritionOrderEnteralFormula,
  INutritionOrderOralDiet,
  INutritionOrderSupplement,
  IReference,
  RequestIntentType,
  RequestPriorityType,
  RequestStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to NutritionOrder */
const NUTRITION_ORDER_PROPERTIES = [
  'identifier',
  'instantiatesCanonical',
  '_instantiatesCanonical',
  'instantiatesUri',
  '_instantiatesUri',
  'instantiates',
  '_instantiates',
  'basedOn',
  'groupIdentifier',
  'status',
  '_status',
  'intent',
  '_intent',
  'priority',
  '_priority',
  'subject',
  'encounter',
  'supportingInformation',
  'dateTime',
  '_dateTime',
  'orderer',
  'performer',
  'allergyIntolerance',
  'foodPreferenceModifier',
  'excludeFoodModifier',
  'outsideFoodAllowed',
  '_outsideFoodAllowed',
  'oralDiet',
  'supplement',
  'enteralFormula',
  'note',
] as const;

/**
 * NutritionOrder - A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 *
 * @see https://hl7.org/fhir/R4/nutritionorder.html
 *
 * @example
 * const nutritionOrder = new NutritionOrder({
 *   resourceType: 'NutritionOrder',
 *   // ... properties
 * });
 */
export class NutritionOrder extends DomainResource implements INutritionOrder {
  readonly resourceType = 'NutritionOrder' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifiers assigned to this order */
  identifier?: IIdentifier[];

  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: string[];

  /** Extension for instantiatesCanonical */
  _instantiatesCanonical?: IElement;

  /** Instantiates external protocol or definition */
  instantiatesUri?: string[];

  /** Extension for instantiatesUri */
  _instantiatesUri?: IElement;

  /** Instantiates protocol or definition */
  instantiates?: string[];

  /** Extension for instantiates */
  _instantiates?: IElement;

  /** What this order fulfills */
  basedOn?: IReference<'CarePlan' | 'NutritionOrder' | 'ServiceRequest'>[];

  /** Composite Request ID */
  groupIdentifier?: IIdentifier;

  /** draft | active | on-hold | revoked | completed | entered-in-error | unknown */
  status: RequestStatusType;

  /** Extension for status */
  _status?: IElement;

  /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option */
  intent: RequestIntentType;

  /** Extension for intent */
  _intent?: IElement;

  /** routine | urgent | asap | stat */
  priority?: RequestPriorityType;

  /** Extension for priority */
  _priority?: IElement;

  /** Who requires the diet, formula or nutritional supplement */
  subject: IReference<'Patient' | 'Group'>;

  /** The encounter associated with this nutrition order */
  encounter?: IReference<'Encounter'>;

  /** Information to support fulfilling of the nutrition order */
  supportingInformation?: IReference<'Resource'>[];

  /** Date and time the nutrition order was requested */
  dateTime: string;

  /** Extension for dateTime */
  _dateTime?: IElement;

  /** Who ordered the diet, formula or nutritional supplement */
  orderer?: IReference<'Practitioner' | 'PractitionerRole'>;

  /** Who is desired to perform the administration of what is being ordered */
  performer?: ICodeableReference[];

  /** List of the patient's food and nutrition-related allergies and intolerances */
  allergyIntolerance?: IReference<'AllergyIntolerance'>[];

  /** Order-specific modifier about the type of food that should be given */
  foodPreferenceModifier?: ICodeableConcept[];

  /** Order-specific modifier about the type of food that should not be given */
  excludeFoodModifier?: ICodeableConcept[];

  /** Capture when a food item is brought in by the patient and/or family */
  outsideFoodAllowed?: boolean;

  /** Extension for outsideFoodAllowed */
  _outsideFoodAllowed?: IElement;

  /** Oral diet components */
  oralDiet?: INutritionOrderOralDiet;

  /** Supplement components */
  supplement?: INutritionOrderSupplement[];

  /** Enteral formula components */
  enteralFormula?: INutritionOrderEnteralFormula;

  /** Comments */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<INutritionOrder>) {
    super(data);
    if (data) {
      this.assignProps(data, NUTRITION_ORDER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create NutritionOrder from a JSON object
   */
  static fromJSON(json: INutritionOrder): NutritionOrder {
    return new NutritionOrder(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new NutritionOrder with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<INutritionOrder>): NutritionOrder {
    return new NutritionOrder({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new NutritionOrder by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: INutritionOrder) => Partial<INutritionOrder>): NutritionOrder {
    const currentData = this.toJSON();
    return new NutritionOrder({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (INutritionOrder)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): INutritionOrder {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, NUTRITION_ORDER_PROPERTIES);
    return result as INutritionOrder;
  }

  /**
   * Create a deep clone of this NutritionOrder
   */
  clone(): NutritionOrder {
    return new NutritionOrder(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the NutritionOrder
   */
  toString(): string {
    const parts: string[] = ['NutritionOrder'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
