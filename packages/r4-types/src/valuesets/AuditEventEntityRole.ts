/**
 * AuditEventEntityRole
 * 
 * Code representing the role the entity played in the audit event.
 *
 * @see http://hl7.org/fhir/ValueSet/object-role
 */

export type AuditEventEntityRoleType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24';

export enum AuditEventEntityRoleEnum {
  /** Patient */
  _1 = '1',
  /** Location */
  _2 = '2',
  /** Report */
  _3 = '3',
  /** Domain Resource */
  _4 = '4',
  /** Master file */
  _5 = '5',
  /** User */
  _6 = '6',
  /** List */
  _7 = '7',
  /** Doctor */
  _8 = '8',
  /** Subscriber */
  _9 = '9',
  /** Guarantor */
  _10 = '10',
  /** Security User Entity */
  _11 = '11',
  /** Security User Group */
  _12 = '12',
  /** Security Resource */
  _13 = '13',
  /** Security Granularity Definition */
  _14 = '14',
  /** Practitioner */
  _15 = '15',
  /** Data Destination */
  _16 = '16',
  /** Data Repository */
  _17 = '17',
  /** Schedule */
  _18 = '18',
  /** Customer */
  _19 = '19',
  /** Job */
  _20 = '20',
  /** Job Stream */
  _21 = '21',
  /** Table */
  _22 = '22',
  /** Routing Criteria */
  _23 = '23',
  /** Query */
  _24 = '24',
}

export const AuditEventEntityRoleValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'] as const;
