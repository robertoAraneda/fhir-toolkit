/**
 * RegulatedAuthorizationType
 * 
 * Overall type of this authorization.
 *
 * @see http://hl7.org/fhir/ValueSet/regulated-authorization-type
 */

export type RegulatedAuthorizationTypeType = 'MarketingAuth' | 'Orphan' | 'Pediatric';

export enum RegulatedAuthorizationTypeEnum {
  /** Marketing Authorization */
  Marketingauth = 'MarketingAuth',
  /** Orphan Drug Authorization */
  Orphan = 'Orphan',
  /** Pediatric Use Drug Authorization */
  Pediatric = 'Pediatric',
}

export const RegulatedAuthorizationTypeValues = ['MarketingAuth', 'Orphan', 'Pediatric'] as const;
