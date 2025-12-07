import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICapabilityStatementRestResourceSearchParam,
  IElement,
  SearchParamTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CapabilityStatementRestResourceSearchParam */
const CAPABILITY_STATEMENT_REST_RESOURCE_SEARCH_PARAM_PROPERTIES = [
  'name',
  '_name',
  'definition',
  '_definition',
  'type',
  '_type',
  'documentation',
  '_documentation',
] as const;

/**
 * CapabilityStatementRestResourceSearchParam - Search parameters supported by implementation
 *
 * @see https://hl7.org/fhir/R4/capabilitystatementrestresourcesearchparam.html
 *
 * @example
 * const capabilityStatementRestResourceSearchParam = new CapabilityStatementRestResourceSearchParam({
 *   // ... properties
 * });
 */
export class CapabilityStatementRestResourceSearchParam extends BackboneElement implements ICapabilityStatementRestResourceSearchParam {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name for parameter in search url */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Source of definition for parameter */
  definition?: string;

  /** Extension for definition */
  _definition?: IElement;

  /** number | date | string | token | reference | composite | quantity | uri | special */
  type: SearchParamTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Server-specific usage */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICapabilityStatementRestResourceSearchParam>) {
    super(data);
    if (data) {
      this.assignProps(data, CAPABILITY_STATEMENT_REST_RESOURCE_SEARCH_PARAM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CapabilityStatementRestResourceSearchParam from a JSON object
   */
  static fromJSON(json: ICapabilityStatementRestResourceSearchParam): CapabilityStatementRestResourceSearchParam {
    return new CapabilityStatementRestResourceSearchParam(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CapabilityStatementRestResourceSearchParam with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICapabilityStatementRestResourceSearchParam>): CapabilityStatementRestResourceSearchParam {
    return new CapabilityStatementRestResourceSearchParam({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CapabilityStatementRestResourceSearchParam by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICapabilityStatementRestResourceSearchParam) => Partial<ICapabilityStatementRestResourceSearchParam>): CapabilityStatementRestResourceSearchParam {
    const currentData = this.toJSON();
    return new CapabilityStatementRestResourceSearchParam({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICapabilityStatementRestResourceSearchParam)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICapabilityStatementRestResourceSearchParam {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CAPABILITY_STATEMENT_REST_RESOURCE_SEARCH_PARAM_PROPERTIES);
    return result as ICapabilityStatementRestResourceSearchParam;
  }

  /**
   * Create a deep clone of this CapabilityStatementRestResourceSearchParam
   */
  clone(): CapabilityStatementRestResourceSearchParam {
    return new CapabilityStatementRestResourceSearchParam(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CapabilityStatementRestResourceSearchParam
   */
  toString(): string {
    const parts: string[] = ['CapabilityStatementRestResourceSearchParam'];
    return parts.join(', ');
  }
}
