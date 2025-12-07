/**
 * CitationSummaryStyle
 * 
 * The format for display of the citation.
 *
 * @see http://hl7.org/fhir/ValueSet/citation-summary-style
 */

export type CitationSummaryStyleType = 'vancouver' | 'ama11' | 'apa7' | 'apa6' | 'asa6' | 'mla8' | 'cochrane' | 'elsevier-harvard' | 'nature' | 'acs' | 'chicago-a-17' | 'chicago-b-17' | 'ieee' | 'comppub';

export enum CitationSummaryStyleEnum {
  /** Vancouver style */
  Vancouver = 'vancouver',
  /** American Medical Association 11th edition */
  Ama11 = 'ama11',
  /** American Psychological Association 7th edition */
  Apa7 = 'apa7',
  /** American Psychological Association 6th edition */
  Apa6 = 'apa6',
  /** American Sociological Association 6th edition */
  Asa6 = 'asa6',
  /** Modern Language Association 8th edition */
  Mla8 = 'mla8',
  /** Cochrane Style */
  Cochrane = 'cochrane',
  /** Elsevier-Harvard Style */
  ElsevierHarvard = 'elsevier-harvard',
  /** Nature Referencing style */
  Nature = 'nature',
  /** American Chemical Society */
  Acs = 'acs',
  /** Chicago Style Version 17 Author Date */
  ChicagoA17 = 'chicago-a-17',
  /** Chicago Style Version 17 Full note */
  ChicagoB17 = 'chicago-b-17',
  /** Institute of Electrical and Electronics Engineers */
  Ieee = 'ieee',
  /** Computable Publishing */
  Comppub = 'comppub',
}

export const CitationSummaryStyleValues = ['vancouver', 'ama11', 'apa7', 'apa6', 'asa6', 'mla8', 'cochrane', 'elsevier-harvard', 'nature', 'acs', 'chicago-a-17', 'chicago-b-17', 'ieee', 'comppub'] as const;
