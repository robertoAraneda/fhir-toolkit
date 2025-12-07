/**
 * EndpointStatus
 * 
 * The status of the endpoint.
 *
 * @see http://hl7.org/fhir/ValueSet/endpoint-status
 */

export type EndpointStatusType = 'active' | 'suspended' | 'error' | 'off' | 'entered-in-error' | 'test';

export enum EndpointStatusEnum {
  /** Active */
  Active = 'active',
  /** Suspended */
  Suspended = 'suspended',
  /** Error */
  Error = 'error',
  /** Off */
  Off = 'off',
  /** Entered in error */
  EnteredInError = 'entered-in-error',
  /** Test */
  Test = 'test',
}

export const EndpointStatusValues = ['active', 'suspended', 'error', 'off', 'entered-in-error', 'test'] as const;
