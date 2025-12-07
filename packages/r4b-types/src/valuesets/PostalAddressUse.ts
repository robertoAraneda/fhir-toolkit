/**
 * PostalAddressUse
 * 
 * Uses of an address not included in Address.use.
 *
 * @see http://hl7.org/fhir/ValueSet/postal-address-use
 */

export type PostalAddressUseType = 'BAD' | 'CONF' | 'HP' | 'HV' | 'DIR' | 'PUB' | 'PHYS' | 'PST';

export enum PostalAddressUseEnum {
  /** bad address */
  Bad = 'BAD',
  /** confidential address */
  Conf = 'CONF',
  /** primary home */
  Hp = 'HP',
  /** vacation home */
  Hv = 'HV',
  /** direct */
  Dir = 'DIR',
  /** public */
  Pub = 'PUB',
  /** physical visit address */
  Phys = 'PHYS',
  /** postal address */
  Pst = 'PST',
}

export const PostalAddressUseValues = ['BAD', 'CONF', 'HP', 'HV', 'DIR', 'PUB', 'PHYS', 'PST'] as const;
