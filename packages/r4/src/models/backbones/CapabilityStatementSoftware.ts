import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICapabilityStatementSoftware,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to CapabilityStatementSoftware */
const CAPABILITY_STATEMENT_SOFTWARE_PROPERTIES = [
  'name',
  '_name',
  'version',
  '_version',
  'releaseDate',
  '_releaseDate',
] as const;

/**
 * CapabilityStatementSoftware - Software that is covered by this capability statement
 *
 * @see https://hl7.org/fhir/R4/capabilitystatementsoftware.html
 *
 * @example
 * const capabilityStatementSoftware = new CapabilityStatementSoftware({
 *   // ... properties
 * });
 */
export class CapabilityStatementSoftware extends BackboneElement implements ICapabilityStatementSoftware {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A name the software is known by */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Version covered by this statement */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  /** Date this version was released */
  releaseDate?: string;

  /** Extension for releaseDate */
  _releaseDate?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICapabilityStatementSoftware>) {
    super(data);
    if (data) {
      this.assignProps(data, CAPABILITY_STATEMENT_SOFTWARE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CapabilityStatementSoftware from a JSON object
   */
  static fromJSON(json: ICapabilityStatementSoftware): CapabilityStatementSoftware {
    return new CapabilityStatementSoftware(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CapabilityStatementSoftware with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICapabilityStatementSoftware>): CapabilityStatementSoftware {
    return new CapabilityStatementSoftware({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CapabilityStatementSoftware by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICapabilityStatementSoftware) => Partial<ICapabilityStatementSoftware>): CapabilityStatementSoftware {
    const currentData = this.toJSON();
    return new CapabilityStatementSoftware({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICapabilityStatementSoftware)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICapabilityStatementSoftware {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CAPABILITY_STATEMENT_SOFTWARE_PROPERTIES);
    return result as ICapabilityStatementSoftware;
  }

  /**
   * Create a deep clone of this CapabilityStatementSoftware
   */
  clone(): CapabilityStatementSoftware {
    return new CapabilityStatementSoftware(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CapabilityStatementSoftware
   */
  toString(): string {
    const parts: string[] = ['CapabilityStatementSoftware'];
    return parts.join(', ');
  }
}
