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
  IPeriod,
  IReference,
  IRelatedPerson,
  IRelatedPersonCommunication,
} from '@fhir-toolkit/r5-types';

/** Properties specific to RelatedPerson */
const RELATED_PERSON_PROPERTIES = [
  'identifier',
  'active',
  '_active',
  'patient',
  'relationship',
  'name',
  'telecom',
  'gender',
  '_gender',
  'birthDate',
  '_birthDate',
  'address',
  'photo',
  'period',
  'communication',
] as const;

/**
 * RelatedPerson - Information about a person that is involved in a patient's health or the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.
 *
 * @see https://hl7.org/fhir/R5/relatedperson.html
 *
 * @example
 * const relatedPerson = new RelatedPerson({
 *   // ... properties
 * });
 */
export class RelatedPerson extends DomainResource implements IRelatedPerson {
  readonly resourceType = 'RelatedPerson' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** A human identifier for this person */
  identifier?: IIdentifier[];

  /** Whether this related person's record is in active use */
  active?: boolean;

  /** Extension for active */
  _active?: IElement;

  /** The patient this person is related to */
  patient: IReference<'Patient'>;

  /** The relationship of the related person to the patient */
  relationship?: ICodeableConcept[];

  /** A name associated with the person */
  name?: IHumanName[];

  /** A contact detail for the person */
  telecom?: IContactPoint[];

  /** male | female | other | unknown */
  gender?: AdministrativeGenderType;

  /** Extension for gender */
  _gender?: IElement;

  /** The date on which the related person was born */
  birthDate?: string;

  /** Extension for birthDate */
  _birthDate?: IElement;

  /** Address where the related person can be contacted or visited */
  address?: IAddress[];

  /** Image of the person */
  photo?: IAttachment[];

  /** Period of time that this relationship is considered valid */
  period?: IPeriod;

  /** A language which may be used to communicate with the related person about the patient's health */
  communication?: IRelatedPersonCommunication[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IRelatedPerson>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, RELATED_PERSON_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create RelatedPerson from a JSON object
   */
  static fromJSON(json: IRelatedPerson): RelatedPerson {
    return new RelatedPerson(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new RelatedPerson with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IRelatedPerson>): RelatedPerson {
    return new RelatedPerson({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new RelatedPerson by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IRelatedPerson) => Partial<IRelatedPerson>): RelatedPerson {
    const currentData = this.toJSON();
    return new RelatedPerson({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IRelatedPerson)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IRelatedPerson {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, RELATED_PERSON_PROPERTIES);
    return result as IRelatedPerson;
  }

  /**
   * Create a deep clone of this RelatedPerson
   */
  clone(): RelatedPerson {
    return new RelatedPerson(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the RelatedPerson
   */
  toString(): string {
    const parts: string[] = ['RelatedPerson'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
