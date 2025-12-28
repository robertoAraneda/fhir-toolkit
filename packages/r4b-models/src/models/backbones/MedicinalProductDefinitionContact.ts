import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IMedicinalProductDefinitionContact,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to MedicinalProductDefinitionContact */
const MEDICINAL_PRODUCT_DEFINITION_CONTACT_PROPERTIES = [
  'type',
  'contact',
] as const;

/**
 * MedicinalProductDefinitionContact - A product specific contact, person (in a role), or an organization
 *
 * @see https://hl7.org/fhir/R4B/medicinalproductdefinitioncontact.html
 *
 * @example
 * const medicinalProductDefinitionContact = new MedicinalProductDefinitionContact({
 *   // ... properties
 * });
 */
export class MedicinalProductDefinitionContact extends BackboneElement implements IMedicinalProductDefinitionContact {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Allows the contact to be classified, for example QPPV, Pharmacovigilance Enquiry Information */
  type?: ICodeableConcept;

  /** A product specific contact, person (in a role), or an organization */
  contact: IReference<'Organization' | 'PractitionerRole'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicinalProductDefinitionContact>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICINAL_PRODUCT_DEFINITION_CONTACT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicinalProductDefinitionContact from a JSON object
   */
  static fromJSON(json: IMedicinalProductDefinitionContact): MedicinalProductDefinitionContact {
    return new MedicinalProductDefinitionContact(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicinalProductDefinitionContact with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicinalProductDefinitionContact>): MedicinalProductDefinitionContact {
    return new MedicinalProductDefinitionContact({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicinalProductDefinitionContact by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicinalProductDefinitionContact) => Partial<IMedicinalProductDefinitionContact>): MedicinalProductDefinitionContact {
    const currentData = this.toJSON();
    return new MedicinalProductDefinitionContact({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicinalProductDefinitionContact)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicinalProductDefinitionContact {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICINAL_PRODUCT_DEFINITION_CONTACT_PROPERTIES);
    return result as IMedicinalProductDefinitionContact;
  }

  /**
   * Create a deep clone of this MedicinalProductDefinitionContact
   */
  clone(): MedicinalProductDefinitionContact {
    return new MedicinalProductDefinitionContact(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicinalProductDefinitionContact
   */
  toString(): string {
    const parts: string[] = ['MedicinalProductDefinitionContact'];
    return parts.join(', ');
  }
}
