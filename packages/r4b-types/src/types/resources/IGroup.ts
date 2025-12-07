import type { ICodeableConcept, IDomainResource, IElement, IReference } from '../../base/index.js';
import type { IIdentifier } from '../datatypes/IIdentifier.js';
import type { IGroupCharacteristic } from '../backbones/IGroupCharacteristic.js';
import type { IGroupMember } from '../backbones/IGroupMember.js';
import type { GroupTypeType } from '../../valuesets/index.js';

/**
 * Group Interface
 * 
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 * 
 *
 * @see https://hl7.org/fhir/R4/group.html
 */
export interface IGroup extends IDomainResource {
  /**
   * The type of resource
   */
  resourceType: 'Group';

  /**
   * Unique id
   */
  identifier?: IIdentifier[];

  /**
   * Whether this group's record is in active use
   */
  active?: boolean;
  /**
   * Extension for active
   */
  _active?: IElement;

  /**
   * person | animal | practitioner | device | medication | substance
   */
  type: GroupTypeType;
  /**
   * Extension for type
   */
  _type?: IElement;

  /**
   * Descriptive or actual
   */
  actual: boolean;
  /**
   * Extension for actual
   */
  _actual?: IElement;

  /**
   * Kind of Group members
   */
  code?: ICodeableConcept;

  /**
   * Label for Group
   */
  name?: string;
  /**
   * Extension for name
   */
  _name?: IElement;

  /**
   * Number of members
   */
  quantity?: number;
  /**
   * Extension for quantity
   */
  _quantity?: IElement;

  /**
   * Entity that is the custodian of the Group's definition
   */
  managingEntity?: IReference<'Organization' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole'>;

  /**
   * Include / Exclude group members by Trait
   */
  characteristic?: IGroupCharacteristic[];

  /**
   * Who or what is in group
   */
  member?: IGroupMember[];

}
