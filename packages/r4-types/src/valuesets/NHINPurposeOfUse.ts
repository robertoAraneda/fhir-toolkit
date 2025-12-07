/**
 * NHINPurposeOfUse
 * 
 * This value set is suitable for use with the provenance resource. It is derived from, but not compatible with, the HL7 v3 Purpose of use Code system.
 *
 * @see http://hl7.org/fhir/ValueSet/nhin-purposeofuse
 */

export type NHINPurposeOfUseType = 'TREATMENT' | 'PAYMENT' | 'OPERATIONS' | 'SYSADMIN' | 'FRAUD' | 'PSYCHOTHERAPY' | 'TRAINING' | 'LEGAL' | 'MARKETING' | 'DIRECTORY' | 'FAMILY' | 'PRESENT' | 'EMERGENCY' | 'DISASTER' | 'PUBLICHEALTH' | 'ABUSE' | 'OVERSIGHT' | 'JUDICIAL' | 'LAW' | 'DECEASED' | 'DONATION' | 'RESEARCH' | 'THREAT' | 'GOVERNMENT' | 'WORKERSCOMP' | 'COVERAGE' | 'REQUEST';

export enum NHINPurposeOfUseEnum {
  /** Treatment */
  Treatment = 'TREATMENT',
  /** Payment */
  Payment = 'PAYMENT',
  /** Operations */
  Operations = 'OPERATIONS',
  /** Sysadmin */
  Sysadmin = 'SYSADMIN',
  /** Fraud */
  Fraud = 'FRAUD',
  /** Psychotherapy */
  Psychotherapy = 'PSYCHOTHERAPY',
  /** Training */
  Training = 'TRAINING',
  /** Legal */
  Legal = 'LEGAL',
  /** Marketing */
  Marketing = 'MARKETING',
  /** Directory */
  Directory = 'DIRECTORY',
  /** Family */
  Family = 'FAMILY',
  /** Present */
  Present = 'PRESENT',
  /** Emergency */
  Emergency = 'EMERGENCY',
  /** Disaster */
  Disaster = 'DISASTER',
  /** Public Health */
  Publichealth = 'PUBLICHEALTH',
  /** Abuse */
  Abuse = 'ABUSE',
  /** Oversight */
  Oversight = 'OVERSIGHT',
  /** Judicial */
  Judicial = 'JUDICIAL',
  /** Law Enforcement */
  Law = 'LAW',
  /** Deceased */
  Deceased = 'DECEASED',
  /** Donation */
  Donation = 'DONATION',
  /** Research */
  Research = 'RESEARCH',
  /** Threat */
  Threat = 'THREAT',
  /** Government */
  Government = 'GOVERNMENT',
  /** Worker's Comp */
  Workerscomp = 'WORKERSCOMP',
  /** Coverage */
  Coverage = 'COVERAGE',
  /** Request */
  Request = 'REQUEST',
}

export const NHINPurposeOfUseValues = ['TREATMENT', 'PAYMENT', 'OPERATIONS', 'SYSADMIN', 'FRAUD', 'PSYCHOTHERAPY', 'TRAINING', 'LEGAL', 'MARKETING', 'DIRECTORY', 'FAMILY', 'PRESENT', 'EMERGENCY', 'DISASTER', 'PUBLICHEALTH', 'ABUSE', 'OVERSIGHT', 'JUDICIAL', 'LAW', 'DECEASED', 'DONATION', 'RESEARCH', 'THREAT', 'GOVERNMENT', 'WORKERSCOMP', 'COVERAGE', 'REQUEST'] as const;
