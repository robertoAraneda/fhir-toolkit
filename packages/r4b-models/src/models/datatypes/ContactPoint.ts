import { Element } from '../base/Element.js';
import type {
  ContactPointSystemType,
  ContactPointUseType,
  IContactPoint,
  IElement,
  IPeriod,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ContactPoint */
const CONTACT_POINT_PROPERTIES = [
  'system',
  '_system',
  'value',
  '_value',
  'use',
  '_use',
  'rank',
  '_rank',
  'period',
] as const;

/**
 * ContactPoint - Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 *
 * @see https://hl7.org/fhir/R4B/contactpoint.html
 *
 * @example
 * const contactPoint = new ContactPoint({
 *   // ... properties
 * });
 */
export class ContactPoint extends Element implements IContactPoint {

  // ============================================================================
  // Properties
  // ============================================================================

  /** phone | fax | email | pager | url | sms | other */
  system?: ContactPointSystemType;

  /** Extension for system */
  _system?: IElement;

  /** The actual contact point details */
  value?: string;

  /** Extension for value */
  _value?: IElement;

  /** home | work | temp | old | mobile - purpose of this contact point */
  use?: ContactPointUseType;

  /** Extension for use */
  _use?: IElement;

  /** Specify preferred order of use (1 = highest) */
  rank?: number;

  /** Extension for rank */
  _rank?: IElement;

  /** Time period when the contact point was/is in use */
  period?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContactPoint>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTACT_POINT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContactPoint from a JSON object
   */
  static fromJSON(json: IContactPoint): ContactPoint {
    return new ContactPoint(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContactPoint with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContactPoint>): ContactPoint {
    return new ContactPoint({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContactPoint by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContactPoint) => Partial<IContactPoint>): ContactPoint {
    const currentData = this.toJSON();
    return new ContactPoint({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContactPoint)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContactPoint {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, CONTACT_POINT_PROPERTIES);
    return result as IContactPoint;
  }

  /**
   * Create a deep clone of this ContactPoint
   */
  clone(): ContactPoint {
    return new ContactPoint(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContactPoint
   */
  toString(): string {
    const parts: string[] = ['ContactPoint'];
    return parts.join(', ');
  }
}
