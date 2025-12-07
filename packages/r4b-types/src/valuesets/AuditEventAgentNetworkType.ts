/**
 * AuditEventAgentNetworkType
 * 
 * The type of network access point of this agent in the audit event.
 *
 * @see http://hl7.org/fhir/ValueSet/network-type
 */

export type AuditEventAgentNetworkTypeType = '1' | '2' | '3' | '4' | '5';

export enum AuditEventAgentNetworkTypeEnum {
  /** Machine Name */
  _1 = '1',
  /** IP Address */
  _2 = '2',
  /** Telephone Number */
  _3 = '3',
  /** Email address */
  _4 = '4',
  /** URI */
  _5 = '5',
}

export const AuditEventAgentNetworkTypeValues = ['1', '2', '3', '4', '5'] as const;
