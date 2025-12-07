/**
 * MeasureType
 * 
 * The type of measure (includes codes from 2.16.840.1.113883.1.11.20368).
 *
 * @see http://hl7.org/fhir/ValueSet/measure-type
 */

export type MeasureTypeType = 'process' | 'outcome' | 'structure' | 'patient-reported-outcome' | 'composite';

export enum MeasureTypeEnum {
  /** Process */
  Process = 'process',
  /** Outcome */
  Outcome = 'outcome',
  /** Structure */
  Structure = 'structure',
  /** Patient Reported Outcome */
  PatientReportedOutcome = 'patient-reported-outcome',
  /** Composite */
  Composite = 'composite',
}

export const MeasureTypeValues = ['process', 'outcome', 'structure', 'patient-reported-outcome', 'composite'] as const;
