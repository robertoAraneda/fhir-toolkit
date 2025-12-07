/**
 * ProvenanceActivityType
 * 
 * This value set contains representative Activity Type codes, which includes codes from the HL7 DocumentCompletion, ActStatus, and DataOperations code system, W3C PROV-DM and PROV-N concepts and display names, several HL7 Lifecycle Event codes for which there are agreed upon definitions, and non-duplicated codes from the HL7 Security and Privacy Ontology Operations codes.
 *
 * @see http://hl7.org/fhir/ValueSet/provenance-activity-type
 */

export type ProvenanceActivityTypeType = 'LA' | 'ANONY' | 'DEID' | 'MASK' | 'LABEL' | 'PSEUD' | 'CREATE' | 'DELETE' | 'UPDATE' | 'APPEND' | 'NULLIFY';

export enum ProvenanceActivityTypeEnum {
  La = 'LA',
  Anony = 'ANONY',
  Deid = 'DEID',
  Mask = 'MASK',
  Label = 'LABEL',
  Pseud = 'PSEUD',
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE',
  Append = 'APPEND',
  Nullify = 'NULLIFY',
}

export const ProvenanceActivityTypeValues = ['LA', 'ANONY', 'DEID', 'MASK', 'LABEL', 'PSEUD', 'CREATE', 'DELETE', 'UPDATE', 'APPEND', 'NULLIFY'] as const;
