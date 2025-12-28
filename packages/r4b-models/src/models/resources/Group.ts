import { DomainResource } from '../base/DomainResource.js';
import type {
  GroupTypeType,
  ICodeableConcept,
  IElement,
  IGroup,
  IGroupCharacteristic,
  IGroupMember,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Group */
const GROUP_PROPERTIES = [
  'identifier',
  'active',
  '_active',
  'type',
  '_type',
  'actual',
  '_actual',
  'code',
  'name',
  '_name',
  'quantity',
  '_quantity',
  'managingEntity',
  'characteristic',
  'member',
] as const;

/**
 * Group - Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 *
 * @see https://hl7.org/fhir/R4B/group.html
 *
 * @example
 * const group = new Group({
 *   // ... properties
 * });
 */
export class Group extends DomainResource implements IGroup {
  readonly resourceType = 'Group' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique id */
  identifier?: IIdentifier[];

  /** Whether this group's record is in active use */
  active?: boolean;

  /** Extension for active */
  _active?: IElement;

  /** person | animal | practitioner | device | medication | substance */
  type: GroupTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Descriptive or actual */
  actual: boolean;

  /** Extension for actual */
  _actual?: IElement;

  /** Kind of Group members */
  code?: ICodeableConcept;

  /** Label for Group */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Number of members */
  quantity?: number;

  /** Extension for quantity */
  _quantity?: IElement;

  /** Entity that is the custodian of the Group's definition */
  managingEntity?: IReference<'Organization' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole'>;

  /** Include / Exclude group members by Trait */
  characteristic?: IGroupCharacteristic[];

  /** Who or what is in group */
  member?: IGroupMember[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IGroup>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, GROUP_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Group from a JSON object
   */
  static fromJSON(json: IGroup): Group {
    return new Group(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Group with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGroup>): Group {
    return new Group({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Group by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGroup) => Partial<IGroup>): Group {
    const currentData = this.toJSON();
    return new Group({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGroup)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGroup {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, GROUP_PROPERTIES);
    return result as IGroup;
  }

  /**
   * Create a deep clone of this Group
   */
  clone(): Group {
    return new Group(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Group
   */
  toString(): string {
    const parts: string[] = ['Group'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
