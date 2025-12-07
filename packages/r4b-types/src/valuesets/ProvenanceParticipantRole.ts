/**
 * ProvenanceParticipantRole
 * 
 * The role that a provenance participant played
 *
 * @see http://hl7.org/fhir/ValueSet/provenance-participant-role
 */

export type ProvenanceParticipantRoleType = 'enterer' | 'performer' | 'author' | 'verifier' | 'legal' | 'attester' | 'informant' | 'custodian' | 'assembler' | 'composer';

export enum ProvenanceParticipantRoleEnum {
  /** Enterer */
  Enterer = 'enterer',
  /** Performer */
  Performer = 'performer',
  /** Author */
  Author = 'author',
  /** Verifier */
  Verifier = 'verifier',
  /** Legal Authenticator */
  Legal = 'legal',
  /** Attester */
  Attester = 'attester',
  /** Informant */
  Informant = 'informant',
  /** Custodian */
  Custodian = 'custodian',
  /** Assembler */
  Assembler = 'assembler',
  /** Composer */
  Composer = 'composer',
}

export const ProvenanceParticipantRoleValues = ['enterer', 'performer', 'author', 'verifier', 'legal', 'attester', 'informant', 'custodian', 'assembler', 'composer'] as const;
