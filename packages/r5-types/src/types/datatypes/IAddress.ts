import type { IDataType, IElement } from '../../base/index.js';
import type { IPeriod } from './IPeriod.js';
import type { AddressTypeType, AddressUseType } from '../../valuesets/index.js';

/**
 * Address Interface
 * 
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.
The ISO21090-codedString may be used to provide a coded representation of the contents of strings in an Address.
 * 
 *
 * @see https://hl7.org/fhir/R5/address.html
 */
export interface IAddress extends IDataType {
  /**
   * home | work | temp | old | billing - purpose of this address
   */
  use?: AddressUseType;
  /**
   * Extension for use
   */
  _use?: IElement;

  /**
   * postal | physical | both
   */
  type?: AddressTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Text representation of the address
   */
  text?: string;
  /**
   * Extension for text
   */
  _text?: IElement;

  /**
   * Street name, number, direction & P.O. Box etc.
   */
  line?: string[];
  /**
   * Extension for line
   */
  _line?: IElement;

  /**
   * Name of city, town etc.
   */
  city?: string;
  /**
   * Extension for city
   */
  _city?: IElement;

  /**
   * District name (aka county)
   */
  district?: string;
  /**
   * Extension for district
   */
  _district?: IElement;

  /**
   * Sub-unit of country (abbreviations ok)
   */
  state?: string;
  /**
   * Extension for state
   */
  _state?: IElement;

  /**
   * Postal code for area
   */
  postalCode?: string;
  /**
   * Extension for postalCode
   */
  _postalCode?: IElement;

  /**
   * Country (e.g. may be ISO 3166 2 or 3 letter code)
   */
  country?: string;
  /**
   * Extension for country
   */
  _country?: IElement;

  /**
   * Time period when address was/is in use
   */
  period?: IPeriod;

}
