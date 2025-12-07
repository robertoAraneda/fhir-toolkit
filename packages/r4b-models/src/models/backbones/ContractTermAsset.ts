import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICoding,
  IContractTermAsset,
  IContractTermAssetContext,
  IContractTermAssetValuedItem,
  IContractTermOfferAnswer,
  IElement,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ContractTermAsset */
const CONTRACT_TERM_ASSET_PROPERTIES = [
  'scope',
  'type',
  'typeReference',
  'subtype',
  'relationship',
  'context',
  'condition',
  '_condition',
  'periodType',
  'period',
  'usePeriod',
  'text',
  '_text',
  'linkId',
  '_linkId',
  'answer',
  'securityLabelNumber',
  '_securityLabelNumber',
  'valuedItem',
] as const;

/**
 * ContractTermAsset - Contract Term Asset List
 *
 * @see https://hl7.org/fhir/R4/contracttermasset.html
 *
 * @example
 * const contractTermAsset = new ContractTermAsset({
 *   // ... properties
 * });
 */
export class ContractTermAsset extends BackboneElement implements IContractTermAsset {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Range of asset */
  scope?: ICodeableConcept;

  /** Asset category */
  type?: ICodeableConcept[];

  /** Associated entities */
  typeReference?: IReference<'Resource'>[];

  /** Asset sub-category */
  subtype?: ICodeableConcept[];

  /** Kinship of the asset */
  relationship?: ICoding;

  /** Circumstance of the asset */
  context?: IContractTermAssetContext[];

  /** Quality desctiption of asset */
  condition?: string;

  /** Extension for condition */
  _condition?: IElement;

  /** Asset availability types */
  periodType?: ICodeableConcept[];

  /** Time period of the asset */
  period?: IPeriod[];

  /** Time period */
  usePeriod?: IPeriod[];

  /** Asset clause or question text */
  text?: string;

  /** Extension for text */
  _text?: IElement;

  /** Pointer to asset text */
  linkId?: string[];

  /** Extension for linkId */
  _linkId?: IElement;

  /** Response to assets */
  answer?: IContractTermOfferAnswer[];

  /** Asset restriction numbers */
  securityLabelNumber?: number[];

  /** Extension for securityLabelNumber */
  _securityLabelNumber?: IElement;

  /** Contract Valued Item List */
  valuedItem?: IContractTermAssetValuedItem[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContractTermAsset>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRACT_TERM_ASSET_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContractTermAsset from a JSON object
   */
  static fromJSON(json: IContractTermAsset): ContractTermAsset {
    return new ContractTermAsset(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContractTermAsset with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContractTermAsset>): ContractTermAsset {
    return new ContractTermAsset({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContractTermAsset by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContractTermAsset) => Partial<IContractTermAsset>): ContractTermAsset {
    const currentData = this.toJSON();
    return new ContractTermAsset({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContractTermAsset)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContractTermAsset {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONTRACT_TERM_ASSET_PROPERTIES);
    return result as IContractTermAsset;
  }

  /**
   * Create a deep clone of this ContractTermAsset
   */
  clone(): ContractTermAsset {
    return new ContractTermAsset(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContractTermAsset
   */
  toString(): string {
    const parts: string[] = ['ContractTermAsset'];
    return parts.join(', ');
  }
}
