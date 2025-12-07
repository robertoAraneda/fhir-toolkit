/**
 * repositoryType
 * 
 * Type for access of external URI.
 *
 * @see http://hl7.org/fhir/ValueSet/repository-type
 */

export type RepositoryTypeType = 'directlink' | 'openapi' | 'login' | 'oauth' | 'other';

export enum RepositoryTypeEnum {
  /** Click and see */
  Directlink = 'directlink',
  /** The URL is the RESTful or other kind of API that can access to the result. */
  Openapi = 'openapi',
  /** Result cannot be access unless an account is logged in */
  Login = 'login',
  /** Result need to be fetched with API and need LOGIN( or cookies are required when visiting the link of resource) */
  Oauth = 'oauth',
  /** Some other complicated or particular way to get resource from URL. */
  Other = 'other',
}

export const RepositoryTypeValues = ['directlink', 'openapi', 'login', 'oauth', 'other'] as const;
