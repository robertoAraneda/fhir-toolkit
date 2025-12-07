import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IContractTermOfferParty,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ContractTermOfferParty */
const CONTRACT_TERM_OFFER_PARTY_PROPERTIES = [
  'reference',
  'role',
] as const;

/**
 * ContractTermOfferParty - Offer Recipient
 *
 * @see https://hl7.org/fhir/R4/contracttermofferparty.html
 *
 * @example
 * const contractTermOfferParty = new ContractTermOfferParty({
 *   // ... properties
 * });
 */
export class ContractTermOfferParty extends BackboneElement implements IContractTermOfferParty {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Referenced entity */
  reference: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'Group' | 'Organization'>[];

  /** Participant engagement type */
  role: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContractTermOfferParty>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRACT_TERM_OFFER_PARTY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContractTermOfferParty from a JSON object
   */
  static fromJSON(json: IContractTermOfferParty): ContractTermOfferParty {
    return new ContractTermOfferParty(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContractTermOfferParty with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContractTermOfferParty>): ContractTermOfferParty {
    return new ContractTermOfferParty({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContractTermOfferParty by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContractTermOfferParty) => Partial<IContractTermOfferParty>): ContractTermOfferParty {
    const currentData = this.toJSON();
    return new ContractTermOfferParty({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContractTermOfferParty)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContractTermOfferParty {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONTRACT_TERM_OFFER_PARTY_PROPERTIES);
    return result as IContractTermOfferParty;
  }

  /**
   * Create a deep clone of this ContractTermOfferParty
   */
  clone(): ContractTermOfferParty {
    return new ContractTermOfferParty(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContractTermOfferParty
   */
  toString(): string {
    const parts: string[] = ['ContractTermOfferParty'];
    return parts.join(', ');
  }
}
