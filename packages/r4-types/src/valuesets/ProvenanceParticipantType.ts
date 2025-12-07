/**
 * Provenance participant type
 * 
 * The type of participation a provenance participant.
 *
 * @see http://hl7.org/fhir/ValueSet/provenance-agent-type
 */

export type ProvenanceParticipantTypeType = 'enterer' | 'performer' | 'author' | 'verifier' | 'legal' | 'attester' | 'informant' | 'custodian' | 'assembler' | 'composer';

export enum ProvenanceParticipantTypeEnum {
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

export const ProvenanceParticipantTypeValues = ['enterer', 'performer', 'author', 'verifier', 'legal', 'attester', 'informant', 'custodian', 'assembler', 'composer'] as const;
