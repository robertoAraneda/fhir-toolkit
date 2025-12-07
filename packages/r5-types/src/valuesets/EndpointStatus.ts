/**
 * Endpoint Status
 * 
 * The status of the endpoint.
 *
 * @see http://hl7.org/fhir/ValueSet/endpoint-status
 */

export type EndpointStatusType = 'active' | 'suspended' | 'error' | 'off' | 'entered-in-error';

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
}

export const EndpointStatusValues = ['active', 'suspended', 'error', 'off', 'entered-in-error'] as const;
