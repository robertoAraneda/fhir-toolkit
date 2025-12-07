import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicinalProductInteraction,
  IMedicinalProductInteractionInteractant,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductInteraction */
const MEDICINAL_PRODUCT_INTERACTION_PROPERTIES = [
  'subject',
  'description',
  '_description',
  'interactant',
  'type',
  'effect',
  'incidence',
  'management',
] as const;

/**
 * MedicinalProductInteraction - The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 *
 * @see https://hl7.org/fhir/R4/medicinalproductinteraction.html
 *
 * @example
 * const medicinalProductInteraction = new MedicinalProductInteraction({
 *   // ... properties
 * });
 */
export class MedicinalProductInteraction extends DomainResource implements IMedicinalProductInteraction {
  readonly resourceType = 'MedicinalProductInteraction' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** The medication for which this is a described interaction */
  subject?: IReference<'MedicinalProduct' | 'Medication' | 'Substance'>[];

  /** The interaction described */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** The specific medication, food or laboratory test that interacts */
  interactant?: IMedicinalProductInteractionInteractant[];

  /** The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction */
  type?: ICodeableConcept;

  /** The effect of the interaction, for example "reduced gastric absorption of primary medication" */
  effect?: ICodeableConcept;

  /** The incidence of the interaction, e.g. theoretical, observed */
  incidence?: ICodeableConcept;

  /** Actions for managing the interaction */
  management?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IMedicinalProductInteraction>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_INTERACTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductInteraction from a JSON object
   */
  static fromJSON(json: IMedicinalProductInteraction): MedicinalProductInteraction {
    return new MedicinalProductInteraction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductInteraction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductInteraction>): MedicinalProductInteraction {
    return new MedicinalProductInteraction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductInteraction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductInteraction) => Partial<IMedicinalProductInteraction>): MedicinalProductInteraction {
    const currentData = this.toJSON();
    return new MedicinalProductInteraction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductInteraction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductInteraction {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_INTERACTION_PROPERTIES);
    return result as IMedicinalProductInteraction;
  }

  /**
   * Create a deep clone of this MedicinalProductInteraction
   */
  clone(): MedicinalProductInteraction {
    return new MedicinalProductInteraction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductInteraction
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductInteraction'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
