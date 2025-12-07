/**
 * ProvenanceEntityRole
 * 
 * How an entity was used in an activity.
 *
 * @see http://hl7.org/fhir/ValueSet/provenance-entity-role
 */

export type ProvenanceEntityRoleType = 'derivation' | 'revision' | 'quotation' | 'source' | 'removal';

export enum ProvenanceEntityRoleEnum {
  /** Derivation */
  Derivation = 'derivation',
  /** Revision */
  Revision = 'revision',
  /** Quotation */
  Quotation = 'quotation',
  /** Source */
  Source = 'source',
  /** Removal */
  Removal = 'removal',
}

export const ProvenanceEntityRoleValues = ['derivation', 'revision', 'quotation', 'source', 'removal'] as const;
