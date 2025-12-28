import { BackboneElement } from '../base/BackboneElement.js';
import type {
  AllergyIntoleranceSeverityType,
  IAllergyIntoleranceReaction,
  IAnnotation,
  ICodeableConcept,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to AllergyIntoleranceReaction */
const ALLERGY_INTOLERANCE_REACTION_PROPERTIES = [
  'substance',
  'manifestation',
  'description',
  '_description',
  'onset',
  '_onset',
  'severity',
  '_severity',
  'exposureRoute',
  'note',
] as const;

/**
 * AllergyIntoleranceReaction - Adverse Reaction Events linked to exposure to substance
 *
 * @see https://hl7.org/fhir/R4B/allergyintolerancereaction.html
 *
 * @example
 * const allergyIntoleranceReaction = new AllergyIntoleranceReaction({
 *   // ... properties
 * });
 */
export class AllergyIntoleranceReaction extends BackboneElement implements IAllergyIntoleranceReaction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Specific substance or pharmaceutical product considered to be responsible for event */
  substance?: ICodeableConcept;

  /** Clinical symptoms/signs associated with the Event */
  manifestation: ICodeableConcept[];

  /** Description of the event as a whole */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Date(/time) when manifestations showed */
  onset?: string;

  /** Extension for onset */
  _onset?: IElement;

  /** mild | moderate | severe (of event as a whole) */
  severity?: AllergyIntoleranceSeverityType;

  /** Extension for severity */
  _severity?: IElement;

  /** How the subject was exposed to the substance */
  exposureRoute?: ICodeableConcept;

  /** Text about event not captured in other fields */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAllergyIntoleranceReaction>) {
    super(data);
    if (data) {
      this.assignProps(data, ALLERGY_INTOLERANCE_REACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AllergyIntoleranceReaction from a JSON object
   */
  static fromJSON(json: IAllergyIntoleranceReaction): AllergyIntoleranceReaction {
    return new AllergyIntoleranceReaction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AllergyIntoleranceReaction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAllergyIntoleranceReaction>): AllergyIntoleranceReaction {
    return new AllergyIntoleranceReaction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AllergyIntoleranceReaction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAllergyIntoleranceReaction) => Partial<IAllergyIntoleranceReaction>): AllergyIntoleranceReaction {
    const currentData = this.toJSON();
    return new AllergyIntoleranceReaction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAllergyIntoleranceReaction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAllergyIntoleranceReaction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ALLERGY_INTOLERANCE_REACTION_PROPERTIES);
    return result as IAllergyIntoleranceReaction;
  }

  /**
   * Create a deep clone of this AllergyIntoleranceReaction
   */
  clone(): AllergyIntoleranceReaction {
    return new AllergyIntoleranceReaction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AllergyIntoleranceReaction
   */
  toString(): string {
    const parts: string[] = ['AllergyIntoleranceReaction'];
    return parts.join(', ');
  }
}
