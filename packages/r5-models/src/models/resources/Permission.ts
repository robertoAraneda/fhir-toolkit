import { DomainResource } from '../base/DomainResource.js';
import type {
  IElement,
  IPeriod,
  IPermission,
  IPermissionJustification,
  IPermissionRule,
  IReference,
  PermissionRuleCombiningType,
  PermissionStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Permission */
const PERMISSION_PROPERTIES = [
  'status',
  '_status',
  'asserter',
  'date',
  '_date',
  'validity',
  'justification',
  'combining',
  '_combining',
  'rule',
] as const;

/**
 * Permission - Permission resource holds access rules for a given data and context.
 *
 * @see https://hl7.org/fhir/R5/permission.html
 *
 * @example
 * const permission = new Permission({
 *   // ... properties
 * });
 */
export class Permission extends DomainResource implements IPermission {
  readonly resourceType = 'Permission' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** active | entered-in-error | draft | rejected */
  status: PermissionStatusType;

  /** Extension for status */
  _status?: IElement;

  /** The person or entity that asserts the permission */
  asserter?: IReference<'Practitioner' | 'PractitionerRole' | 'Organization' | 'CareTeam' | 'Patient' | 'RelatedPerson' | 'HealthcareService'>;

  /** The date that permission was asserted */
  date?: string[];

  /** Extension for date */
  _date?: IElement;

  /** The period in which the permission is active */
  validity?: IPeriod;

  /** The asserted justification for using the data */
  justification?: IPermissionJustification;

  /** deny-overrides | permit-overrides | ordered-deny-overrides | ordered-permit-overrides | deny-unless-permit | permit-unless-deny */
  combining: PermissionRuleCombiningType;

  /** Extension for combining */
  _combining?: IElement;

  /** Constraints to the Permission */
  rule?: IPermissionRule[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IPermission>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, PERMISSION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Permission from a JSON object
   */
  static fromJSON(json: IPermission): Permission {
    return new Permission(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Permission with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPermission>): Permission {
    return new Permission({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Permission by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPermission) => Partial<IPermission>): Permission {
    const currentData = this.toJSON();
    return new Permission({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPermission)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPermission {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, PERMISSION_PROPERTIES);
    return result as IPermission;
  }

  /**
   * Create a deep clone of this Permission
   */
  clone(): Permission {
    return new Permission(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Permission
   */
  toString(): string {
    const parts: string[] = ['Permission'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
