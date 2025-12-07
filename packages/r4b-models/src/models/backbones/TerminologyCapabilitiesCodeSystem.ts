import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITerminologyCapabilitiesCodeSystem,
  ITerminologyCapabilitiesCodeSystemVersion,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TerminologyCapabilitiesCodeSystem */
const TERMINOLOGY_CAPABILITIES_CODE_SYSTEM_PROPERTIES = [
  'uri',
  '_uri',
  'version',
  'subsumption',
  '_subsumption',
] as const;

/**
 * TerminologyCapabilitiesCodeSystem - A code system supported by the server
 *
 * @see https://hl7.org/fhir/R4/terminologycapabilitiescodesystem.html
 *
 * @example
 * const terminologyCapabilitiesCodeSystem = new TerminologyCapabilitiesCodeSystem({
 *   // ... properties
 * });
 */
export class TerminologyCapabilitiesCodeSystem extends BackboneElement implements ITerminologyCapabilitiesCodeSystem {

  // ============================================================================
  // Properties
  // ============================================================================

  /** URI for the Code System */
  uri?: string;

  /** Extension for uri */
  _uri?: IElement;

  /** Version of Code System supported */
  version?: ITerminologyCapabilitiesCodeSystemVersion[];

  /** Whether subsumption is supported */
  subsumption?: boolean;

  /** Extension for subsumption */
  _subsumption?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITerminologyCapabilitiesCodeSystem>) {
    super(data);
    if (data) {
      this.assignProps(data, TERMINOLOGY_CAPABILITIES_CODE_SYSTEM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TerminologyCapabilitiesCodeSystem from a JSON object
   */
  static fromJSON(json: ITerminologyCapabilitiesCodeSystem): TerminologyCapabilitiesCodeSystem {
    return new TerminologyCapabilitiesCodeSystem(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TerminologyCapabilitiesCodeSystem with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITerminologyCapabilitiesCodeSystem>): TerminologyCapabilitiesCodeSystem {
    return new TerminologyCapabilitiesCodeSystem({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TerminologyCapabilitiesCodeSystem by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITerminologyCapabilitiesCodeSystem) => Partial<ITerminologyCapabilitiesCodeSystem>): TerminologyCapabilitiesCodeSystem {
    const currentData = this.toJSON();
    return new TerminologyCapabilitiesCodeSystem({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITerminologyCapabilitiesCodeSystem)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITerminologyCapabilitiesCodeSystem {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TERMINOLOGY_CAPABILITIES_CODE_SYSTEM_PROPERTIES);
    return result as ITerminologyCapabilitiesCodeSystem;
  }

  /**
   * Create a deep clone of this TerminologyCapabilitiesCodeSystem
   */
  clone(): TerminologyCapabilitiesCodeSystem {
    return new TerminologyCapabilitiesCodeSystem(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TerminologyCapabilitiesCodeSystem
   */
  toString(): string {
    const parts: string[] = ['TerminologyCapabilitiesCodeSystem'];
    return parts.join(', ');
  }
}
