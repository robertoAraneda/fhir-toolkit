/**
 * Network Type Codes
 * 
 * This value set includes a smattering of Network type codes.
 *
 * @see http://hl7.org/fhir/ValueSet/benefit-network
 */

export type NetworkTypeType = 'in' | 'out';

export enum NetworkTypeEnum {
  /** In Network */
  In = 'in',
  /** Out of Network */
  Out = 'out',
}

export const NetworkTypeValues = ['in', 'out'] as const;
