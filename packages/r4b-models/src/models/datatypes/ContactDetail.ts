import { Element } from '../base/Element.js';
import type {
  IContactDetail,
  IContactPoint,
  IElement,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ContactDetail */
const CONTACT_DETAIL_PROPERTIES = [
  'name',
  '_name',
  'telecom',
] as const;

/**
 * ContactDetail - Specifies contact information for a person or organization.
 *
 * @see https://hl7.org/fhir/R4B/contactdetail.html
 *
 * @example
 * const contactDetail = new ContactDetail({
 *   // ... properties
 * });
 */
export class ContactDetail extends Element implements IContactDetail {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name of an individual to contact */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Contact details for individual or organization */
  telecom?: IContactPoint[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IContactDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, CONTACT_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ContactDetail from a JSON object
   */
  static fromJSON(json: IContactDetail): ContactDetail {
    return new ContactDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ContactDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IContactDetail>): ContactDetail {
    return new ContactDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ContactDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IContactDetail) => Partial<IContactDetail>): ContactDetail {
    const currentData = this.toJSON();
    return new ContactDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IContactDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IContactDetail {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, CONTACT_DETAIL_PROPERTIES);
    return result as IContactDetail;
  }

  /**
   * Create a deep clone of this ContactDetail
   */
  clone(): ContactDetail {
    return new ContactDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ContactDetail
   */
  toString(): string {
    const parts: string[] = ['ContactDetail'];
    return parts.join(', ');
  }
}
