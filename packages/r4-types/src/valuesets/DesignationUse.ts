/**
 * Designation Use
 * 
 * Details of how a designation would be used
 *
 * @see http://hl7.org/fhir/ValueSet/designation-use
 */

export type DesignationUseType = '900000000000003001' | '900000000000013009';

export enum DesignationUseEnum {
  _900000000000003001 = '900000000000003001',
  _900000000000013009 = '900000000000013009',
}

export const DesignationUseValues = ['900000000000003001', '900000000000013009'] as const;
