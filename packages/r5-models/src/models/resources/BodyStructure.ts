import { DomainResource } from '../base/DomainResource.js';
import type {
  IAttachment,
  IBodyStructure,
  IBodyStructureIncludedStructure,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to BodyStructure */
const BODY_STRUCTURE_PROPERTIES = [
  'identifier',
  'active',
  '_active',
  'morphology',
  'includedStructure',
  'excludedStructure',
  'description',
  '_description',
  'image',
  'patient',
] as const;

/**
 * BodyStructure - Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.
 *
 * @see https://hl7.org/fhir/R4/bodystructure.html
 *
 * @example
 * const bodyStructure = new BodyStructure({
 *   resourceType: 'BodyStructure',
 *   // ... properties
 * });
 */
export class BodyStructure extends DomainResource implements IBodyStructure {
  readonly resourceType = 'BodyStructure' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Bodystructure identifier */
  identifier?: IIdentifier[];

  /** Whether this record is in active use */
  active?: boolean;

  /** Extension for active */
  _active?: IElement;

  /** Kind of Structure */
  morphology?: ICodeableConcept;

  /** Included anatomic location(s) */
  includedStructure: IBodyStructureIncludedStructure[];

  /** Excluded anatomic locations(s) */
  excludedStructure?: IBodyStructureIncludedStructure[];

  /** Text description */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Attached images */
  image?: IAttachment[];

  /** Who this is about */
  patient: IReference<'Patient'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IBodyStructure>) {
    super(data);
    if (data) {
      this.assignProps(data, BODY_STRUCTURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create BodyStructure from a JSON object
   */
  static fromJSON(json: IBodyStructure): BodyStructure {
    return new BodyStructure(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new BodyStructure with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IBodyStructure>): BodyStructure {
    return new BodyStructure({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new BodyStructure by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IBodyStructure) => Partial<IBodyStructure>): BodyStructure {
    const currentData = this.toJSON();
    return new BodyStructure({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IBodyStructure)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IBodyStructure {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, BODY_STRUCTURE_PROPERTIES);
    return result as IBodyStructure;
  }

  /**
   * Create a deep clone of this BodyStructure
   */
  clone(): BodyStructure {
    return new BodyStructure(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the BodyStructure
   */
  toString(): string {
    const parts: string[] = ['BodyStructure'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
