/**
 * Permission Rule Combining
 * 
 * Codes identifying rule combining algorithm.
 *
 * @see http://hl7.org/fhir/ValueSet/permission-rule-combining
 */

export type PermissionRuleCombiningType = 'deny-overrides' | 'permit-overrides' | 'ordered-deny-overrides' | 'ordered-permit-overrides' | 'deny-unless-permit' | 'permit-unless-deny';

export enum PermissionRuleCombiningEnum {
  /** Deny-overrides */
  DenyOverrides = 'deny-overrides',
  /** Permit-overrides */
  PermitOverrides = 'permit-overrides',
  /** Ordered-deny-overrides */
  OrderedDenyOverrides = 'ordered-deny-overrides',
  /** Ordered-permit-overrides */
  OrderedPermitOverrides = 'ordered-permit-overrides',
  /** Deny-unless-permit */
  DenyUnlessPermit = 'deny-unless-permit',
  /** Permit-unless-deny */
  PermitUnlessDeny = 'permit-unless-deny',
}

export const PermissionRuleCombiningValues = ['deny-overrides', 'permit-overrides', 'ordered-deny-overrides', 'ordered-permit-overrides', 'deny-unless-permit', 'permit-unless-deny'] as const;
