import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IPersonLink,
  IReference,
  IdentityAssuranceLevelType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to PersonLink */
const PERSON_LINK_PROPERTIES = [
  'target',
  'assurance',
  '_assurance',
] as const;

/**
 * PersonLink - Link to a resource that concerns the same actual person
 *
 * @see https://hl7.org/fhir/R4/personlink.html
 *
 * @example
 * const personLink = new PersonLink({
 *   // ... properties
 * });
 */
export class PersonLink extends BackboneElement implements IPersonLink {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The resource to which this actual person is associated */
  target: IReference<'Patient' | 'Practitioner' | 'RelatedPerson' | 'Person'>;

  /** level1 | level2 | level3 | level4 */
  assurance?: IdentityAssuranceLevelType;

  /** Extension for assurance */
  _assurance?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IPersonLink>) {
    super(data);
    if (data) {
      this.assignProps(data, PERSON_LINK_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create PersonLink from a JSON object
   */
  static fromJSON(json: IPersonLink): PersonLink {
    return new PersonLink(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new PersonLink with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IPersonLink>): PersonLink {
    return new PersonLink({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new PersonLink by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IPersonLink) => Partial<IPersonLink>): PersonLink {
    const currentData = this.toJSON();
    return new PersonLink({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IPersonLink)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IPersonLink {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, PERSON_LINK_PROPERTIES);
    return result as IPersonLink;
  }

  /**
   * Create a deep clone of this PersonLink
   */
  clone(): PersonLink {
    return new PersonLink(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the PersonLink
   */
  toString(): string {
    const parts: string[] = ['PersonLink'];
    return parts.join(', ');
  }
}
