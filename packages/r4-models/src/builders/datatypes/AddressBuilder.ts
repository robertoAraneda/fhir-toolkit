import { ElementBuilder } from '../base/ElementBuilder.js';
import { Address } from '../../models/datatypes/Address.js';
import type {
  AddressTypeType,
  AddressUseType,
  IAddress,
  IPeriod,
} from '@fhir-toolkit/r4-types';

/**
 * AddressBuilder - Fluent builder for Address datatypes
 *
 * Extends ElementBuilder which provides common setters:
 * - setId(), addExtension()
 *
 * @example
 * const address = new AddressBuilder()
 *   .setUse(value)
 *   .addLine({ ... })
 *   .build();
 */
export class AddressBuilder extends ElementBuilder<Address, IAddress> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set use
   * home | work | temp | old | billing - purpose of this address
   */
  setUse(use: AddressUseType): this {
    this.data.use = use;
    return this;
  }

  /**
   * Set type
   * postal | physical | both
   */
  setType(type: AddressTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set text
   * Text representation of the address
   */
  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  /**
   * Set city
   * Name of city, town etc.
   */
  setCity(city: string): this {
    this.data.city = city;
    return this;
  }

  /**
   * Set district
   * District name (aka county)
   */
  setDistrict(district: string): this {
    this.data.district = district;
    return this;
  }

  /**
   * Set state
   * Sub-unit of country (abbreviations ok)
   */
  setState(state: string): this {
    this.data.state = state;
    return this;
  }

  /**
   * Set postalCode
   * Postal code for area
   */
  setPostalCode(postalCode: string): this {
    this.data.postalCode = postalCode;
    return this;
  }

  /**
   * Set country
   * Country (e.g. can be ISO 3166 2 or 3 letter code)
   */
  setCountry(country: string): this {
    this.data.country = country;
    return this;
  }

  /**
   * Set period
   * Time period when address was/is in use
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add line
   * Street name, number, direction & P.O. Box etc.
   */
  addLine(line: string): this {
    return this.addToArray('line', line);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Address instance
   */
  build(): Address {
    return new Address(this.data);
  }

  /**
   * Build and validate the Address instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Address> {
    const address = this.build();
    await address.validateOrThrow();
    return address;
  }
}
