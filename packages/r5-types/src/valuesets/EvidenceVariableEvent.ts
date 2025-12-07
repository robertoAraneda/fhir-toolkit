/**
 * Evidence Variable Event
 * 
 * The event used as a base point (reference point) in time.
 *
 * @see http://hl7.org/fhir/ValueSet/evidence-variable-event
 */

export type EvidenceVariableEventType = 'study-start' | 'treatment-start' | 'condition-detection' | 'condition-treatment' | 'hospital-admission' | 'hospital-discharge' | 'operative-procedure';

export enum EvidenceVariableEventEnum {
  /** Study Start */
  StudyStart = 'study-start',
  /** Start of Treatment */
  TreatmentStart = 'treatment-start',
  /** Detection of Condition */
  ConditionDetection = 'condition-detection',
  /** Treatment of Condition */
  ConditionTreatment = 'condition-treatment',
  /** Hospital Admission */
  HospitalAdmission = 'hospital-admission',
  /** Hospital Discharge */
  HospitalDischarge = 'hospital-discharge',
  /** Operative Procedure */
  OperativeProcedure = 'operative-procedure',
}

export const EvidenceVariableEventValues = ['study-start', 'treatment-start', 'condition-detection', 'condition-treatment', 'hospital-admission', 'hospital-discharge', 'operative-procedure'] as const;
