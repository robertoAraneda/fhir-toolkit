import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  IContractFriendly,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ContractFriendly */
const CONTRACT_FRIENDLY_PROPERTIES = [
  'contentAttachment',
  'contentReference',
] as const;

/**
 * ContractFriendly - Contract Friendly Language
 *
 * @see https://hl7.org/fhir/R4/contractfriendly.html
 *
 * @example
 * const contractFriendly = new ContractFriendly({
 *   // ... properties
 * });
 */
export class ContractFriendly extends BackboneElement implements IContractFriendly {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Easily comprehended representation of this Contract */
  contentAttachment?: IAttachment;

  /** Easily comprehended representation of this Contract */
  contentReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContractFriendly>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRACT_FRIENDLY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContractFriendly from a JSON object
   */
  static fromJSON(json: IContractFriendly): ContractFriendly {
    return new ContractFriendly(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContractFriendly with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContractFriendly>): ContractFriendly {
    return new ContractFriendly({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContractFriendly by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContractFriendly) => Partial<IContractFriendly>): ContractFriendly {
    const currentData = this.toJSON();
    return new ContractFriendly({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContractFriendly)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContractFriendly {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONTRACT_FRIENDLY_PROPERTIES);
    return result as IContractFriendly;
  }

  /**
   * Create a deep clone of this ContractFriendly
   */
  clone(): ContractFriendly {
    return new ContractFriendly(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContractFriendly
   */
  toString(): string {
    const parts: string[] = ['ContractFriendly'];
    return parts.join(', ');
  }
}
