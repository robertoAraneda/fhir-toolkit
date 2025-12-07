/**
 * AdverseEventCategory
 * 
 * Overall categorization of the event, e.g. product-related or situational.
 *
 * @see http://hl7.org/fhir/ValueSet/adverse-event-category
 */

export type AdverseEventCategoryType = 'product-problem' | 'product-quality' | 'product-use-error' | 'wrong-dose' | 'incorrect-prescribing-information' | 'wrong-technique' | 'wrong-route-of-administration' | 'wrong-rate' | 'wrong-duration' | 'wrong-time' | 'expired-drug' | 'medical-device-use-error' | 'problem-different-manufacturer' | 'unsafe-physical-environment';

export enum AdverseEventCategoryEnum {
  /** Product Problem */
  ProductProblem = 'product-problem',
  /** Product Quality */
  ProductQuality = 'product-quality',
  /** Product Use Error */
  ProductUseError = 'product-use-error',
  /** Wrong Dose */
  WrongDose = 'wrong-dose',
  /** Incorrect Prescribing Information */
  IncorrectPrescribingInformation = 'incorrect-prescribing-information',
  /** Wrong Technique */
  WrongTechnique = 'wrong-technique',
  /** Wrong Route of Administration */
  WrongRouteOfAdministration = 'wrong-route-of-administration',
  /** Wrong Rate */
  WrongRate = 'wrong-rate',
  /** Wrong Duration */
  WrongDuration = 'wrong-duration',
  /** Wrong Time */
  WrongTime = 'wrong-time',
  /** Expired Drug */
  ExpiredDrug = 'expired-drug',
  /** Medical Device Use Error */
  MedicalDeviceUseError = 'medical-device-use-error',
  /** Problem with Different Manufacturer of Same Medicine */
  ProblemDifferentManufacturer = 'problem-different-manufacturer',
  /** Unsafe Physical Environment */
  UnsafePhysicalEnvironment = 'unsafe-physical-environment',
}

export const AdverseEventCategoryValues = ['product-problem', 'product-quality', 'product-use-error', 'wrong-dose', 'incorrect-prescribing-information', 'wrong-technique', 'wrong-route-of-administration', 'wrong-rate', 'wrong-duration', 'wrong-time', 'expired-drug', 'medical-device-use-error', 'problem-different-manufacturer', 'unsafe-physical-environment'] as const;
