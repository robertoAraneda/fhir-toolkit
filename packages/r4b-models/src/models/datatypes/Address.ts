import { Element } from '../base/Element.js';
import type {
  AddressTypeType,
  AddressUseType,
  IAddress,
  IElement,
  IPeriod,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Address */
const ADDRESS_PROPERTIES = [
  'use',
  '_use',
  'type',
  '_type',
  'text',
  '_text',
  'line',
  '_line',
  'city',
  '_city',
  'district',
  '_district',
  'state',
  '_state',
  'postalCode',
  '_postalCode',
  'country',
  '_country',
  'period',
] as const;

/**
 * Address - An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
 *
 * @see https://hl7.org/fhir/R4B/address.html
 *
 * @example
 * const address = new Address({
 *   // ... properties
 * });
 */
export class Address extends Element implements IAddress {

  // ============================================================================
  // Properties
  // ============================================================================

  /** home | work | temp | old | billing - purpose of this address */
  use?: AddressUseType;

  /** Extension for use */
  _use?: IElement;

  /** postal | physical | both */
  type?: AddressTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Text representation of the address */
  text?: string;

  /** Extension for text */
  _text?: IElement;

  /** Street name, number, direction & P.O. Box etc. */
  line?: string[];

  /** Extension for line */
  _line?: IElement;

  /** Name of city, town etc. */
  city?: string;

  /** Extension for city */
  _city?: IElement;

  /** District name (aka county) */
  district?: string;

  /** Extension for district */
  _district?: IElement;

  /** Sub-unit of country (abbreviations ok) */
  state?: string;

  /** Extension for state */
  _state?: IElement;

  /** Postal code for area */
  postalCode?: string;

  /** Extension for postalCode */
  _postalCode?: IElement;

  /** Country (e.g. can be ISO 3166 2 or 3 letter code) */
  country?: string;

  /** Extension for country */
  _country?: IElement;

  /** Time period when address was/is in use */
  period?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAddress>) {
    super(data);
    if (data) {
      this.assignProps(data, ADDRESS_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Address from a JSON object
   */
  static fromJSON(json: IAddress): Address {
    return new Address(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Address with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAddress>): Address {
    return new Address({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Address by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAddress) => Partial<IAddress>): Address {
    const currentData = this.toJSON();
    return new Address({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAddress)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAddress {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, ADDRESS_PROPERTIES);
    return result as IAddress;
  }

  /**
   * Create a deep clone of this Address
   */
  clone(): Address {
    return new Address(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Address
   */
  toString(): string {
    const parts: string[] = ['Address'];
    return parts.join(', ');
  }
}
