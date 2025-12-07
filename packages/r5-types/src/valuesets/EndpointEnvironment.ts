/**
 * Endpoint Environment
 * 
 * The environment type of the endpoint.
 *
 * @see http://hl7.org/fhir/ValueSet/endpoint-environment
 */

export type EndpointEnvironmentType = 'prod' | 'staging' | 'dev' | 'test' | 'train';

export enum EndpointEnvironmentEnum {
  /** Production */
  Prod = 'prod',
  /** Staging */
  Staging = 'staging',
  /** Development */
  Dev = 'dev',
  /** Test */
  Test = 'test',
  /** Training */
  Train = 'train',
}

export const EndpointEnvironmentValues = ['prod', 'staging', 'dev', 'test', 'train'] as const;
