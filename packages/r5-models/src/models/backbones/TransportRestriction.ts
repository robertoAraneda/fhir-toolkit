import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IPeriod,
  IReference,
  ITransportRestriction,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TransportRestriction */
const TRANSPORT_RESTRICTION_PROPERTIES = [
  'repetitions',
  '_repetitions',
  'period',
  'recipient',
] as const;

/**
 * TransportRestriction - Constraints on fulfillment transports
 *
 * @see https://hl7.org/fhir/R4/transportrestriction.html
 *
 * @example
 * const transportRestriction = new TransportRestriction({
 *   // ... properties
 * });
 */
export class TransportRestriction extends BackboneElement implements ITransportRestriction {

  // ============================================================================
  // Properties
  // ============================================================================

  /** How many times to repeat */
  repetitions?: number;

  /** Extension for repetitions */
  _repetitions?: IElement;

  /** When fulfillment sought */
  period?: IPeriod;

  /** For whom is fulfillment sought? */
  recipient?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Group' | 'Organization'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITransportRestriction>) {
    super(data);
    if (data) {
      this.assignProps(data, TRANSPORT_RESTRICTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TransportRestriction from a JSON object
   */
  static fromJSON(json: ITransportRestriction): TransportRestriction {
    return new TransportRestriction(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TransportRestriction with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITransportRestriction>): TransportRestriction {
    return new TransportRestriction({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TransportRestriction by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITransportRestriction) => Partial<ITransportRestriction>): TransportRestriction {
    const currentData = this.toJSON();
    return new TransportRestriction({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITransportRestriction)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITransportRestriction {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TRANSPORT_RESTRICTION_PROPERTIES);
    return result as ITransportRestriction;
  }

  /**
   * Create a deep clone of this TransportRestriction
   */
  clone(): TransportRestriction {
    return new TransportRestriction(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TransportRestriction
   */
  toString(): string {
    const parts: string[] = ['TransportRestriction'];
    return parts.join(', ');
  }
}
