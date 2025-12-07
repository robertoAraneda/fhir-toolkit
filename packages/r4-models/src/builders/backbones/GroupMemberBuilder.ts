import { BackboneElementBuilder } from '../base/BackboneElementBuilder.js';
import { GroupMember } from '../../models/backbones/GroupMember.js';
import type {
  IGroupMember,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4-types';

/**
 * GroupMemberBuilder - Fluent builder for GroupMember backbone elements
 *
 * Extends BackboneElementBuilder which provides common setters:
 * - setId(), addExtension(), addModifierExtension()
 *
 * @example
 * const groupMember = new GroupMemberBuilder()
 *   .setEntity(value)
 *   .build();
 */
export class GroupMemberBuilder extends BackboneElementBuilder<GroupMember, IGroupMember> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set entity
   * Reference to the group member
   */
  setEntity(entity: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'Medication' | 'Substance' | 'Group'>): this {
    this.data.entity = entity;
    return this;
  }

  /**
   * Set period
   * Period member belonged to the group
   */
  setPeriod(period: IPeriod): this {
    this.data.period = period;
    return this;
  }

  /**
   * Set inactive
   * If member is no longer in group
   */
  setInactive(inactive: boolean): this {
    this.data.inactive = inactive;
    return this;
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the GroupMember instance
   */
  build(): GroupMember {
    return new GroupMember(this.data);
  }

  /**
   * Build and validate the GroupMember instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<GroupMember> {
    const groupMember = this.build();
    await groupMember.validateOrThrow();
    return groupMember;
  }
}
