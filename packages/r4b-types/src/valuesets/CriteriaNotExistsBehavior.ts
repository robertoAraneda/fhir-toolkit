/**
 * CriteriaNotExistsBehavior
 * 
 * Behavior a server can exhibit when a criteria state does not exist (e.g., state prior to a create or after a delete).
 *
 * @see http://hl7.org/fhir/ValueSet/subscriptiontopic-cr-behavior
 */

export type CriteriaNotExistsBehaviorType = 'test-passes' | 'test-fails';

export enum CriteriaNotExistsBehaviorEnum {
  /** test passes */
  TestPasses = 'test-passes',
  /** test fails */
  TestFails = 'test-fails',
}

export const CriteriaNotExistsBehaviorValues = ['test-passes', 'test-fails'] as const;
