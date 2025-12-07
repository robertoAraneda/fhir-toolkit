import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IContractSigner,
  IReference,
  ISignature,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ContractSigner */
const CONTRACT_SIGNER_PROPERTIES = [
  'type',
  'party',
  'signature',
] as const;

/**
 * ContractSigner - Contract Signatory
 *
 * @see https://hl7.org/fhir/R4/contractsigner.html
 *
 * @example
 * const contractSigner = new ContractSigner({
 *   // ... properties
 * });
 */
export class ContractSigner extends BackboneElement implements IContractSigner {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Contract Signatory Role */
  type: ICoding;

  /** Contract Signatory Party */
  party: IReference<'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /** Contract Documentation Signature */
  signature: ISignature[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContractSigner>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRACT_SIGNER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContractSigner from a JSON object
   */
  static fromJSON(json: IContractSigner): ContractSigner {
    return new ContractSigner(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContractSigner with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContractSigner>): ContractSigner {
    return new ContractSigner({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContractSigner by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContractSigner) => Partial<IContractSigner>): ContractSigner {
    const currentData = this.toJSON();
    return new ContractSigner({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContractSigner)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContractSigner {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONTRACT_SIGNER_PROPERTIES);
    return result as IContractSigner;
  }

  /**
   * Create a deep clone of this ContractSigner
   */
  clone(): ContractSigner {
    return new ContractSigner(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContractSigner
   */
  toString(): string {
    const parts: string[] = ['ContractSigner'];
    return parts.join(', ');
  }
}
