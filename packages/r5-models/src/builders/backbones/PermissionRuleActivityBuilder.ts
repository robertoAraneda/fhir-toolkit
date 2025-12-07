import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { PermissionRuleActivity } from '../../models/backbones/PermissionRuleActivity.js';
import type {
  ICodeableConcept,
  IPermissionRuleActivity,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * PermissionRuleActivityBuilder - Fluent builder for PermissionRuleActivity backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const permissionRuleActivity = new PermissionRuleActivityBuilder()
 *   .addActor({ ... })
 *   .build();
 */
export class PermissionRuleActivityBuilder extends BackboneElementBuilder<PermissionRuleActivity, IPermissionRuleActivity> {
  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add actor
   * Authorized actor(s)
   */
  addActor(actor: IReference<'Device' | 'Group' | 'CareTeam' | 'Organization' | 'Patient' | 'Practitioner' | 'RelatedPerson' | 'PractitionerRole'>): this {
    return this.addToArray('actor', actor);
  }

  /**
   * Add action
   * Actions controlled by this rule
   */
  addAction(action: ICodeableConcept): this {
    return this.addToArray('action', action);
  }

  /**
   * Add purpose
   * The purpose for which the permission is given
   */
  addPurpose(purpose: ICodeableConcept): this {
    return this.addToArray('purpose', purpose);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the PermissionRuleActivity instance
   */
  build(): PermissionRuleActivity {
    return new PermissionRuleActivity(this.data);
  }

  /**
   * Build and validate the PermissionRuleActivity instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<PermissionRuleActivity> {
    const permissionRuleActivity = this.build();
    await permissionRuleActivity.validateOrThrow();
    return permissionRuleActivity;
  }
}
