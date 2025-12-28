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
  IPerson,
  IPersonCommunication,
  IPersonLink,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Person */
const PERSON_PROPERTIES = [
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
  'photo',
  'communication',
  'managingOrganization',
  'link',
] as const;

/**
 * Person - Demographics and administrative information about a person independent of a specific health-related context.
 *
 * @see https://hl7.org/fhir/R5/person.html
 *
 * @example
 * const person = new Person({
 *   // ... properties
 * });
 */
export class Person extends DomainResource implements IPerson {
  readonly resourceType = 'Person' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** A human identifier for this person */
  identifier?: IIdentifier[];

  /** This person's record is in active use */
  active?: boolean;

  /** Extension for active */
  _active?: IElement;

  /** A name associated with the person */
  name?: IHumanName[];

  /** A contact detail for the person */
  telecom?: IContactPoint[];

  /** male | female | other | unknown */
  gender?: AdministrativeGenderType;

  /** Extension for gender */
  _gender?: IElement;

  /** The date on which the person was born */
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

  /** One or more addresses for the person */
  address?: IAddress[];

  /** Marital (civil) status of a person */
  maritalStatus?: ICodeableConcept;

  /** Image of the person */
  photo?: IAttachment[];

  /** A language which may be used to communicate with the person about his or her health */
  communication?: IPersonCommunication[];

  /** The organization that is the custodian of the person record */
  managingOrganization?: IReference<'Organization'>;

  /** Link to a resource that concerns the same actual person */
  link?: IPersonLink[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IPerson>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, PERSON_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Person from a JSON object
   */
  static fromJSON(json: IPerson): Person {
    return new Person(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Person with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPerson>): Person {
    return new Person({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Person by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPerson) => Partial<IPerson>): Person {
    const currentData = this.toJSON();
    return new Person({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPerson)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPerson {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, PERSON_PROPERTIES);
    return result as IPerson;
  }

  /**
   * Create a deep clone of this Person
   */
  clone(): Person {
    return new Person(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Person
   */
  toString(): string {
    const parts: string[] = ['Person'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
