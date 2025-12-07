/**
 * Service category
 * 
 * This value set defines an example set of codes that can be used to classify groupings of service-types/specialties.
 *
 * @see http://hl7.org/fhir/ValueSet/service-category
 */

export type ServiceCategoryType = '1' | '2' | '34' | '3' | '4' | '5' | '6' | '7' | '8' | '36' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '35' | '18' | '19' | '20' | '21' | '22' | '38' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30' | '31' | '32' | '37' | '33';

export enum ServiceCategoryEnum {
  /** Adoption */
  _1 = '1',
  /** Aged Care */
  _2 = '2',
  /** Allied Health */
  _34 = '34',
  /** Alternative/Complementary Therapies */
  _3 = '3',
  /** Child Care /Kindergarten */
  _4 = '4',
  /** Child Development */
  _5 = '5',
  /** Child Protection & Family Services */
  _6 = '6',
  /** Community Health Care */
  _7 = '7',
  /** Counselling */
  _8 = '8',
  /** Crisis Line (GPAH use only) */
  _36 = '36',
  /** Death Services */
  _9 = '9',
  /** Dental */
  _10 = '10',
  /** Disability Support */
  _11 = '11',
  /** Drug/Alcohol */
  _12 = '12',
  /** Education & Learning */
  _13 = '13',
  /** Emergency Department */
  _14 = '14',
  /** Employment */
  _15 = '15',
  /** Financial & Material Aid */
  _16 = '16',
  /** General Practice */
  _17 = '17',
  /** Hospital */
  _35 = '35',
  /** Housing/Homelessness */
  _18 = '18',
  /** Interpreting */
  _19 = '19',
  /** Justice */
  _20 = '20',
  /** Legal */
  _21 = '21',
  /** Mental Health */
  _22 = '22',
  /** NDIA */
  _38 = '38',
  /** Physical Activity & Recreation */
  _23 = '23',
  /** Regulation */
  _24 = '24',
  /** Respite/Carer Support */
  _25 = '25',
  /** Specialist Clinical Pathology */
  _26 = '26',
  /** Specialist Medical */
  _27 = '27',
  /** Specialist Obstetrics & Gynecology */
  _28 = '28',
  /** Specialist Paediatric */
  _29 = '29',
  /** Specialist Radiology/Imaging */
  _30 = '30',
  /** Specialist Surgical */
  _31 = '31',
  /** Support Group/s */
  _32 = '32',
  /** Test Message (HSD admin) */
  _37 = '37',
  /** Transport */
  _33 = '33',
}

export const ServiceCategoryValues = ['1', '2', '34', '3', '4', '5', '6', '7', '8', '36', '9', '10', '11', '12', '13', '14', '15', '16', '17', '35', '18', '19', '20', '21', '22', '38', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '37', '33'] as const;
