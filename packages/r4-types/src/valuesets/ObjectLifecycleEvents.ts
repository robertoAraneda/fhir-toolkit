/**
 * ObjectLifecycleEvents
 * 
 * This example FHIR value set is comprised of lifecycle event codes. The FHIR Actor value set is based on    DICOM Audit Message, ParticipantObjectDataLifeCycle;   ISO Standard, TS 21089-2017;  
 *
 * @see http://hl7.org/fhir/ValueSet/object-lifecycle-events
 */

export type ObjectLifecycleEventsType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | 'access' | 'hold' | 'amend' | 'archive' | 'attest' | 'decrypt' | 'deidentify' | 'deprecate' | 'destroy' | 'disclose' | 'encrypt' | 'extract' | 'link' | 'merge' | 'originate' | 'pseudonymize' | 'reactivate' | 'receive' | 'reidentify' | 'unhold' | 'report' | 'restore' | 'transform' | 'transmit' | 'unlink' | 'unmerge' | 'verify';

export enum ObjectLifecycleEventsEnum {
  /** Origination / Creation */
  _1 = '1',
  /** Import / Copy */
  _2 = '2',
  /** Amendment */
  _3 = '3',
  /** Verification */
  _4 = '4',
  /** Translation */
  _5 = '5',
  /** Access / Use */
  _6 = '6',
  /** De-identification */
  _7 = '7',
  /** Aggregation / summarization / derivation */
  _8 = '8',
  /** Report */
  _9 = '9',
  /** Export */
  _10 = '10',
  /** Disclosure */
  _11 = '11',
  /** Receipt of disclosure */
  _12 = '12',
  /** Archiving */
  _13 = '13',
  /** Logical deletion */
  _14 = '14',
  /** Permanent erasure / Physical destruction */
  _15 = '15',
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

export const ObjectLifecycleEventsValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', 'access', 'hold', 'amend', 'archive', 'attest', 'decrypt', 'deidentify', 'deprecate', 'destroy', 'disclose', 'encrypt', 'extract', 'link', 'merge', 'originate', 'pseudonymize', 'reactivate', 'receive', 'reidentify', 'unhold', 'report', 'restore', 'transform', 'transmit', 'unlink', 'unmerge', 'verify'] as const;
