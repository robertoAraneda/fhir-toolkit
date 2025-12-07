/**
 * Claim Item Type Codes
 * 
 * This value set includes sample Item Type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/fm-itemtype
 */

export type ClaimItemTypeType = 'group' | 'product' | 'service';

export enum ClaimItemTypeEnum {
  /** Group */
  Group = 'group',
  /** Product */
  Product = 'product',
  /** Service */
  Service = 'service',
}

export const ClaimItemTypeValues = ['group', 'product', 'service'] as const;
