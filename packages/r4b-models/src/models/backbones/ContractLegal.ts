import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  IContractLegal,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ContractLegal */
const CONTRACT_LEGAL_PROPERTIES = [
  'contentAttachment',
  'contentReference',
] as const;

/**
 * ContractLegal - Contract Legal Language
 *
 * @see https://hl7.org/fhir/R4B/contractlegal.html
 *
 * @example
 * const contractLegal = new ContractLegal({
 *   // ... properties
 * });
 */
export class ContractLegal extends BackboneElement implements IContractLegal {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Contract Legal Text */
  contentAttachment?: IAttachment;

  /** Contract Legal Text */
  contentReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContractLegal>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRACT_LEGAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContractLegal from a JSON object
   */
  static fromJSON(json: IContractLegal): ContractLegal {
    return new ContractLegal(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContractLegal with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContractLegal>): ContractLegal {
    return new ContractLegal({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContractLegal by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContractLegal) => Partial<IContractLegal>): ContractLegal {
    const currentData = this.toJSON();
    return new ContractLegal({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContractLegal)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContractLegal {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONTRACT_LEGAL_PROPERTIES);
    return result as IContractLegal;
  }

  /**
   * Create a deep clone of this ContractLegal
   */
  clone(): ContractLegal {
    return new ContractLegal(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContractLegal
   */
  toString(): string {
    const parts: string[] = ['ContractLegal'];
    return parts.join(', ');
  }
}
