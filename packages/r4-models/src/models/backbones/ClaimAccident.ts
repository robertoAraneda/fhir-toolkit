import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAddress,
  IClaimAccident,
  ICodeableConcept,
  IElement,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ClaimAccident */
const CLAIM_ACCIDENT_PROPERTIES = [
  'date',
  '_date',
  'type',
  'locationAddress',
  'locationReference',
] as const;

/**
 * ClaimAccident - Details of the event
 *
 * @see https://hl7.org/fhir/R4/claimaccident.html
 *
 * @example
 * const claimAccident = new ClaimAccident({
 *   // ... properties
 * });
 */
export class ClaimAccident extends BackboneElement implements IClaimAccident {

  // ============================================================================
  // Properties
  // ============================================================================

  /** When the incident occurred */
  date: string;

  /** Extension for date */
  _date?: IElement;

  /** The nature of the accident */
  type?: ICodeableConcept;

  /** Where the event occurred */
  locationAddress?: IAddress;

  /** Where the event occurred */
  locationReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IClaimAccident>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_ACCIDENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimAccident from a JSON object
   */
  static fromJSON(json: IClaimAccident): ClaimAccident {
    return new ClaimAccident(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimAccident with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimAccident>): ClaimAccident {
    return new ClaimAccident({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimAccident by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimAccident) => Partial<IClaimAccident>): ClaimAccident {
    const currentData = this.toJSON();
    return new ClaimAccident({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimAccident)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimAccident {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_ACCIDENT_PROPERTIES);
    return result as IClaimAccident;
  }

  /**
   * Create a deep clone of this ClaimAccident
   */
  clone(): ClaimAccident {
    return new ClaimAccident(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimAccident
   */
  toString(): string {
    const parts: string[] = ['ClaimAccident'];
    return parts.join(', ');
  }
}
