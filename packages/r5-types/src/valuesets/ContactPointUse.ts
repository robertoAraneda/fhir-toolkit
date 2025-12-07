/**
 * ContactPointUse
 * 
 * Use of contact point.
 *
 * @see http://hl7.org/fhir/ValueSet/contact-point-use
 */

export type ContactPointUseType = 'home' | 'work' | 'temp' | 'old' | 'mobile';

export enum ContactPointUseEnum {
  /** Home */
  Home = 'home',
  /** Work */
  Work = 'work',
  /** Temp */
  Temp = 'temp',
  /** Old */
  Old = 'old',
  /** Mobile */
  Mobile = 'mobile',
}

export const ContactPointUseValues = ['home', 'work', 'temp', 'old', 'mobile'] as const;
