import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IIdentifier,
  IMedicinalProductPackagedBatchIdentifier,
} from '@fhir-toolkit/r4-types';

/** Properties specific to MedicinalProductPackagedBatchIdentifier */
const MEDICINAL_PRODUCT_PACKAGED_BATCH_IDENTIFIER_PROPERTIES = [
  'outerPackaging',
  'immediatePackaging',
] as const;

/**
 * MedicinalProductPackagedBatchIdentifier - Batch numbering
 *
 * @see https://hl7.org/fhir/R4/medicinalproductpackagedbatchidentifier.html
 *
 * @example
 * const medicinalProductPackagedBatchIdentifier = new MedicinalProductPackagedBatchIdentifier({
 *   // ... properties
 * });
 */
export class MedicinalProductPackagedBatchIdentifier extends BackboneElement implements IMedicinalProductPackagedBatchIdentifier {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A number appearing on the outer packaging of a specific batch */
  outerPackaging: IIdentifier;

  /** A number appearing on the immediate packaging (and not the outer packaging) */
  immediatePackaging?: IIdentifier;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductPackagedBatchIdentifier>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_PACKAGED_BATCH_IDENTIFIER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductPackagedBatchIdentifier from a JSON object
   */
  static fromJSON(json: IMedicinalProductPackagedBatchIdentifier): MedicinalProductPackagedBatchIdentifier {
    return new MedicinalProductPackagedBatchIdentifier(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductPackagedBatchIdentifier with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductPackagedBatchIdentifier>): MedicinalProductPackagedBatchIdentifier {
    return new MedicinalProductPackagedBatchIdentifier({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductPackagedBatchIdentifier by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductPackagedBatchIdentifier) => Partial<IMedicinalProductPackagedBatchIdentifier>): MedicinalProductPackagedBatchIdentifier {
    const currentData = this.toJSON();
    return new MedicinalProductPackagedBatchIdentifier({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductPackagedBatchIdentifier)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductPackagedBatchIdentifier {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_PACKAGED_BATCH_IDENTIFIER_PROPERTIES);
    return result as IMedicinalProductPackagedBatchIdentifier;
  }

  /**
   * Create a deep clone of this MedicinalProductPackagedBatchIdentifier
   */
  clone(): MedicinalProductPackagedBatchIdentifier {
    return new MedicinalProductPackagedBatchIdentifier(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductPackagedBatchIdentifier
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductPackagedBatchIdentifier'];
    return parts.join(', ');
  }
}
