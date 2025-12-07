import { BackboneElement } from '../base/BackboneElement.js';
import type {
  AdministrativeGenderType,
  IAddress,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IHumanName,
  IPatientContact,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PatientContact */
const PATIENT_CONTACT_PROPERTIES = [
  'relationship',
  'name',
  'telecom',
  'address',
  'gender',
  '_gender',
  'organization',
  'period',
] as const;

/**
 * PatientContact - A contact party (e.g. guardian, partner, friend) for the patient
 *
 * @see https://hl7.org/fhir/R4/patientcontact.html
 *
 * @example
 * const patientContact = new PatientContact({
 *   // ... properties
 * });
 */
export class PatientContact extends BackboneElement implements IPatientContact {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The kind of relationship */
  relationship?: ICodeableConcept[];

  /** A name associated with the contact person */
  name?: IHumanName;

  /** A contact detail for the person */
  telecom?: IContactPoint[];

  /** Address for the contact person */
  address?: IAddress;

  /** male | female | other | unknown */
  gender?: AdministrativeGenderType;

  /** Extension for gender */
  _gender?: IElement;

  /** Organization that is associated with the contact */
  organization?: IReference<'Organization'>;

  /** The period during which this contact person or organization is valid to be contacted relating to this patient */
  period?: IPeriod;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPatientContact>) {
    super(data);
    if (data) {
      this.assignProps(data, PATIENT_CONTACT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PatientContact from a JSON object
   */
  static fromJSON(json: IPatientContact): PatientContact {
    return new PatientContact(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PatientContact with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPatientContact>): PatientContact {
    return new PatientContact({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PatientContact by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPatientContact) => Partial<IPatientContact>): PatientContact {
    const currentData = this.toJSON();
    return new PatientContact({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPatientContact)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPatientContact {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PATIENT_CONTACT_PROPERTIES);
    return result as IPatientContact;
  }

  /**
   * Create a deep clone of this PatientContact
   */
  clone(): PatientContact {
    return new PatientContact(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PatientContact
   */
  toString(): string {
    const parts: string[] = ['PatientContact'];
    return parts.join(', ');
  }
}
