import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  IContractRule,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ContractRule */
const CONTRACT_RULE_PROPERTIES = [
  'contentAttachment',
  'contentReference',
] as const;

/**
 * ContractRule - Computable Contract Language
 *
 * @see https://hl7.org/fhir/R4/contractrule.html
 *
 * @example
 * const contractRule = new ContractRule({
 *   // ... properties
 * });
 */
export class ContractRule extends BackboneElement implements IContractRule {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Computable Contract Rules */
  contentAttachment?: IAttachment;

  /** Computable Contract Rules */
  contentReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContractRule>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRACT_RULE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContractRule from a JSON object
   */
  static fromJSON(json: IContractRule): ContractRule {
    return new ContractRule(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContractRule with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContractRule>): ContractRule {
    return new ContractRule({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContractRule by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContractRule) => Partial<IContractRule>): ContractRule {
    const currentData = this.toJSON();
    return new ContractRule({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContractRule)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContractRule {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONTRACT_RULE_PROPERTIES);
    return result as IContractRule;
  }

  /**
   * Create a deep clone of this ContractRule
   */
  clone(): ContractRule {
    return new ContractRule(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContractRule
   */
  toString(): string {
    const parts: string[] = ['ContractRule'];
    return parts.join(', ');
  }
}
