import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IContractTerm,
  IContractTermAction,
  IContractTermAsset,
  IContractTermOffer,
  IContractTermSecurityLabel,
  IElement,
  IIdentifier,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ContractTerm */
const CONTRACT_TERM_PROPERTIES = [
  'identifier',
  'issued',
  '_issued',
  'applies',
  'topicCodeableConcept',
  'topicReference',
  'type',
  'subType',
  'text',
  '_text',
  'securityLabel',
  'offer',
  'asset',
  'action',
  'group',
] as const;

/**
 * ContractTerm - Contract Term List
 *
 * @see https://hl7.org/fhir/R5/contractterm.html
 *
 * @example
 * const contractTerm = new ContractTerm({
 *   // ... properties
 * });
 */
export class ContractTerm extends BackboneElement implements IContractTerm {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Contract Term Number */
  identifier?: IIdentifier;

  /** Contract Term Issue Date Time */
  issued?: string;

  /** Extension for issued */
  _issued?: IElement;

  /** Contract Term Effective Time */
  applies?: IPeriod;

  /** Term Concern */
  topicCodeableConcept?: ICodeableConcept;

  /** Term Concern */
  topicReference?: IReference;

  /** Contract Term Type or Form */
  type?: ICodeableConcept;

  /** Contract Term Type specific classification */
  subType?: ICodeableConcept;

  /** Term Statement */
  text?: string;

  /** Extension for text */
  _text?: IElement;

  /** Protection for the Term */
  securityLabel?: IContractTermSecurityLabel[];

  /** Context of the Contract term */
  offer: IContractTermOffer;

  /** Contract Term Asset List */
  asset?: IContractTermAsset[];

  /** Entity being ascribed responsibility */
  action?: IContractTermAction[];

  /** Nested Contract Term Group */
  group?: IContractTerm[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContractTerm>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRACT_TERM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContractTerm from a JSON object
   */
  static fromJSON(json: IContractTerm): ContractTerm {
    return new ContractTerm(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContractTerm with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContractTerm>): ContractTerm {
    return new ContractTerm({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContractTerm by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContractTerm) => Partial<IContractTerm>): ContractTerm {
    const currentData = this.toJSON();
    return new ContractTerm({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContractTerm)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContractTerm {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONTRACT_TERM_PROPERTIES);
    return result as IContractTerm;
  }

  /**
   * Create a deep clone of this ContractTerm
   */
  clone(): ContractTerm {
    return new ContractTerm(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContractTerm
   */
  toString(): string {
    const parts: string[] = ['ContractTerm'];
    return parts.join(', ');
  }
}
