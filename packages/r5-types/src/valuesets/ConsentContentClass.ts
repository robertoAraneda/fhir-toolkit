/**
 * Consent Content Class
 * 
 * This value set includes the FHIR resource types, along with some other important content class codes
 *
 * @see http://hl7.org/fhir/ValueSet/consent-content-class
 */

export type ConsentContentClassType = 'http://hl7.org/fhir/StructureDefinition/lipidprofile' | 'application/hl7-cda+xml';

export enum ConsentContentClassEnum {
  /** Lipid Lab Report */
  HttpHl7OrgFhirStructuredefinitionLipidprofile = 'http://hl7.org/fhir/StructureDefinition/lipidprofile',
  /** CDA Documents */
  ApplicationHl7CdaXml = 'application/hl7-cda+xml',
}

export const ConsentContentClassValues = ['http://hl7.org/fhir/StructureDefinition/lipidprofile', 'application/hl7-cda+xml'] as const;
