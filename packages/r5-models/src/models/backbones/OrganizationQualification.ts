import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IIdentifier,
  IOrganizationQualification,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to OrganizationQualification */
const ORGANIZATION_QUALIFICATION_PROPERTIES = [
  'identifier',
  'code',
  'period',
  'issuer',
] as const;

/**
 * OrganizationQualification - Qualifications, certifications, accreditations, licenses, training, etc. pertaining to the provision of care
 *
 * @see https://hl7.org/fhir/R5/organizationqualification.html
 *
 * @example
 * const organizationQualification = new OrganizationQualification({
 *   // ... properties
 * });
 */
export class OrganizationQualification extends BackboneElement implements IOrganizationQualification {

  // ============================================================================
  // Properties
  // ============================================================================

  /** An identifier for this qualification for the organization */
  identifier?: IIdentifier[];

  /** Coded representation of the qualification */
  code: ICodeableConcept;

  /** Period during which the qualification is valid */
  period?: IPeriod;

  /** Organization that regulates and issues the qualification */
  issuer?: IReference<'Organization'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IOrganizationQualification>) {
    super(data);
    if (data) {
      this.assignProps(data, ORGANIZATION_QUALIFICATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create OrganizationQualification from a JSON object
   */
  static fromJSON(json: IOrganizationQualification): OrganizationQualification {
    return new OrganizationQualification(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new OrganizationQualification with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IOrganizationQualification>): OrganizationQualification {
    return new OrganizationQualification({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new OrganizationQualification by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IOrganizationQualification) => Partial<IOrganizationQualification>): OrganizationQualification {
    const currentData = this.toJSON();
    return new OrganizationQualification({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IOrganizationQualification)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IOrganizationQualification {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ORGANIZATION_QUALIFICATION_PROPERTIES);
    return result as IOrganizationQualification;
  }

  /**
   * Create a deep clone of this OrganizationQualification
   */
  clone(): OrganizationQualification {
    return new OrganizationQualification(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the OrganizationQualification
   */
  toString(): string {
    const parts: string[] = ['OrganizationQualification'];
    return parts.join(', ');
  }
}
