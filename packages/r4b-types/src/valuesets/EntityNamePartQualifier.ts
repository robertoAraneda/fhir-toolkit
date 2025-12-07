/**
 * EntityNamePartQualifier
 * 
 * A set of codes each of which specifies a certain subcategory of the name part in addition to the main name part type.
 *
 * @see http://hl7.org/fhir/ValueSet/name-part-qualifier
 */

export type EntityNamePartQualifierType = 'LS' | 'AC' | 'NB' | 'PR' | 'HON' | 'BR' | 'AD' | 'SP' | 'MID' | 'CL' | 'IN' | 'VV';

export enum EntityNamePartQualifierEnum {
  /** Legal status */
  Ls = 'LS',
  /** Academic */
  Ac = 'AC',
  /** Nobility */
  Nb = 'NB',
  /** Professional */
  Pr = 'PR',
  /** Honorific */
  Hon = 'HON',
  /** Birth */
  Br = 'BR',
  /** Acquired */
  Ad = 'AD',
  /** Spouse */
  Sp = 'SP',
  /** Middle Name */
  Mid = 'MID',
  /** Call me */
  Cl = 'CL',
  /** Initial */
  In = 'IN',
  /** Voorvoegsel */
  Vv = 'VV',
}

export const EntityNamePartQualifierValues = ['LS', 'AC', 'NB', 'PR', 'HON', 'BR', 'AD', 'SP', 'MID', 'CL', 'IN', 'VV'] as const;
