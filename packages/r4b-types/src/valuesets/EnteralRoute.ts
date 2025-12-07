/**
 * Enteral Route Codes
 * 
 * EnteralRouteOfAdministration: Codes specifying the route of administration of enteral formula.  This value set is composed of HL7 V3 codes and is provided as a suggestive example.
 *
 * @see http://hl7.org/fhir/ValueSet/enteral-route
 */

export type EnteralRouteType = 'PO' | 'EFT' | 'ENTINSTL' | 'GT' | 'NGT' | 'OGT' | 'GJT' | 'JJTINSTL' | 'OJJ';

export enum EnteralRouteEnum {
  Po = 'PO',
  Eft = 'EFT',
  Entinstl = 'ENTINSTL',
  Gt = 'GT',
  Ngt = 'NGT',
  Ogt = 'OGT',
  Gjt = 'GJT',
  Jjtinstl = 'JJTINSTL',
  Ojj = 'OJJ',
}

export const EnteralRouteValues = ['PO', 'EFT', 'ENTINSTL', 'GT', 'NGT', 'OGT', 'GJT', 'JJTINSTL', 'OJJ'] as const;
