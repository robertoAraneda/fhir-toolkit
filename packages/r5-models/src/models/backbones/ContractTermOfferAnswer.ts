import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICoding,
  IContractTermOfferAnswer,
  IElement,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ContractTermOfferAnswer */
const CONTRACT_TERM_OFFER_ANSWER_PROPERTIES = [
  'valueBoolean',
  '_valueBoolean',
  'valueDecimal',
  '_valueDecimal',
  'valueInteger',
  '_valueInteger',
  'valueDate',
  '_valueDate',
  'valueDateTime',
  '_valueDateTime',
  'valueTime',
  '_valueTime',
  'valueString',
  '_valueString',
  'valueUri',
  '_valueUri',
  'valueAttachment',
  'valueCoding',
  'valueQuantity',
  'valueReference',
] as const;

/**
 * ContractTermOfferAnswer - Response to offer text
 *
 * @see https://hl7.org/fhir/R4/contracttermofferanswer.html
 *
 * @example
 * const contractTermOfferAnswer = new ContractTermOfferAnswer({
 *   // ... properties
 * });
 */
export class ContractTermOfferAnswer extends BackboneElement implements IContractTermOfferAnswer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The actual answer response */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** The actual answer response */
  valueDecimal?: number;

  /** Extension for valueDecimal */
  _valueDecimal?: IElement;

  /** The actual answer response */
  valueInteger?: number;

  /** Extension for valueInteger */
  _valueInteger?: IElement;

  /** The actual answer response */
  valueDate?: string;

  /** Extension for valueDate */
  _valueDate?: IElement;

  /** The actual answer response */
  valueDateTime?: string;

  /** Extension for valueDateTime */
  _valueDateTime?: IElement;

  /** The actual answer response */
  valueTime?: string;

  /** Extension for valueTime */
  _valueTime?: IElement;

  /** The actual answer response */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** The actual answer response */
  valueUri?: string;

  /** Extension for valueUri */
  _valueUri?: IElement;

  /** The actual answer response */
  valueAttachment?: IAttachment;

  /** The actual answer response */
  valueCoding?: ICoding;

  /** The actual answer response */
  valueQuantity?: IQuantity;

  /** The actual answer response */
  valueReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContractTermOfferAnswer>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRACT_TERM_OFFER_ANSWER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContractTermOfferAnswer from a JSON object
   */
  static fromJSON(json: IContractTermOfferAnswer): ContractTermOfferAnswer {
    return new ContractTermOfferAnswer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContractTermOfferAnswer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContractTermOfferAnswer>): ContractTermOfferAnswer {
    return new ContractTermOfferAnswer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContractTermOfferAnswer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContractTermOfferAnswer) => Partial<IContractTermOfferAnswer>): ContractTermOfferAnswer {
    const currentData = this.toJSON();
    return new ContractTermOfferAnswer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContractTermOfferAnswer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContractTermOfferAnswer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONTRACT_TERM_OFFER_ANSWER_PROPERTIES);
    return result as IContractTermOfferAnswer;
  }

  /**
   * Create a deep clone of this ContractTermOfferAnswer
   */
  clone(): ContractTermOfferAnswer {
    return new ContractTermOfferAnswer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContractTermOfferAnswer
   */
  toString(): string {
    const parts: string[] = ['ContractTermOfferAnswer'];
    return parts.join(', ');
  }
}
