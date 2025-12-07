/**
 * ExpressionLanguage
 * 
 * The media type of the expression language.
 *
 * @see http://hl7.org/fhir/ValueSet/expression-language
 */

export type ExpressionLanguageType = 'text/cql' | 'text/fhirpath' | 'application/x-fhir-query' | 'text/cql-identifier' | 'text/cql-expression';

export enum ExpressionLanguageEnum {
  /** CQL */
  TextCql = 'text/cql',
  /** FHIRPath */
  TextFhirpath = 'text/fhirpath',
  /** FHIR Query */
  ApplicationXFhirQuery = 'application/x-fhir-query',
  /** CQL Identifier */
  TextCqlIdentifier = 'text/cql-identifier',
  /** CQL Expression */
  TextCqlExpression = 'text/cql-expression',
}

export const ExpressionLanguageValues = ['text/cql', 'text/fhirpath', 'application/x-fhir-query', 'text/cql-identifier', 'text/cql-expression'] as const;
