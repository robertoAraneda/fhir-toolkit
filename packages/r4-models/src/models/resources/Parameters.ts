import { DomainResource } from '../base/DomainResource.js';
import type {
  IParameters,
  IParametersParameter,
} from '@fhir-toolkit/r4-types';

/** Properties specific to Parameters */
const PARAMETERS_PROPERTIES = [
  'parameter',
] as const;

/**
 * Parameters - This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.
 *
 * @see https://hl7.org/fhir/R4/parameters.html
 *
 * @example
 * const parameters = new Parameters({
 *   // ... properties
 * });
 */
export class Parameters extends DomainResource implements IParameters {
  readonly resourceType = 'Parameters' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Operation Parameter */
  parameter?: IParametersParameter[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IParameters>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, PARAMETERS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Parameters from a JSON object
   */
  static fromJSON(json: IParameters): Parameters {
    return new Parameters(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Parameters with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IParameters>): Parameters {
    return new Parameters({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Parameters by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IParameters) => Partial<IParameters>): Parameters {
    const currentData = this.toJSON();
    return new Parameters({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IParameters)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IParameters {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, PARAMETERS_PROPERTIES);
    return result as IParameters;
  }

  /**
   * Create a deep clone of this Parameters
   */
  clone(): Parameters {
    return new Parameters(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Parameters
   */
  toString(): string {
    const parts: string[] = ['Parameters'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
