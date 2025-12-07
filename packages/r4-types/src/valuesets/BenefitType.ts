/**
 * Benefit Type Codes
 * 
 * This value set includes a smattering of Benefit type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/benefit-type
 */

export type BenefitTypeType = 'benefit' | 'deductible' | 'visit' | 'room' | 'copay' | 'copay-percent' | 'copay-maximum' | 'vision-exam' | 'vision-glasses' | 'vision-contacts' | 'medical-primarycare' | 'pharmacy-dispense';

export enum BenefitTypeEnum {
  /** Benefit */
  Benefit = 'benefit',
  /** Deductible */
  Deductible = 'deductible',
  /** Visit */
  Visit = 'visit',
  /** Room */
  Room = 'room',
  /** Copayment per service */
  Copay = 'copay',
  /** Copayment Percent per service */
  CopayPercent = 'copay-percent',
  /** Copayment maximum per service */
  CopayMaximum = 'copay-maximum',
  /** Vision Exam */
  VisionExam = 'vision-exam',
  /** Vision Glasses */
  VisionGlasses = 'vision-glasses',
  /** Vision Contacts Coverage */
  VisionContacts = 'vision-contacts',
  /** Medical Primary Health Coverage */
  MedicalPrimarycare = 'medical-primarycare',
  /** Pharmacy Dispense Coverage */
  PharmacyDispense = 'pharmacy-dispense',
}

export const BenefitTypeValues = ['benefit', 'deductible', 'visit', 'room', 'copay', 'copay-percent', 'copay-maximum', 'vision-exam', 'vision-glasses', 'vision-contacts', 'medical-primarycare', 'pharmacy-dispense'] as const;
