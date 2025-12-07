/**
 * Guidance Module Code
 * 
 * Example guidance module codes.
 *
 * @see http://hl7.org/fhir/ValueSet/guidance-module-code
 */

export type GuidanceModuleCodeType = 'bmi-calculator' | 'mme-calculator' | 'opioid-cds' | 'anc-cds' | 'chf-pathway' | 'covid-19-severity';

export enum GuidanceModuleCodeEnum {
  /** BMI Calculator */
  BmiCalculator = 'bmi-calculator',
  /** MME Calculator */
  MmeCalculator = 'mme-calculator',
  /** Opioid CDS */
  OpioidCds = 'opioid-cds',
  /** ANC CDS */
  AncCds = 'anc-cds',
  /** CHF Pathway */
  ChfPathway = 'chf-pathway',
  /** COVID-19 Severity Score */
  Covid19Severity = 'covid-19-severity',
}

export const GuidanceModuleCodeValues = ['bmi-calculator', 'mme-calculator', 'opioid-cds', 'anc-cds', 'chf-pathway', 'covid-19-severity'] as const;
