/**
 * HTTPVerb
 * 
 * HTTP verbs (in the HTTP command line). See [HTTP rfc](https://tools.ietf.org/html/rfc7231) for details.
 *
 * @see http://hl7.org/fhir/ValueSet/http-verb
 */

export type HTTPVerbType = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export enum HTTPVerbEnum {
  /** GET */
  Get = 'GET',
  /** HEAD */
  Head = 'HEAD',
  /** POST */
  Post = 'POST',
  /** PUT */
  Put = 'PUT',
  /** DELETE */
  Delete = 'DELETE',
  /** PATCH */
  Patch = 'PATCH',
}

export const HTTPVerbValues = ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH'] as const;
