/**
 * Provenance Entity Role
 * 
 * How an entity was used in an activity.
 *
 * @see http://hl7.org/fhir/ValueSet/provenance-entity-role
 */

export type ProvenanceEntityRoleType = 'revision' | 'quotation' | 'source' | 'instantiates' | 'removal';

export enum ProvenanceEntityRoleEnum {
  /** Revision */
  Revision = 'revision',
  /** Quotation */
  Quotation = 'quotation',
  /** Source */
  Source = 'source',
  /** Instantiates */
  Instantiates = 'instantiates',
  /** Removal */
  Removal = 'removal',
}

export const ProvenanceEntityRoleValues = ['revision', 'quotation', 'source', 'instantiates', 'removal'] as const;
