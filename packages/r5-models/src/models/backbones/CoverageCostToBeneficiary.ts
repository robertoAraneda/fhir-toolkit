import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICoverageCostToBeneficiary,
  ICoverageCostToBeneficiaryException,
  IMoney,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CoverageCostToBeneficiary */
const COVERAGE_COST_TO_BENEFICIARY_PROPERTIES = [
  'type',
  'category',
  'network',
  'unit',
  'term',
  'valueQuantity',
  'valueMoney',
  'exception',
] as const;

/**
 * CoverageCostToBeneficiary - Patient payments for services/products
 *
 * @see https://hl7.org/fhir/R5/coveragecosttobeneficiary.html
 *
 * @example
 * const coverageCostToBeneficiary = new CoverageCostToBeneficiary({
 *   // ... properties
 * });
 */
export class CoverageCostToBeneficiary extends BackboneElement implements ICoverageCostToBeneficiary {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Cost category */
  type?: ICodeableConcept;

  /** Benefit classification */
  category?: ICodeableConcept;

  /** In or out of network */
  network?: ICodeableConcept;

  /** Individual or family */
  unit?: ICodeableConcept;

  /** Annual or lifetime */
  term?: ICodeableConcept;

  /** The amount or percentage due from the beneficiary */
  valueQuantity?: IQuantity;

  /** The amount or percentage due from the beneficiary */
  valueMoney?: IMoney;

  /** Exceptions for patient payments */
  exception?: ICoverageCostToBeneficiaryException[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICoverageCostToBeneficiary>) {
    super(data);
    if (data) {
      this.assignProps(data, COVERAGE_COST_TO_BENEFICIARY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CoverageCostToBeneficiary from a JSON object
   */
  static fromJSON(json: ICoverageCostToBeneficiary): CoverageCostToBeneficiary {
    return new CoverageCostToBeneficiary(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CoverageCostToBeneficiary with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICoverageCostToBeneficiary>): CoverageCostToBeneficiary {
    return new CoverageCostToBeneficiary({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CoverageCostToBeneficiary by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICoverageCostToBeneficiary) => Partial<ICoverageCostToBeneficiary>): CoverageCostToBeneficiary {
    const currentData = this.toJSON();
    return new CoverageCostToBeneficiary({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICoverageCostToBeneficiary)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICoverageCostToBeneficiary {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COVERAGE_COST_TO_BENEFICIARY_PROPERTIES);
    return result as ICoverageCostToBeneficiary;
  }

  /**
   * Create a deep clone of this CoverageCostToBeneficiary
   */
  clone(): CoverageCostToBeneficiary {
    return new CoverageCostToBeneficiary(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CoverageCostToBeneficiary
   */
  toString(): string {
    const parts: string[] = ['CoverageCostToBeneficiary'];
    return parts.join(', ');
  }
}
