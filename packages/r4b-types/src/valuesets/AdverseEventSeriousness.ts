/**
 * AdverseEventSeriousness
 * 
 * Overall seriousness of this event for the patient.
 *
 * @see http://hl7.org/fhir/ValueSet/adverse-event-seriousness
 */

export type AdverseEventSeriousnessType = 'Non-serious' | 'Serious' | 'SeriousResultsInDeath' | 'SeriousIsLifeThreatening' | 'SeriousResultsInHospitalization' | 'SeriousResultsInDisability' | 'SeriousIsBirthDefect' | 'SeriousRequiresPreventImpairment';

export enum AdverseEventSeriousnessEnum {
  /** Non-serious */
  NonSerious = 'Non-serious',
  /** Serious */
  Serious = 'Serious',
  /** Results in death */
  Seriousresultsindeath = 'SeriousResultsInDeath',
  /** Is Life-threatening */
  Seriousislifethreatening = 'SeriousIsLifeThreatening',
  /** Requires or prolongs inpatient hospitalization */
  Seriousresultsinhospitalization = 'SeriousResultsInHospitalization',
  /** Results in persistent or significant disability/incapacity */
  Seriousresultsindisability = 'SeriousResultsInDisability',
  /** Is a congenital anomaly/birth defect */
  Seriousisbirthdefect = 'SeriousIsBirthDefect',
  /** Requires intervention to prevent permanent impairment */
  Seriousrequirespreventimpairment = 'SeriousRequiresPreventImpairment',
}

export const AdverseEventSeriousnessValues = ['Non-serious', 'Serious', 'SeriousResultsInDeath', 'SeriousIsLifeThreatening', 'SeriousResultsInHospitalization', 'SeriousResultsInDisability', 'SeriousIsBirthDefect', 'SeriousRequiresPreventImpairment'] as const;
