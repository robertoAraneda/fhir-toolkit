import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IContractTermAssetValuedItem,
  IElement,
  IIdentifier,
  IMoney,
  IQuantity,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ContractTermAssetValuedItem */
const CONTRACT_TERM_ASSET_VALUED_ITEM_PROPERTIES = [
  'entityCodeableConcept',
  'entityReference',
  'identifier',
  'effectiveTime',
  '_effectiveTime',
  'quantity',
  'unitPrice',
  'factor',
  '_factor',
  'points',
  '_points',
  'net',
  'payment',
  '_payment',
  'paymentDate',
  '_paymentDate',
  'responsible',
  'recipient',
  'linkId',
  '_linkId',
  'securityLabelNumber',
  '_securityLabelNumber',
] as const;

/**
 * ContractTermAssetValuedItem - Contract Valued Item List
 *
 * @see https://hl7.org/fhir/R4B/contracttermassetvalueditem.html
 *
 * @example
 * const contractTermAssetValuedItem = new ContractTermAssetValuedItem({
 *   // ... properties
 * });
 */
export class ContractTermAssetValuedItem extends BackboneElement implements IContractTermAssetValuedItem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Contract Valued Item Type */
  entityCodeableConcept?: ICodeableConcept;

  /** Contract Valued Item Type */
  entityReference?: IReference;

  /** Contract Valued Item Number */
  identifier?: IIdentifier;

  /** Contract Valued Item Effective Tiem */
  effectiveTime?: string;

  /** Extension for effectiveTime */
  _effectiveTime?: IElement;

  /** Count of Contract Valued Items */
  quantity?: IQuantity;

  /** Contract Valued Item fee, charge, or cost */
  unitPrice?: IMoney;

  /** Contract Valued Item Price Scaling Factor */
  factor?: number;

  /** Extension for factor */
  _factor?: IElement;

  /** Contract Valued Item Difficulty Scaling Factor */
  points?: number;

  /** Extension for points */
  _points?: IElement;

  /** Total Contract Valued Item Value */
  net?: IMoney;

  /** Terms of valuation */
  payment?: string;

  /** Extension for payment */
  _payment?: IElement;

  /** When payment is due */
  paymentDate?: string;

  /** Extension for paymentDate */
  _paymentDate?: IElement;

  /** Who will make payment */
  responsible?: IReference<'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /** Who will receive payment */
  recipient?: IReference<'Organization' | 'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson'>;

  /** Pointer to specific item */
  linkId?: string[];

  /** Extension for linkId */
  _linkId?: IElement;

  /** Security Labels that define affected terms */
  securityLabelNumber?: number[];

  /** Extension for securityLabelNumber */
  _securityLabelNumber?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContractTermAssetValuedItem>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRACT_TERM_ASSET_VALUED_ITEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContractTermAssetValuedItem from a JSON object
   */
  static fromJSON(json: IContractTermAssetValuedItem): ContractTermAssetValuedItem {
    return new ContractTermAssetValuedItem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContractTermAssetValuedItem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContractTermAssetValuedItem>): ContractTermAssetValuedItem {
    return new ContractTermAssetValuedItem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContractTermAssetValuedItem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContractTermAssetValuedItem) => Partial<IContractTermAssetValuedItem>): ContractTermAssetValuedItem {
    const currentData = this.toJSON();
    return new ContractTermAssetValuedItem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContractTermAssetValuedItem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContractTermAssetValuedItem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONTRACT_TERM_ASSET_VALUED_ITEM_PROPERTIES);
    return result as IContractTermAssetValuedItem;
  }

  /**
   * Create a deep clone of this ContractTermAssetValuedItem
   */
  clone(): ContractTermAssetValuedItem {
    return new ContractTermAssetValuedItem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContractTermAssetValuedItem
   */
  toString(): string {
    const parts: string[] = ['ContractTermAssetValuedItem'];
    return parts.join(', ');
  }
}
