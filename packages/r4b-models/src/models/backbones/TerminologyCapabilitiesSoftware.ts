import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITerminologyCapabilitiesSoftware,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TerminologyCapabilitiesSoftware */
const TERMINOLOGY_CAPABILITIES_SOFTWARE_PROPERTIES = [
  'name',
  '_name',
  'version',
  '_version',
] as const;

/**
 * TerminologyCapabilitiesSoftware - Software that is covered by this terminology capability statement
 *
 * @see https://hl7.org/fhir/R4/terminologycapabilitiessoftware.html
 *
 * @example
 * const terminologyCapabilitiesSoftware = new TerminologyCapabilitiesSoftware({
 *   // ... properties
 * });
 */
export class TerminologyCapabilitiesSoftware extends BackboneElement implements ITerminologyCapabilitiesSoftware {

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

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITerminologyCapabilitiesSoftware>) {
    super(data);
    if (data) {
      this.assignProps(data, TERMINOLOGY_CAPABILITIES_SOFTWARE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TerminologyCapabilitiesSoftware from a JSON object
   */
  static fromJSON(json: ITerminologyCapabilitiesSoftware): TerminologyCapabilitiesSoftware {
    return new TerminologyCapabilitiesSoftware(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TerminologyCapabilitiesSoftware with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITerminologyCapabilitiesSoftware>): TerminologyCapabilitiesSoftware {
    return new TerminologyCapabilitiesSoftware({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TerminologyCapabilitiesSoftware by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITerminologyCapabilitiesSoftware) => Partial<ITerminologyCapabilitiesSoftware>): TerminologyCapabilitiesSoftware {
    const currentData = this.toJSON();
    return new TerminologyCapabilitiesSoftware({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITerminologyCapabilitiesSoftware)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITerminologyCapabilitiesSoftware {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TERMINOLOGY_CAPABILITIES_SOFTWARE_PROPERTIES);
    return result as ITerminologyCapabilitiesSoftware;
  }

  /**
   * Create a deep clone of this TerminologyCapabilitiesSoftware
   */
  clone(): TerminologyCapabilitiesSoftware {
    return new TerminologyCapabilitiesSoftware(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TerminologyCapabilitiesSoftware
   */
  toString(): string {
    const parts: string[] = ['TerminologyCapabilitiesSoftware'];
    return parts.join(', ');
  }
}
