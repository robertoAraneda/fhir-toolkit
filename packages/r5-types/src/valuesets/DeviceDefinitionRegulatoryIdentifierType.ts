/**
 * Device Definition Regulatory Identifier Type
 * 
 * Regulatory Identifier type
 *
 * @see http://hl7.org/fhir/ValueSet/devicedefinition-regulatory-identifier-type
 */

export type DeviceDefinitionRegulatoryIdentifierTypeType = 'basic' | 'master' | 'license';

export enum DeviceDefinitionRegulatoryIdentifierTypeEnum {
  /** Basic */
  Basic = 'basic',
  /** Master */
  Master = 'master',
  /** License */
  License = 'license',
}

export const DeviceDefinitionRegulatoryIdentifierTypeValues = ['basic', 'master', 'license'] as const;
