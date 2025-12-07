import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IPatientLink,
  IReference,
  LinkTypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to PatientLink */
const PATIENT_LINK_PROPERTIES = [
  'other',
  'type',
  '_type',
] as const;

/**
 * PatientLink - Link to a Patient or RelatedPerson resource that concerns the same actual individual
 *
 * @see https://hl7.org/fhir/R4/patientlink.html
 *
 * @example
 * const patientLink = new PatientLink({
 *   // ... properties
 * });
 */
export class PatientLink extends BackboneElement implements IPatientLink {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The other patient or related person resource that the link refers to */
  other: IReference<'Patient' | 'RelatedPerson'>;

  /** replaced-by | replaces | refer | seealso */
  type: LinkTypeType;

  /** Extension for type */
  _type?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPatientLink>) {
    super(data);
    if (data) {
      this.assignProps(data, PATIENT_LINK_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PatientLink from a JSON object
   */
  static fromJSON(json: IPatientLink): PatientLink {
    return new PatientLink(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PatientLink with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPatientLink>): PatientLink {
    return new PatientLink({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PatientLink by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPatientLink) => Partial<IPatientLink>): PatientLink {
    const currentData = this.toJSON();
    return new PatientLink({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPatientLink)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPatientLink {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PATIENT_LINK_PROPERTIES);
    return result as IPatientLink;
  }

  /**
   * Create a deep clone of this PatientLink
   */
  clone(): PatientLink {
    return new PatientLink(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PatientLink
   */
  toString(): string {
    const parts: string[] = ['PatientLink'];
    return parts.join(', ');
  }
}
