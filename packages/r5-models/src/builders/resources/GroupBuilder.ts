import { DomainResourceBuilder } from '../base/DomainResourceBuilder.js';
import { Group } from '../../models/resources/Group.js';
import type {
  GroupMembershipBasisType,
  GroupTypeType,
  ICodeableConcept,
  IGroup,
  IGroupCharacteristic,
  IGroupMember,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/**
 * GroupBuilder - Fluent builder for Group resources
 *
 * Extends DomainResourceBuilder which provides common setters:
 * - setId(), setMeta(), setImplicitRules(), setLanguage()
 * - setText(), addContained(), addExtension(), addModifierExtension()
 *
 * @example
 * const group = new GroupBuilder()
 *   .setId('123')
 *   .setActive(value)
 *   .addIdentifier({ ... })
 *   .build();
 */
export class GroupBuilder extends DomainResourceBuilder<Group, IGroup> {
  // ============================================================================
  // Scalar Properties
  // ============================================================================

  /**
   * Set active
   * Whether this group's record is in active use
   */
  setActive(active: boolean): this {
    this.data.active = active;
    return this;
  }

  /**
   * Set type
   * person | animal | practitioner | device | careteam | healthcareservice | location | organization | relatedperson | specimen
   */
  setType(type: GroupTypeType): this {
    this.data.type = type;
    return this;
  }

  /**
   * Set membership
   * definitional | enumerated
   */
  setMembership(membership: GroupMembershipBasisType): this {
    this.data.membership = membership;
    return this;
  }

  /**
   * Set code
   * Kind of Group members
   */
  setCode(code: ICodeableConcept): this {
    this.data.code = code;
    return this;
  }

  /**
   * Set name
   * Label for Group
   */
  setName(name: string): this {
    this.data.name = name;
    return this;
  }

  /**
   * Set description
   * Natural language description of the group
   */
  setDescription(description: string): this {
    this.data.description = description;
    return this;
  }

  /**
   * Set quantity
   * Number of members
   */
  setQuantity(quantity: number): this {
    this.data.quantity = quantity;
    return this;
  }

  /**
   * Set managingEntity
   * Entity that is the custodian of the Group's definition
   */
  setManagingEntity(managingEntity: IReference<'Organization' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole'>): this {
    this.data.managingEntity = managingEntity;
    return this;
  }

  // ============================================================================
  // Array Properties
  // ============================================================================

  /**
   * Add identifier
   * Business Identifier for this Group
   */
  addIdentifier(identifier: IIdentifier): this {
    return this.addToArray('identifier', identifier);
  }

  /**
   * Add characteristic
   * Include / Exclude group members by Trait
   */
  addCharacteristic(characteristic: IGroupCharacteristic): this {
    return this.addToArray('characteristic', characteristic);
  }

  /**
   * Add member
   * Who or what is in group
   */
  addMember(member: IGroupMember): this {
    return this.addToArray('member', member);
  }

  // ============================================================================
  // Build Methods
  // ============================================================================

  /**
   * Build the Group instance
   */
  build(): Group {
    return new Group(this.data);
  }

  /**
   * Build and validate the Group instance
   * @throws Error if validation fails
   */
  async buildOrThrow(): Promise<Group> {
    const group = this.build();
    await group.validateOrThrow();
    return group;
  }
}
