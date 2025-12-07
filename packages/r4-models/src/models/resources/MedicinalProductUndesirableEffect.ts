import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IMedicinalProductUndesirableEffect,
  IPopulation,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductUndesirableEffect */
const MEDICINAL_PRODUCT_UNDESIRABLE_EFFECT_PROPERTIES = [
  'subject',
  'symptomConditionEffect',
  'classification',
  'frequencyOfOccurrence',
  'population',
] as const;

/**
 * MedicinalProductUndesirableEffect - Describe the undesirable effects of the medicinal product.
 *
 * @see https://hl7.org/fhir/R4/medicinalproductundesirableeffect.html
 *
 * @example
 * const medicinalProductUndesirableEffect = new MedicinalProductUndesirableEffect({
 *   // ... properties
 * });
 */
export class MedicinalProductUndesirableEffect extends DomainResource implements IMedicinalProductUndesirableEffect {
  readonly resourceType = 'MedicinalProductUndesirableEffect' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** The medication for which this is an indication */
  subject?: IReference<'MedicinalProduct' | 'Medication'>[];

  /** The symptom, condition or undesirable effect */
  symptomConditionEffect?: ICodeableConcept;

  /** Classification of the effect */
  classification?: ICodeableConcept;

  /** The frequency of occurrence of the effect */
  frequencyOfOccurrence?: ICodeableConcept;

  /** The population group to which this applies */
  population?: IPopulation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IMedicinalProductUndesirableEffect>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_UNDESIRABLE_EFFECT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductUndesirableEffect from a JSON object
   */
  static fromJSON(json: IMedicinalProductUndesirableEffect): MedicinalProductUndesirableEffect {
    return new MedicinalProductUndesirableEffect(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductUndesirableEffect with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductUndesirableEffect>): MedicinalProductUndesirableEffect {
    return new MedicinalProductUndesirableEffect({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductUndesirableEffect by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductUndesirableEffect) => Partial<IMedicinalProductUndesirableEffect>): MedicinalProductUndesirableEffect {
    const currentData = this.toJSON();
    return new MedicinalProductUndesirableEffect({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductUndesirableEffect)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductUndesirableEffect {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_UNDESIRABLE_EFFECT_PROPERTIES);
    return result as IMedicinalProductUndesirableEffect;
  }

  /**
   * Create a deep clone of this MedicinalProductUndesirableEffect
   */
  clone(): MedicinalProductUndesirableEffect {
    return new MedicinalProductUndesirableEffect(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductUndesirableEffect
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductUndesirableEffect'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
