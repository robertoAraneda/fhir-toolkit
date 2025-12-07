/**
 * Evidence Report Type
 * 
 * The kind of report, such as grouping of classifiers, search results, or human-compiled expression.
 *
 * @see http://hl7.org/fhir/ValueSet/evidence-report-type
 */

export type EvidenceReportTypeType = 'classification' | 'search-results' | 'resources-compiled' | 'text-structured';

export enum EvidenceReportTypeEnum {
  /** Classification */
  Classification = 'classification',
  /** Search Results */
  SearchResults = 'search-results',
  /** Resource Compilation */
  ResourcesCompiled = 'resources-compiled',
  /** Structured Text */
  TextStructured = 'text-structured',
}

export const EvidenceReportTypeValues = ['classification', 'search-results', 'resources-compiled', 'text-structured'] as const;
