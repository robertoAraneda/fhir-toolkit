import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICapabilityStatementRestSecurity,
  ICodeableConcept,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CapabilityStatementRestSecurity */
const CAPABILITY_STATEMENT_REST_SECURITY_PROPERTIES = [
  'cors',
  '_cors',
  'service',
  'description',
  '_description',
] as const;

/**
 * CapabilityStatementRestSecurity - Information about security of implementation
 *
 * @see https://hl7.org/fhir/R4B/capabilitystatementrestsecurity.html
 *
 * @example
 * const capabilityStatementRestSecurity = new CapabilityStatementRestSecurity({
 *   // ... properties
 * });
 */
export class CapabilityStatementRestSecurity extends BackboneElement implements ICapabilityStatementRestSecurity {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Adds CORS Headers (http://enable-cors.org/) */
  cors?: boolean;

  /** Extension for cors */
  _cors?: IElement;

  /** OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates */
  service?: ICodeableConcept[];

  /** General description of how security works */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICapabilityStatementRestSecurity>) {
    super(data);
    if (data) {
      this.assignProps(data, CAPABILITY_STATEMENT_REST_SECURITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CapabilityStatementRestSecurity from a JSON object
   */
  static fromJSON(json: ICapabilityStatementRestSecurity): CapabilityStatementRestSecurity {
    return new CapabilityStatementRestSecurity(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CapabilityStatementRestSecurity with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICapabilityStatementRestSecurity>): CapabilityStatementRestSecurity {
    return new CapabilityStatementRestSecurity({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CapabilityStatementRestSecurity by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICapabilityStatementRestSecurity) => Partial<ICapabilityStatementRestSecurity>): CapabilityStatementRestSecurity {
    const currentData = this.toJSON();
    return new CapabilityStatementRestSecurity({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICapabilityStatementRestSecurity)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICapabilityStatementRestSecurity {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CAPABILITY_STATEMENT_REST_SECURITY_PROPERTIES);
    return result as ICapabilityStatementRestSecurity;
  }

  /**
   * Create a deep clone of this CapabilityStatementRestSecurity
   */
  clone(): CapabilityStatementRestSecurity {
    return new CapabilityStatementRestSecurity(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CapabilityStatementRestSecurity
   */
  toString(): string {
    const parts: string[] = ['CapabilityStatementRestSecurity'];
    return parts.join(', ');
  }
}
