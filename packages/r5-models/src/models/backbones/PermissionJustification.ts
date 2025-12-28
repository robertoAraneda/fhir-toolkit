import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IPermissionJustification,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PermissionJustification */
const PERMISSION_JUSTIFICATION_PROPERTIES = [
  'basis',
  'evidence',
] as const;

/**
 * PermissionJustification - The asserted justification for using the data
 *
 * @see https://hl7.org/fhir/R5/permissionjustification.html
 *
 * @example
 * const permissionJustification = new PermissionJustification({
 *   // ... properties
 * });
 */
export class PermissionJustification extends BackboneElement implements IPermissionJustification {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The regulatory grounds upon which this Permission builds */
  basis?: ICodeableConcept[];

  /** Justifing rational */
  evidence?: IReference<'Resource'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPermissionJustification>) {
    super(data);
    if (data) {
      this.assignProps(data, PERMISSION_JUSTIFICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PermissionJustification from a JSON object
   */
  static fromJSON(json: IPermissionJustification): PermissionJustification {
    return new PermissionJustification(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PermissionJustification with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPermissionJustification>): PermissionJustification {
    return new PermissionJustification({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PermissionJustification by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPermissionJustification) => Partial<IPermissionJustification>): PermissionJustification {
    const currentData = this.toJSON();
    return new PermissionJustification({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPermissionJustification)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPermissionJustification {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PERMISSION_JUSTIFICATION_PROPERTIES);
    return result as IPermissionJustification;
  }

  /**
   * Create a deep clone of this PermissionJustification
   */
  clone(): PermissionJustification {
    return new PermissionJustification(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PermissionJustification
   */
  toString(): string {
    const parts: string[] = ['PermissionJustification'];
    return parts.join(', ');
  }
}
