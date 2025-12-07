import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IContractTermOffer,
  IContractTermOfferAnswer,
  IContractTermOfferParty,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ContractTermOffer */
const CONTRACT_TERM_OFFER_PROPERTIES = [
  'identifier',
  'party',
  'topic',
  'type',
  'decision',
  'decisionMode',
  'answer',
  'text',
  '_text',
  'linkId',
  '_linkId',
  'securityLabelNumber',
  '_securityLabelNumber',
] as const;

/**
 * ContractTermOffer - Context of the Contract term
 *
 * @see https://hl7.org/fhir/R4/contracttermoffer.html
 *
 * @example
 * const contractTermOffer = new ContractTermOffer({
 *   // ... properties
 * });
 */
export class ContractTermOffer extends BackboneElement implements IContractTermOffer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Offer business ID */
  identifier?: IIdentifier[];

  /** Offer Recipient */
  party?: IContractTermOfferParty[];

  /** Negotiable offer asset */
  topic?: IReference<'Resource'>;

  /** Contract Offer Type or Form */
  type?: ICodeableConcept;

  /** Accepting party choice */
  decision?: ICodeableConcept;

  /** How decision is conveyed */
  decisionMode?: ICodeableConcept[];

  /** Response to offer text */
  answer?: IContractTermOfferAnswer[];

  /** Human readable offer text */
  text?: string;

  /** Extension for text */
  _text?: IElement;

  /** Pointer to text */
  linkId?: string[];

  /** Extension for linkId */
  _linkId?: IElement;

  /** Offer restriction numbers */
  securityLabelNumber?: number[];

  /** Extension for securityLabelNumber */
  _securityLabelNumber?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContractTermOffer>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRACT_TERM_OFFER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContractTermOffer from a JSON object
   */
  static fromJSON(json: IContractTermOffer): ContractTermOffer {
    return new ContractTermOffer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContractTermOffer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContractTermOffer>): ContractTermOffer {
    return new ContractTermOffer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContractTermOffer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContractTermOffer) => Partial<IContractTermOffer>): ContractTermOffer {
    const currentData = this.toJSON();
    return new ContractTermOffer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContractTermOffer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContractTermOffer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONTRACT_TERM_OFFER_PROPERTIES);
    return result as IContractTermOffer;
  }

  /**
   * Create a deep clone of this ContractTermOffer
   */
  clone(): ContractTermOffer {
    return new ContractTermOffer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContractTermOffer
   */
  toString(): string {
    const parts: string[] = ['ContractTermOffer'];
    return parts.join(', ');
  }
}
