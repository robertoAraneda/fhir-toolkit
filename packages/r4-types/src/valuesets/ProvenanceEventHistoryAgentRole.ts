/**
 * Provenance Event History Agent Role Codes
 * 
 * Types of roles indicating how a particular agent was involved with the creation or modification of a resource for use when exposing event history
 *
 * @see http://hl7.org/fhir/ValueSet/provenance-history-agent-type
 */

export type ProvenanceEventHistoryAgentRoleType = 'AUT' | 'INF' | 'VRF' | 'ENT';

export enum ProvenanceEventHistoryAgentRoleEnum {
  /** Author */
  Aut = 'AUT',
  /** Informant */
  Inf = 'INF',
  /** Verifier */
  Vrf = 'VRF',
  /** Data Enterer */
  Ent = 'ENT',
}

export const ProvenanceEventHistoryAgentRoleValues = ['AUT', 'INF', 'VRF', 'ENT'] as const;
