import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IChargeItemPerformer,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ChargeItemPerformer */
const CHARGE_ITEM_PERFORMER_PROPERTIES = [
  'function',
  'actor',
] as const;

/**
 * ChargeItemPerformer - Who performed charged service
 *
 * @see https://hl7.org/fhir/R4/chargeitemperformer.html
 *
 * @example
 * const chargeItemPerformer = new ChargeItemPerformer({
 *   // ... properties
 * });
 */
export class ChargeItemPerformer extends BackboneElement implements IChargeItemPerformer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** What type of performance was done */
  function?: ICodeableConcept;

  /** Individual who was performing */
  actor: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'Device' | 'RelatedPerson'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IChargeItemPerformer>) {
    super(data);
    if (data) {
      this.assignProps(data, CHARGE_ITEM_PERFORMER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ChargeItemPerformer from a JSON object
   */
  static fromJSON(json: IChargeItemPerformer): ChargeItemPerformer {
    return new ChargeItemPerformer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ChargeItemPerformer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IChargeItemPerformer>): ChargeItemPerformer {
    return new ChargeItemPerformer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ChargeItemPerformer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IChargeItemPerformer) => Partial<IChargeItemPerformer>): ChargeItemPerformer {
    const currentData = this.toJSON();
    return new ChargeItemPerformer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IChargeItemPerformer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IChargeItemPerformer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CHARGE_ITEM_PERFORMER_PROPERTIES);
    return result as IChargeItemPerformer;
  }

  /**
   * Create a deep clone of this ChargeItemPerformer
   */
  clone(): ChargeItemPerformer {
    return new ChargeItemPerformer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ChargeItemPerformer
   */
  toString(): string {
    const parts: string[] = ['ChargeItemPerformer'];
    return parts.join(', ');
  }
}
