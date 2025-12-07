/**
 * PropertyRepresentation
 * 
 * How a property is represented when serialized.
 *
 * @see http://hl7.org/fhir/ValueSet/property-representation
 */

export type PropertyRepresentationType = 'xmlAttr' | 'xmlText' | 'typeAttr' | 'cdaText' | 'xhtml';

export enum PropertyRepresentationEnum {
  /** XML Attribute */
  Xmlattr = 'xmlAttr',
  /** XML Text */
  Xmltext = 'xmlText',
  /** Type Attribute */
  Typeattr = 'typeAttr',
  /** CDA Text Format */
  Cdatext = 'cdaText',
  /** XHTML */
  Xhtml = 'xhtml',
}

export const PropertyRepresentationValues = ['xmlAttr', 'xmlText', 'typeAttr', 'cdaText', 'xhtml'] as const;
