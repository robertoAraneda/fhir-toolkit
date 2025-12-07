/**
 * ResourceVersionPolicy
 * 
 * How the system supports versioning for a resource.
 *
 * @see http://hl7.org/fhir/ValueSet/versioning-policy
 */

export type ResourceVersionPolicyType = 'no-version' | 'versioned' | 'versioned-update';

export enum ResourceVersionPolicyEnum {
  /** No VersionId Support */
  NoVersion = 'no-version',
  /** Versioned */
  Versioned = 'versioned',
  /** VersionId tracked fully */
  VersionedUpdate = 'versioned-update',
}

export const ResourceVersionPolicyValues = ['no-version', 'versioned', 'versioned-update'] as const;
