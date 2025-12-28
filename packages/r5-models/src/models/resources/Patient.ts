import { DomainResource } from '../base/DomainResource.js';
import type {
  AdministrativeGenderType,
  IAddress,
  IAttachment,
  ICodeableConcept,
  IContactPoint,
  IElement,
  IHumanName,
  IIdentifier,
  IPatient,
  IPatientCommunication,
  IPatientContact,
  IPatientLink,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Patient */
const PATIENT_PROPERTIES = [
  'identifier',
  'active',
  '_active',
  'name',
  'telecom',
  'gender',
  '_gender',
  'birthDate',
  '_birthDate',
  'deceasedBoolean',
  '_deceasedBoolean',
  'deceasedDateTime',
  '_deceasedDateTime',
  'address',
  'maritalStatus',
  'multipleBirthBoolean',
  '_multipleBirthBoolean',
  'multipleBirthInteger',
  '_multipleBirthInteger',
  'photo',
  'contact',
  'communication',
  'generalPractitioner',
  'managingOrganization',
  'link',
] as const;

/**
 * Patient - Demographics and other administrative information about an individual or animal receiving care or other health-related services.
 *
 * @see https://hl7.org/fhir/R5/patient.html
 *
 * @example
 * const patient = new Patient({
 *   // ... properties
 * });
 */
export class Patient extends DomainResource implements IPatient {
  readonly resourceType = 'Patient' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** An identifier for this patient */
  identifier?: IIdentifier[];

  /** Whether this patient's record is in active use */
  active?: boolean;

  /** Extension for active */
  _active?: IElement;

  /** A name associated with the patient */
  name?: IHumanName[];

  /** A contact detail for the individual */
  telecom?: IContactPoint[];

  /** male | female | other | unknown */
  gender?: AdministrativeGenderType;

  /** Extension for gender */
  _gender?: IElement;

  /** The date of birth for the individual */
  birthDate?: string;

  /** Extension for birthDate */
  _birthDate?: IElement;

  /** Indicates if the individual is deceased or not */
  deceasedBoolean?: boolean;

  /** Extension for deceasedBoolean */
  _deceasedBoolean?: IElement;

  /** Indicates if the individual is deceased or not */
  deceasedDateTime?: string;

  /** Extension for deceasedDateTime */
  _deceasedDateTime?: IElement;

  /** An address for the individual */
  address?: IAddress[];

  /** Marital (civil) status of a patient */
  maritalStatus?: ICodeableConcept;

  /** Whether patient is part of a multiple birth */
  multipleBirthBoolean?: boolean;

  /** Extension for multipleBirthBoolean */
  _multipleBirthBoolean?: IElement;

  /** Whether patient is part of a multiple birth */
  multipleBirthInteger?: number;

  /** Extension for multipleBirthInteger */
  _multipleBirthInteger?: IElement;

  /** Image of the patient */
  photo?: IAttachment[];

  /** A contact party (e.g. guardian, partner, friend) for the patient */
  contact?: IPatientContact[];

  /** A language which may be used to communicate with the patient about his or her health */
  communication?: IPatientCommunication[];

  /** Patient's nominated primary care provider */
  generalPractitioner?: IReference<'Organization' | 'Practitioner' | 'PractitionerRole'>[];

  /** Organization that is the custodian of the patient record */
  managingOrganization?: IReference<'Organization'>;

  /** Link to a Patient or RelatedPerson resource that concerns the same actual individual */
  link?: IPatientLink[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IPatient>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, PATIENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Patient from a JSON object
   */
  static fromJSON(json: IPatient): Patient {
    return new Patient(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Patient with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPatient>): Patient {
    return new Patient({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Patient by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPatient) => Partial<IPatient>): Patient {
    const currentData = this.toJSON();
    return new Patient({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPatient)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPatient {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, PATIENT_PROPERTIES);
    return result as IPatient;
  }

  /**
   * Create a deep clone of this Patient
   */
  clone(): Patient {
    return new Patient(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Patient
   */
  toString(): string {
    const parts: string[] = ['Patient'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
