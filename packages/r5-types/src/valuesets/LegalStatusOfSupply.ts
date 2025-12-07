/**
 * Legal Status Of Supply
 * 
 * The prescription supply types appropriate to a medicinal product
 *
 * @see http://hl7.org/fhir/ValueSet/legal-status-of-supply
 */

export type LegalStatusOfSupplyType = '100000072076' | '100000072077' | '100000072078' | '100000072079' | '100000072084' | '100000072085' | '100000072086' | '100000157313';

export enum LegalStatusOfSupplyEnum {
  /** Medicinal product not subject to medical prescription */
  _100000072076 = '100000072076',
  /** Medicinal product on medical prescription for renewable or non-renewable delivery */
  _100000072077 = '100000072077',
  /** Medicinal product subject to restricted medical prescription */
  _100000072078 = '100000072078',
  /** Medicinal product on medical prescription for non-renewable delivery */
  _100000072079 = '100000072079',
  /** Medicinal product subject to medical prescription */
  _100000072084 = '100000072084',
  /** Medicinal product subject to special medical prescription */
  _100000072085 = '100000072085',
  /** Medicinal product on medical prescription for renewable delivery */
  _100000072086 = '100000072086',
  /** Medicinal product subject to special and restricted medical prescription */
  _100000157313 = '100000157313',
}

export const LegalStatusOfSupplyValues = ['100000072076', '100000072077', '100000072078', '100000072079', '100000072084', '100000072085', '100000072086', '100000157313'] as const;
