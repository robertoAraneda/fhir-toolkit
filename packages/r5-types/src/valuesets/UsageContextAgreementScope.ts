/**
 * Usage Context Agreement Scope
 * 
 * Codes for use in UsageContext.valueCodeableConcept when UsageContext.code is agreement-scope
 *
 * @see http://hl7.org/fhir/ValueSet/usage-context-agreement-scope
 */

export type UsageContextAgreementScopeType = 'realm-base' | 'knowledge' | 'domain' | 'community' | 'system-design' | 'system-implementation';

export enum UsageContextAgreementScopeEnum {
  /** Realm Base */
  RealmBase = 'realm-base',
  /** Knowledge */
  Knowledge = 'knowledge',
  /** Domain */
  Domain = 'domain',
  /** Community */
  Community = 'community',
  /** System Design */
  SystemDesign = 'system-design',
  /** System Implementation */
  SystemImplementation = 'system-implementation',
}

export const UsageContextAgreementScopeValues = ['realm-base', 'knowledge', 'domain', 'community', 'system-design', 'system-implementation'] as const;
