import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IGroupMember,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4-types';

/** Properties specific to GroupMember */
const GROUP_MEMBER_PROPERTIES = [
  'entity',
  'period',
  'inactive',
  '_inactive',
] as const;

/**
 * GroupMember - Who or what is in group
 *
 * @see https://hl7.org/fhir/R4/groupmember.html
 *
 * @example
 * const groupMember = new GroupMember({
 *   // ... properties
 * });
 */
export class GroupMember extends BackboneElement implements IGroupMember {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference to the group member */
  entity: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'Device' | 'Medication' | 'Substance' | 'Group'>;

  /** Period member belonged to the group */
  period?: IPeriod;

  /** If member is no longer in group */
  inactive?: boolean;

  /** Extension for inactive */
  _inactive?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IGroupMember>) {
    super(data);
    if (data) {
      this.assignProps(data, GROUP_MEMBER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create GroupMember from a JSON object
   */
  static fromJSON(json: IGroupMember): GroupMember {
    return new GroupMember(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new GroupMember with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IGroupMember>): GroupMember {
    return new GroupMember({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new GroupMember by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IGroupMember) => Partial<IGroupMember>): GroupMember {
    const currentData = this.toJSON();
    return new GroupMember({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IGroupMember)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IGroupMember {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, GROUP_MEMBER_PROPERTIES);
    return result as IGroupMember;
  }

  /**
   * Create a deep clone of this GroupMember
   */
  clone(): GroupMember {
    return new GroupMember(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the GroupMember
   */
  toString(): string {
    const parts: string[] = ['GroupMember'];
    return parts.join(', ');
  }
}
