import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAddress,
  ICodeableConcept,
  IContactPoint,
  IHumanName,
  IOrganizationContact,
} from '@fhir-toolkit/r4-types';

/** Properties specific to OrganizationContact */
const ORGANIZATION_CONTACT_PROPERTIES = [
  'purpose',
  'name',
  'telecom',
  'address',
] as const;

/**
 * OrganizationContact - Contact for the organization for a certain purpose
 *
 * @see https://hl7.org/fhir/R4/organizationcontact.html
 *
 * @example
 * const organizationContact = new OrganizationContact({
 *   // ... properties
 * });
 */
export class OrganizationContact extends BackboneElement implements IOrganizationContact {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of contact */
  purpose?: ICodeableConcept;

  /** A name associated with the contact */
  name?: IHumanName;

  /** Contact details (telephone, email, etc.)  for a contact */
  telecom?: IContactPoint[];

  /** Visiting or postal addresses for the contact */
  address?: IAddress;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IOrganizationContact>) {
    super(data);
    if (data) {
      this.assignProps(data, ORGANIZATION_CONTACT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create OrganizationContact from a JSON object
   */
  static fromJSON(json: IOrganizationContact): OrganizationContact {
    return new OrganizationContact(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new OrganizationContact with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IOrganizationContact>): OrganizationContact {
    return new OrganizationContact({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new OrganizationContact by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IOrganizationContact) => Partial<IOrganizationContact>): OrganizationContact {
    const currentData = this.toJSON();
    return new OrganizationContact({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IOrganizationContact)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IOrganizationContact {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ORGANIZATION_CONTACT_PROPERTIES);
    return result as IOrganizationContact;
  }

  /**
   * Create a deep clone of this OrganizationContact
   */
  clone(): OrganizationContact {
    return new OrganizationContact(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the OrganizationContact
   */
  toString(): string {
    const parts: string[] = ['OrganizationContact'];
    return parts.join(', ');
  }
}
