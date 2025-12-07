import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICapabilityStatementRest,
  ICapabilityStatementRestInteraction,
  ICapabilityStatementRestResource,
  ICapabilityStatementRestResourceOperation,
  ICapabilityStatementRestResourceSearchParam,
  ICapabilityStatementRestSecurity,
  IElement,
  RestfulCapabilityModeType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to CapabilityStatementRest */
const CAPABILITY_STATEMENT_REST_PROPERTIES = [
  'mode',
  '_mode',
  'documentation',
  '_documentation',
  'security',
  'resource',
  'interaction',
  'searchParam',
  'operation',
  'compartment',
  '_compartment',
] as const;

/**
 * CapabilityStatementRest - If the endpoint is a RESTful one
 *
 * @see https://hl7.org/fhir/R4/capabilitystatementrest.html
 *
 * @example
 * const capabilityStatementRest = new CapabilityStatementRest({
 *   // ... properties
 * });
 */
export class CapabilityStatementRest extends BackboneElement implements ICapabilityStatementRest {

  // ============================================================================
  // Properties
  // ============================================================================

  /** client | server */
  mode: RestfulCapabilityModeType;

  /** Extension for mode */
  _mode?: IElement;

  /** General description of implementation */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  /** Information about security of implementation */
  security?: ICapabilityStatementRestSecurity;

  /** Resource served on the REST interface */
  resource?: ICapabilityStatementRestResource[];

  /** What operations are supported? */
  interaction?: ICapabilityStatementRestInteraction[];

  /** Search parameters for searching all resources */
  searchParam?: ICapabilityStatementRestResourceSearchParam[];

  /** Definition of a system level operation */
  operation?: ICapabilityStatementRestResourceOperation[];

  /** Compartments served/used by system */
  compartment?: string[];

  /** Extension for compartment */
  _compartment?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICapabilityStatementRest>) {
    super(data);
    if (data) {
      this.assignProps(data, CAPABILITY_STATEMENT_REST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CapabilityStatementRest from a JSON object
   */
  static fromJSON(json: ICapabilityStatementRest): CapabilityStatementRest {
    return new CapabilityStatementRest(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CapabilityStatementRest with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICapabilityStatementRest>): CapabilityStatementRest {
    return new CapabilityStatementRest({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CapabilityStatementRest by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICapabilityStatementRest) => Partial<ICapabilityStatementRest>): CapabilityStatementRest {
    const currentData = this.toJSON();
    return new CapabilityStatementRest({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICapabilityStatementRest)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICapabilityStatementRest {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CAPABILITY_STATEMENT_REST_PROPERTIES);
    return result as ICapabilityStatementRest;
  }

  /**
   * Create a deep clone of this CapabilityStatementRest
   */
  clone(): CapabilityStatementRest {
    return new CapabilityStatementRest(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CapabilityStatementRest
   */
  toString(): string {
    const parts: string[] = ['CapabilityStatementRest'];
    return parts.join(', ');
  }
}
