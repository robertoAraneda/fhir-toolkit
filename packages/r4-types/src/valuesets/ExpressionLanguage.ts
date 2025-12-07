/**
 * ExpressionLanguage
 * 
 * The media type of the expression language.
 *
 * @see http://hl7.org/fhir/ValueSet/expression-language
 */

export type ExpressionLanguageType = 'text/cql' | 'text/fhirpath' | 'application/x-fhir-query';

export enum ExpressionLanguageEnum {
  /** CQL */
  TextCql = 'text/cql',
  /** FHIRPath */
  TextFhirpath = 'text/fhirpath',
  /** FHIR Query */
  ApplicationXFhirQuery = 'application/x-fhir-query',
}

export const ExpressionLanguageValues = ['text/cql', 'text/fhirpath', 'application/x-fhir-query'] as const;
