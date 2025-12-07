import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Permission } from '../../models/resources/Permission.js';
import type {
  IPeriod,
  IPermission,
  IPermissionJustification,
  IPermissionRule,
  IReference,
  PermissionRuleCombiningType,
  PermissionStatusType,
} from '@fhir-toolkit/r5-types';

/**
 * PermissionBuilder - Fluent builder for Permission resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const permission = new PermissionBuilder()
 *   .setId('123')
 *   .setStatus(value)
 *   .addDate({ ... })
 *   .build();
 */
export class PermissionBuilder extends DomainResourceBuilder<Permission, IPermission> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set status
   * active | entered-in-error | draft | rejected
   */
  setStatus(status: PermissionStatusType): this {
    this.data.status = status;
    return this;
  }

  /**
   * Set asserter
   * The person or entity that asserts the permission
   */
  setAsserter(asserter: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'RelatedPerson' | 'HealthcareService'>): this {
    this.data.asserter = asserter;
    return this;
  }

  /**
   * Set validity
   * The period in which the permission is active
   */
  setValidity(validity: IPeriod): this {
    this.data.validity = validity;
    return this;
  }

  /**
   * Set justification
   * The asserted justification for using the data
   */
  setJustification(justification: IPermissionJustification): this {
    this.data.justification = justification;
    return this;
  }

  /**
   * Set combining
   * deny-overrides | permit-overrides | ordered-deny-overrides | ordered-permit-overrides | deny-unless-permit | permit-unless-deny
   */
  setCombining(combining: PermissionRuleCombiningType): this {
    this.data.combining = combining;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add date
   * The date that permission was asserted
   */
  addDate(date: string): this {
    return this.addToArray('date', date);
  }

  /**
   * Add rule
   * Constraints to the Permission
   */
  addRule(rule: IPermissionRule): this {
    return this.addToArray('rule', rule);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Permission instance
   */
  build(): Permission {
    return new Permission(this.data);
  }

  /**
   * Build and validate the Permission instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Permission> {
    const permission = this.build();
    await permission.validateOrThrow();
    return permission;
  }
}
