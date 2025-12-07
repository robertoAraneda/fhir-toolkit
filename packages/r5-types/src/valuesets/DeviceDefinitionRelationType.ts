/**
 * Device Definition Relation Type
 * 
 * Description Needed Here
 *
 * @see http://hl7.org/fhir/ValueSet/devicedefinition-relationtype
 */

export type DeviceDefinitionRelationTypeType = 'gateway' | 'replaces' | 'previous';

export enum DeviceDefinitionRelationTypeEnum {
  /** Gateway */
  Gateway = 'gateway',
  /** Replaces */
  Replaces = 'replaces',
  /** Previous */
  Previous = 'previous',
}

export const DeviceDefinitionRelationTypeValues = ['gateway', 'replaces', 'previous'] as const;
