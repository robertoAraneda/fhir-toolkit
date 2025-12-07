import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IImmunizationEducation,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ImmunizationEducation */
const IMMUNIZATION_EDUCATION_PROPERTIES = [
  'documentType',
  '_documentType',
  'reference',
  '_reference',
  'publicationDate',
  '_publicationDate',
  'presentationDate',
  '_presentationDate',
] as const;

/**
 * ImmunizationEducation - Educational material presented to patient
 *
 * @see https://hl7.org/fhir/R4/immunizationeducation.html
 *
 * @example
 * const immunizationEducation = new ImmunizationEducation({
 *   // ... properties
 * });
 */
export class ImmunizationEducation extends BackboneElement implements IImmunizationEducation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Educational material document identifier */
  documentType?: string;

  /** Extension for documentType */
  _documentType?: IElement;

  /** Educational material reference pointer */
  reference?: string;

  /** Extension for reference */
  _reference?: IElement;

  /** Educational material publication date */
  publicationDate?: string;

  /** Extension for publicationDate */
  _publicationDate?: IElement;

  /** Educational material presentation date */
  presentationDate?: string;

  /** Extension for presentationDate */
  _presentationDate?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImmunizationEducation>) {
    super(data);
    if (data) {
      this.assignProps(data, IMMUNIZATION_EDUCATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImmunizationEducation from a JSON object
   */
  static fromJSON(json: IImmunizationEducation): ImmunizationEducation {
    return new ImmunizationEducation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImmunizationEducation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImmunizationEducation>): ImmunizationEducation {
    return new ImmunizationEducation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImmunizationEducation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImmunizationEducation) => Partial<IImmunizationEducation>): ImmunizationEducation {
    const currentData = this.toJSON();
    return new ImmunizationEducation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImmunizationEducation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImmunizationEducation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMMUNIZATION_EDUCATION_PROPERTIES);
    return result as IImmunizationEducation;
  }

  /**
   * Create a deep clone of this ImmunizationEducation
   */
  clone(): ImmunizationEducation {
    return new ImmunizationEducation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImmunizationEducation
   */
  toString(): string {
    const parts: string[] = ['ImmunizationEducation'];
    return parts.join(', ');
  }
}
