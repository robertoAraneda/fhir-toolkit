import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IQuantity,
  IReference,
  ISpecimenContainer,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SpecimenContainer */
const SPECIMEN_CONTAINER_PROPERTIES = [
  'identifier',
  'description',
  '_description',
  'type',
  'capacity',
  'specimenQuantity',
  'additiveCodeableConcept',
  'additiveReference',
] as const;

/**
 * SpecimenContainer - Direct container of specimen (tube/slide, etc.)
 *
 * @see https://hl7.org/fhir/R4/specimencontainer.html
 *
 * @example
 * const specimenContainer = new SpecimenContainer({
 *   // ... properties
 * });
 */
export class SpecimenContainer extends BackboneElement implements ISpecimenContainer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Id for the container */
  identifier?: IIdentifier[];

  /** Textual description of the container */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Kind of container directly associated with specimen */
  type?: ICodeableConcept;

  /** Container volume or size */
  capacity?: IQuantity;

  /** Quantity of specimen within container */
  specimenQuantity?: IQuantity;

  /** Additive associated with container */
  additiveCodeableConcept?: ICodeableConcept;

  /** Additive associated with container */
  additiveReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISpecimenContainer>) {
    super(data);
    if (data) {
      this.assignProps(data, SPECIMEN_CONTAINER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SpecimenContainer from a JSON object
   */
  static fromJSON(json: ISpecimenContainer): SpecimenContainer {
    return new SpecimenContainer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SpecimenContainer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISpecimenContainer>): SpecimenContainer {
    return new SpecimenContainer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SpecimenContainer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISpecimenContainer) => Partial<ISpecimenContainer>): SpecimenContainer {
    const currentData = this.toJSON();
    return new SpecimenContainer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISpecimenContainer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISpecimenContainer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SPECIMEN_CONTAINER_PROPERTIES);
    return result as ISpecimenContainer;
  }

  /**
   * Create a deep clone of this SpecimenContainer
   */
  clone(): SpecimenContainer {
    return new SpecimenContainer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SpecimenContainer
   */
  toString(): string {
    const parts: string[] = ['SpecimenContainer'];
    return parts.join(', ');
  }
}
