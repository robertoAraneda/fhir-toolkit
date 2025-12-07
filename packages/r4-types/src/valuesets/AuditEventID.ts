/**
 * Audit Event ID
 * 
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 *
 * @see http://hl7.org/fhir/ValueSet/audit-event-type
 */

export type AuditEventIDType = '110100' | '110101' | '110102' | '110103' | '110104' | '110105' | '110106' | '110107' | '110108' | '110109' | '110110' | '110111' | '110112' | '110113' | '110114' | 'rest' | 'access' | 'hold' | 'amend' | 'archive' | 'attest' | 'decrypt' | 'deidentify' | 'deprecate' | 'destroy' | 'disclose' | 'encrypt' | 'extract' | 'link' | 'merge' | 'originate' | 'pseudonymize' | 'reactivate' | 'receive' | 'reidentify' | 'unhold' | 'report' | 'restore' | 'transform' | 'transmit' | 'unlink' | 'unmerge' | 'verify';

export enum AuditEventIDEnum {
  _110100 = '110100',
  _110101 = '110101',
  _110102 = '110102',
  _110103 = '110103',
  _110104 = '110104',
  _110105 = '110105',
  _110106 = '110106',
  _110107 = '110107',
  _110108 = '110108',
  _110109 = '110109',
  _110110 = '110110',
  _110111 = '110111',
  _110112 = '110112',
  _110113 = '110113',
  _110114 = '110114',
  /** RESTful Operation */
  Rest = 'rest',
  /** Access/View Record Lifecycle Event */
  Access = 'access',
  /** Add Legal Hold Record Lifecycle Event */
  Hold = 'hold',
  /** Amend (Update) Record Lifecycle Event */
  Amend = 'amend',
  /** Archive Record Lifecycle Event */
  Archive = 'archive',
  /** Attest Record Lifecycle Event */
  Attest = 'attest',
  /** Decrypt Record Lifecycle Event */
  Decrypt = 'decrypt',
  /** De-Identify (Anononymize) Record Lifecycle Event */
  Deidentify = 'deidentify',
  /** Deprecate Record Lifecycle Event */
  Deprecate = 'deprecate',
  /** Destroy/Delete Record Lifecycle Event */
  Destroy = 'destroy',
  /** Disclose Record Lifecycle Event */
  Disclose = 'disclose',
  /** Encrypt Record Lifecycle Event */
  Encrypt = 'encrypt',
  /** Extract Record Lifecycle Event */
  Extract = 'extract',
  /** Link Record Lifecycle Event */
  Link = 'link',
  /** Merge Record Lifecycle Event */
  Merge = 'merge',
  /** Originate/Retain Record Lifecycle Event */
  Originate = 'originate',
  /** Pseudonymize Record Lifecycle Event */
  Pseudonymize = 'pseudonymize',
  /** Re-activate Record Lifecycle Event */
  Reactivate = 'reactivate',
  /** Receive/Retain Record Lifecycle Event */
  Receive = 'receive',
  /** Re-identify Record Lifecycle Event */
  Reidentify = 'reidentify',
  /** Remove Legal Hold Record Lifecycle Event */
  Unhold = 'unhold',
  /** Report (Output) Record Lifecycle Event */
  Report = 'report',
  /** Restore Record Lifecycle Event */
  Restore = 'restore',
  /** Transform/Translate Record Lifecycle Event */
  Transform = 'transform',
  /** Transmit Record Lifecycle Event */
  Transmit = 'transmit',
  /** Unlink Record Lifecycle Event */
  Unlink = 'unlink',
  /** Unmerge Record Lifecycle Event */
  Unmerge = 'unmerge',
  /** Verify Record Lifecycle Event */
  Verify = 'verify',
}

export const AuditEventIDValues = ['110100', '110101', '110102', '110103', '110104', '110105', '110106', '110107', '110108', '110109', '110110', '110111', '110112', '110113', '110114', 'rest', 'access', 'hold', 'amend', 'archive', 'attest', 'decrypt', 'deidentify', 'deprecate', 'destroy', 'disclose', 'encrypt', 'extract', 'link', 'merge', 'originate', 'pseudonymize', 'reactivate', 'receive', 'reidentify', 'unhold', 'report', 'restore', 'transform', 'transmit', 'unlink', 'unmerge', 'verify'] as const;
