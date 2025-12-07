/**
 * Capability Format Type
 * 
 * Common format types for FHIR.
 *
 * @see http://hl7.org/fhir/ValueSet/capability-format-type
 */

export type CapabilityFormatTypeType = 'xml' | 'json' | 'ttl' | 'application/fhir+json' | 'application/fhir+xml' | 'application/fhir+ttl';

export enum CapabilityFormatTypeEnum {
  /** XML */
  Xml = 'xml',
  /** JSON */
  Json = 'json',
  /** TTL */
  Ttl = 'ttl',
  ApplicationFhirJson = 'application/fhir+json',
  ApplicationFhirXml = 'application/fhir+xml',
  ApplicationFhirTtl = 'application/fhir+ttl',
}

export const CapabilityFormatTypeValues = ['xml', 'json', 'ttl', 'application/fhir+json', 'application/fhir+xml', 'application/fhir+ttl'] as const;
