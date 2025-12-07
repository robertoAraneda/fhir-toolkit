import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IContractTermSecurityLabel,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ContractTermSecurityLabel */
const CONTRACT_TERM_SECURITY_LABEL_PROPERTIES = [
  'number',
  '_number',
  'classification',
  'category',
  'control',
] as const;

/**
 * ContractTermSecurityLabel - Protection for the Term
 *
 * @see https://hl7.org/fhir/R4/contracttermsecuritylabel.html
 *
 * @example
 * const contractTermSecurityLabel = new ContractTermSecurityLabel({
 *   // ... properties
 * });
 */
export class ContractTermSecurityLabel extends BackboneElement implements IContractTermSecurityLabel {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Link to Security Labels */
  number?: number[];

  /** Extension for number */
  _number?: IElement;

  /** Confidentiality Protection */
  classification: ICoding;

  /** Applicable Policy */
  category?: ICoding[];

  /** Handling Instructions */
  control?: ICoding[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContractTermSecurityLabel>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRACT_TERM_SECURITY_LABEL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContractTermSecurityLabel from a JSON object
   */
  static fromJSON(json: IContractTermSecurityLabel): ContractTermSecurityLabel {
    return new ContractTermSecurityLabel(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContractTermSecurityLabel with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContractTermSecurityLabel>): ContractTermSecurityLabel {
    return new ContractTermSecurityLabel({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContractTermSecurityLabel by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContractTermSecurityLabel) => Partial<IContractTermSecurityLabel>): ContractTermSecurityLabel {
    const currentData = this.toJSON();
    return new ContractTermSecurityLabel({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContractTermSecurityLabel)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContractTermSecurityLabel {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONTRACT_TERM_SECURITY_LABEL_PROPERTIES);
    return result as IContractTermSecurityLabel;
  }

  /**
   * Create a deep clone of this ContractTermSecurityLabel
   */
  clone(): ContractTermSecurityLabel {
    return new ContractTermSecurityLabel(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContractTermSecurityLabel
   */
  toString(): string {
    const parts: string[] = ['ContractTermSecurityLabel'];
    return parts.join(', ');
  }
}
