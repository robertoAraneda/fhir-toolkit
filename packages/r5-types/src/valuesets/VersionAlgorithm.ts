/**
 * Version Algorithm
 * 
 * Indicates the mechanism used to compare versions to determine which is more current.
 *
 * @see http://hl7.org/fhir/ValueSet/version-algorithm
 */

export type VersionAlgorithmType = 'semver' | 'integer' | 'alpha' | 'date' | 'natural';

export enum VersionAlgorithmEnum {
  /** SemVer */
  Semver = 'semver',
  /** Integer */
  Integer = 'integer',
  /** Alphabetical */
  Alpha = 'alpha',
  /** Date */
  Date = 'date',
  /** Natural */
  Natural = 'natural',
}

export const VersionAlgorithmValues = ['semver', 'integer', 'alpha', 'date', 'natural'] as const;
