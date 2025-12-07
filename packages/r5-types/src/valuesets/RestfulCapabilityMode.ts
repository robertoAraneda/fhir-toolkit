/**
 * Restful Capability Mode
 * 
 * The mode of a RESTful capability statement.
 *
 * @see http://hl7.org/fhir/ValueSet/restful-capability-mode
 */

export type RestfulCapabilityModeType = 'client' | 'server';

export enum RestfulCapabilityModeEnum {
  /** Client */
  Client = 'client',
  /** Server */
  Server = 'server',
}

export const RestfulCapabilityModeValues = ['client', 'server'] as const;
