import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClinicalUseDefinitionInteraction,
  IClinicalUseDefinitionInteractionInteractant,
  ICodeableConcept,
  ICodeableReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ClinicalUseDefinitionInteraction */
const CLINICAL_USE_DEFINITION_INTERACTION_PROPERTIES = [
  'interactant',
  'type',
  'effect',
  'incidence',
  'management',
] as const;

/**
 * ClinicalUseDefinitionInteraction - Specifics for when this is an interaction
 *
 * @see https://hl7.org/fhir/R5/clinicalusedefinitioninteraction.html
 *
 * @example
 * const clinicalUseDefinitionInteraction = new ClinicalUseDefinitionInteraction({
 *   // ... properties
 * });
 */
export class ClinicalUseDefinitionInteraction extends BackboneElement implements IClinicalUseDefinitionInteraction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The specific medication, product, food etc. or laboratory test that interacts */
  interactant?: IClinicalUseDefinitionInteractionInteractant[];

  /** The type of the interaction e.g. drug-drug interaction, drug-lab test interaction */
  type?: ICodeableConcept;

  /** The effect of the interaction, for example "reduced gastric absorption of primary medication" */
  effect?: ICodeableReference;

  /** The incidence of the interaction, e.g. theoretical, observed */
  incidence?: ICodeableConcept;

  /** Actions for managing the interaction */
  management?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClinicalUseDefinitionInteraction>) {
    super(data);
    if (data) {
      this.assignProps(data, CLINICAL_USE_DEFINITION_INTERACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClinicalUseDefinitionInteraction from a JSON object
   */
  static fromJSON(json: IClinicalUseDefinitionInteraction): ClinicalUseDefinitionInteraction {
    return new ClinicalUseDefinitionInteraction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClinicalUseDefinitionInteraction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClinicalUseDefinitionInteraction>): ClinicalUseDefinitionInteraction {
    return new ClinicalUseDefinitionInteraction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClinicalUseDefinitionInteraction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClinicalUseDefinitionInteraction) => Partial<IClinicalUseDefinitionInteraction>): ClinicalUseDefinitionInteraction {
    const currentData = this.toJSON();
    return new ClinicalUseDefinitionInteraction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClinicalUseDefinitionInteraction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClinicalUseDefinitionInteraction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLINICAL_USE_DEFINITION_INTERACTION_PROPERTIES);
    return result as IClinicalUseDefinitionInteraction;
  }

  /**
   * Create a deep clone of this ClinicalUseDefinitionInteraction
   */
  clone(): ClinicalUseDefinitionInteraction {
    return new ClinicalUseDefinitionInteraction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClinicalUseDefinitionInteraction
   */
  toString(): string {
    const parts: string[] = ['ClinicalUseDefinitionInteraction'];
    return parts.join(', ');
  }
}
