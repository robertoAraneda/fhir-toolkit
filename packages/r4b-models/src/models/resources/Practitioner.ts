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
  IPractitioner,
  IPractitionerQualification,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Practitioner */
const PRACTITIONER_PROPERTIES = [
  'identifier',
  'active',
  '_active',
  'name',
  'telecom',
  'address',
  'gender',
  '_gender',
  'birthDate',
  '_birthDate',
  'photo',
  'qualification',
  'communication',
] as const;

/**
 * Practitioner - A person who is directly or indirectly involved in the provisioning of healthcare.
 *
 * @see https://hl7.org/fhir/R4/practitioner.html
 *
 * @example
 * const practitioner = new Practitioner({
 *   // ... properties
 * });
 */
export class Practitioner extends DomainResource implements IPractitioner {
  readonly resourceType = 'Practitioner' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** An identifier for the person as this agent */
  identifier?: IIdentifier[];

  /** Whether this practitioner's record is in active use */
  active?: boolean;

  /** Extension for active */
  _active?: IElement;

  /** The name(s) associated with the practitioner */
  name?: IHumanName[];

  /** A contact detail for the practitioner (that apply to all roles) */
  telecom?: IContactPoint[];

  /** Address(es) of the practitioner that are not role specific (typically home address) */
  address?: IAddress[];

  /** male | female | other | unknown */
  gender?: AdministrativeGenderType;

  /** Extension for gender */
  _gender?: IElement;

  /** The date  on which the practitioner was born */
  birthDate?: string;

  /** Extension for birthDate */
  _birthDate?: IElement;

  /** Image of the person */
  photo?: IAttachment[];

  /** Certification, licenses, or training pertaining to the provision of care */
  qualification?: IPractitionerQualification[];

  /** A language the practitioner can use in patient communication */
  communication?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IPractitioner>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, PRACTITIONER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Practitioner from a JSON object
   */
  static fromJSON(json: IPractitioner): Practitioner {
    return new Practitioner(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Practitioner with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPractitioner>): Practitioner {
    return new Practitioner({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Practitioner by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPractitioner) => Partial<IPractitioner>): Practitioner {
    const currentData = this.toJSON();
    return new Practitioner({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPractitioner)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPractitioner {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, PRACTITIONER_PROPERTIES);
    return result as IPractitioner;
  }

  /**
   * Create a deep clone of this Practitioner
   */
  clone(): Practitioner {
    return new Practitioner(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Practitioner
   */
  toString(): string {
    const parts: string[] = ['Practitioner'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
