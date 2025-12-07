/**
 * Benefit Category Codes
 * 
 * This value set includes examples of Benefit Category codes.
 *
 * @see http://hl7.org/fhir/ValueSet/ex-benefitcategory
 */

export type BenefitCategoryType = '1' | '2' | '3' | '4' | '5' | '14' | '23' | '24' | '25' | '26' | '27' | '28' | '30' | '35' | '36' | '37' | '49' | '55' | '56' | '61' | '62' | '63' | '69' | '76' | 'F1' | 'F3' | 'F4' | 'F6';

export enum BenefitCategoryEnum {
  /** Medical Care */
  _1 = '1',
  /** Surgical */
  _2 = '2',
  /** Consultation */
  _3 = '3',
  /** Diagnostic XRay */
  _4 = '4',
  /** Diagnostic Lab */
  _5 = '5',
  /** Renal Supplies */
  _14 = '14',
  /** Diagnostic Dental */
  _23 = '23',
  /** Periodontics */
  _24 = '24',
  /** Restorative */
  _25 = '25',
  /** Endodontics */
  _26 = '26',
  /** Maxillofacial Prosthetics */
  _27 = '27',
  /** Adjunctive Dental Services */
  _28 = '28',
  /** Health Benefit Plan Coverage */
  _30 = '30',
  /** Dental Care */
  _35 = '35',
  /** Dental Crowns */
  _36 = '36',
  /** Dental Accident */
  _37 = '37',
  /** Hospital Room and Board */
  _49 = '49',
  /** Major Medical */
  _55 = '55',
  /** Medically Related Transportation */
  _56 = '56',
  /** In-vitro Fertilization */
  _61 = '61',
  /** MRI Scan */
  _62 = '62',
  /** Donor Procedures */
  _63 = '63',
  /** Maternity */
  _69 = '69',
  /** Renal Dialysis */
  _76 = '76',
  /** Medical Coverage */
  F1 = 'F1',
  /** Dental Coverage */
  F3 = 'F3',
  /** Hearing Coverage */
  F4 = 'F4',
  /** Vision Coverage */
  F6 = 'F6',
}

export const BenefitCategoryValues = ['1', '2', '3', '4', '5', '14', '23', '24', '25', '26', '27', '28', '30', '35', '36', '37', '49', '55', '56', '61', '62', '63', '69', '76', 'F1', 'F3', 'F4', 'F6'] as const;
