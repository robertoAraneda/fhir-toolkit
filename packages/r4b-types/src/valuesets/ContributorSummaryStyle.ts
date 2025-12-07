/**
 * ContributorSummaryStyle
 * 
 * Used to code the format of the display string.
 *
 * @see http://hl7.org/fhir/ValueSet/contributor-summary-style
 */

export type ContributorSummaryStyleType = 'a1full' | 'a1init' | 'a3full' | 'a3init' | 'a6full' | 'a6init' | 'aallfull' | 'aallfullwithand' | 'aallfullwithampersand' | 'aallinit' | 'aallinitwithand' | 'aallinitwithampersand' | 'contr-full-by-person' | 'contr-init-by-person' | 'contr-full-by-contr' | 'contr-init-by-contr';

export enum ContributorSummaryStyleEnum {
  /** First author (full name) et al */
  A1full = 'a1full',
  /** First author (last name first initials) et al */
  A1init = 'a1init',
  /** First 3 authors (full name) et al */
  A3full = 'a3full',
  /** First 3 authors (last name first initials) et al */
  A3init = 'a3init',
  /** First 6 authors (full name) et al */
  A6full = 'a6full',
  /** First 6 authors (last name first initials) et al */
  A6init = 'a6init',
  /** All authors (full name) */
  Aallfull = 'aallfull',
  /** All authors (full name) with and before last author */
  Aallfullwithand = 'aallfullwithand',
  /** All authors (full name) with an ampersand before last author */
  Aallfullwithampersand = 'aallfullwithampersand',
  /** All authors (last name first initials) */
  Aallinit = 'aallinit',
  /** All authors (last name first initials) with and before last author */
  Aallinitwithand = 'aallinitwithand',
  /** All authors (last name first initials) with an ampersand before last author */
  Aallinitwithampersand = 'aallinitwithampersand',
  /** Contributorship statement listed by person with full names */
  ContrFullByPerson = 'contr-full-by-person',
  /** Contributorship statement listed by person with initials */
  ContrInitByPerson = 'contr-init-by-person',
  /** Contributorship statement listed by contribution with full names */
  ContrFullByContr = 'contr-full-by-contr',
  /** Contributorship statement listed by contribution with initials */
  ContrInitByContr = 'contr-init-by-contr',
}

export const ContributorSummaryStyleValues = ['a1full', 'a1init', 'a3full', 'a3init', 'a6full', 'a6init', 'aallfull', 'aallfullwithand', 'aallfullwithampersand', 'aallinit', 'aallinitwithand', 'aallinitwithampersand', 'contr-full-by-person', 'contr-init-by-person', 'contr-full-by-contr', 'contr-init-by-contr'] as const;
