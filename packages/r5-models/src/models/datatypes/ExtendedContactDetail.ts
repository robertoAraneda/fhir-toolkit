import { Element } from '../base/Element.js';
import type {
  IAddress,
  ICodeableConcept,
  IContactPoint,
  IExtendedContactDetail,
  IHumanName,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExtendedContactDetail */
const EXTENDED_CONTACT_DETAIL_PROPERTIES = [
  'purpose',
  'name',
  'telecom',
  'address',
  'organization',
  'period',
] as const;

/**
 * ExtendedContactDetail - Specifies contact information for a specific purpose over a period of time, might be handled/monitored by a specific named person or organization.
 *
 * @see https://hl7.org/fhir/R4/extendedcontactdetail.html
 *
 * @example
 * const extendedContactDetail = new ExtendedContactDetail({
 *   // ... properties
 * });
 */
export class ExtendedContactDetail extends Element implements IExtendedContactDetail {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of contact */
  purpose?: ICodeableConcept;

  /** Name of an individual to contact */
  name?: IHumanName[];

  /** Contact details (e.g.phone/fax/url) */
  telecom?: IContactPoint[];

  /** Address for the contact */
  address?: IAddress;

  /** This contact detail is handled/monitored by a specific organization */
  organization?: IReference<'Organization'>;

  /** Period that this contact was valid for usage */
  period?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExtendedContactDetail>) {
    super(data);
    if (data) {
      this.assignProps(data, EXTENDED_CONTACT_DETAIL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExtendedContactDetail from a JSON object
   */
  static fromJSON(json: IExtendedContactDetail): ExtendedContactDetail {
    return new ExtendedContactDetail(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExtendedContactDetail with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExtendedContactDetail>): ExtendedContactDetail {
    return new ExtendedContactDetail({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExtendedContactDetail by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExtendedContactDetail) => Partial<IExtendedContactDetail>): ExtendedContactDetail {
    const currentData = this.toJSON();
    return new ExtendedContactDetail({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExtendedContactDetail)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExtendedContactDetail {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, EXTENDED_CONTACT_DETAIL_PROPERTIES);
    return result as IExtendedContactDetail;
  }

  /**
   * Create a deep clone of this ExtendedContactDetail
   */
  clone(): ExtendedContactDetail {
    return new ExtendedContactDetail(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExtendedContactDetail
   */
  toString(): string {
    const parts: string[] = ['ExtendedContactDetail'];
    return parts.join(', ');
  }
}
