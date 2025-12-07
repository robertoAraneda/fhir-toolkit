/**
 * Primary-source-type
 * 
 * Type of the validation primary source
 *
 * @see http://hl7.org/fhir/ValueSet/verificationresult-primary-source-type
 */

export type PrimarySourceTypeType = 'lic-board' | 'prim' | 'cont-ed' | 'post-serv' | 'rel-own' | 'reg-auth' | 'legal' | 'issuer' | 'auth-source';

export enum PrimarySourceTypeEnum {
  /** License Board */
  LicBoard = 'lic-board',
  /** Primary Education */
  Prim = 'prim',
  /** Continuing Education */
  ContEd = 'cont-ed',
  /** Postal Service */
  PostServ = 'post-serv',
  /** Relationship owner */
  RelOwn = 'rel-own',
  /** Registration Authority */
  RegAuth = 'reg-auth',
  /** Legal source */
  Legal = 'legal',
  /** Issuing source */
  Issuer = 'issuer',
  /** Authoritative source */
  AuthSource = 'auth-source',
}

export const PrimarySourceTypeValues = ['lic-board', 'prim', 'cont-ed', 'post-serv', 'rel-own', 'reg-auth', 'legal', 'issuer', 'auth-source'] as const;
