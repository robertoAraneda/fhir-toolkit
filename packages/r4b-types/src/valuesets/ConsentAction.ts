/**
 * Consent Action Codes
 * 
 * This value set includes sample Consent Action codes.
 *
 * @see http://hl7.org/fhir/ValueSet/consent-action
 */

export type ConsentActionType = 'collect' | 'access' | 'use' | 'disclose' | 'correct';

export enum ConsentActionEnum {
  /** Collect */
  Collect = 'collect',
  /** Access */
  Access = 'access',
  /** Use */
  Use = 'use',
  /** Disclose */
  Disclose = 'disclose',
  /** Access and Correct */
  Correct = 'correct',
}

export const ConsentActionValues = ['collect', 'access', 'use', 'disclose', 'correct'] as const;
