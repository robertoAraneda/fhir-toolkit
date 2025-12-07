import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IBiologicallyDerivedProductDispensePerformer,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to BiologicallyDerivedProductDispensePerformer */
const BIOLOGICALLY_DERIVED_PRODUCT_DISPENSE_PERFORMER_PROPERTIES = [
  'function',
  'actor',
] as const;

/**
 * BiologicallyDerivedProductDispensePerformer - Indicates who or what performed an action
 *
 * @see https://hl7.org/fhir/R4/biologicallyderivedproductdispenseperformer.html
 *
 * @example
 * const biologicallyDerivedProductDispensePerformer = new BiologicallyDerivedProductDispensePerformer({
 *   // ... properties
 * });
 */
export class BiologicallyDerivedProductDispensePerformer extends BackboneElement implements IBiologicallyDerivedProductDispensePerformer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifies the function of the performer during the dispense */
  function?: ICodeableConcept;

  /** Who performed the action */
  actor: IReference<'Practitioner'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBiologicallyDerivedProductDispensePerformer>) {
    super(data);
    if (data) {
      this.assignProps(data, BIOLOGICALLY_DERIVED_PRODUCT_DISPENSE_PERFORMER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BiologicallyDerivedProductDispensePerformer from a JSON object
   */
  static fromJSON(json: IBiologicallyDerivedProductDispensePerformer): BiologicallyDerivedProductDispensePerformer {
    return new BiologicallyDerivedProductDispensePerformer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BiologicallyDerivedProductDispensePerformer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBiologicallyDerivedProductDispensePerformer>): BiologicallyDerivedProductDispensePerformer {
    return new BiologicallyDerivedProductDispensePerformer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BiologicallyDerivedProductDispensePerformer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBiologicallyDerivedProductDispensePerformer) => Partial<IBiologicallyDerivedProductDispensePerformer>): BiologicallyDerivedProductDispensePerformer {
    const currentData = this.toJSON();
    return new BiologicallyDerivedProductDispensePerformer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBiologicallyDerivedProductDispensePerformer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBiologicallyDerivedProductDispensePerformer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, BIOLOGICALLY_DERIVED_PRODUCT_DISPENSE_PERFORMER_PROPERTIES);
    return result as IBiologicallyDerivedProductDispensePerformer;
  }

  /**
   * Create a deep clone of this BiologicallyDerivedProductDispensePerformer
   */
  clone(): BiologicallyDerivedProductDispensePerformer {
    return new BiologicallyDerivedProductDispensePerformer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BiologicallyDerivedProductDispensePerformer
   */
  toString(): string {
    const parts: string[] = ['BiologicallyDerivedProductDispensePerformer'];
    return parts.join(', ');
  }
}
