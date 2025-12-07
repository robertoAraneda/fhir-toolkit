import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IContractTermAssetContext,
  IElement,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ContractTermAssetContext */
const CONTRACT_TERM_ASSET_CONTEXT_PROPERTIES = [
  'reference',
  'code',
  'text',
  '_text',
] as const;

/**
 * ContractTermAssetContext - Circumstance of the asset
 *
 * @see https://hl7.org/fhir/R4/contracttermassetcontext.html
 *
 * @example
 * const contractTermAssetContext = new ContractTermAssetContext({
 *   // ... properties
 * });
 */
export class ContractTermAssetContext extends BackboneElement implements IContractTermAssetContext {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Creator,custodian or owner */
  reference?: IReference<'Resource'>;

  /** Codeable asset context */
  code?: ICodeableConcept[];

  /** Context description */
  text?: string;

  /** Extension for text */
  _text?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContractTermAssetContext>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTRACT_TERM_ASSET_CONTEXT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContractTermAssetContext from a JSON object
   */
  static fromJSON(json: IContractTermAssetContext): ContractTermAssetContext {
    return new ContractTermAssetContext(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContractTermAssetContext with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContractTermAssetContext>): ContractTermAssetContext {
    return new ContractTermAssetContext({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContractTermAssetContext by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContractTermAssetContext) => Partial<IContractTermAssetContext>): ContractTermAssetContext {
    const currentData = this.toJSON();
    return new ContractTermAssetContext({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContractTermAssetContext)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContractTermAssetContext {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONTRACT_TERM_ASSET_CONTEXT_PROPERTIES);
    return result as IContractTermAssetContext;
  }

  /**
   * Create a deep clone of this ContractTermAssetContext
   */
  clone(): ContractTermAssetContext {
    return new ContractTermAssetContext(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContractTermAssetContext
   */
  toString(): string {
    const parts: string[] = ['ContractTermAssetContext'];
    return parts.join(', ');
  }
}
