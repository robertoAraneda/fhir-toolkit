import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IQuantity,
  ISpecimenDefinitionTypeTestedContainer,
  ISpecimenDefinitionTypeTestedContainerAdditive,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to SpecimenDefinitionTypeTestedContainer */
const SPECIMEN_DEFINITION_TYPE_TESTED_CONTAINER_PROPERTIES = [
  'material',
  'type',
  'cap',
  'description',
  '_description',
  'capacity',
  'minimumVolumeQuantity',
  'minimumVolumeString',
  '_minimumVolumeString',
  'additive',
  'preparation',
  '_preparation',
] as const;

/**
 * SpecimenDefinitionTypeTestedContainer - The specimen's container
 *
 * @see https://hl7.org/fhir/R4B/specimendefinitiontypetestedcontainer.html
 *
 * @example
 * const specimenDefinitionTypeTestedContainer = new SpecimenDefinitionTypeTestedContainer({
 *   // ... properties
 * });
 */
export class SpecimenDefinitionTypeTestedContainer extends BackboneElement implements ISpecimenDefinitionTypeTestedContainer {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Container material */
  material?: ICodeableConcept;

  /** Kind of container associated with the kind of specimen */
  type?: ICodeableConcept;

  /** Color of container cap */
  cap?: ICodeableConcept;

  /** Container description */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Container capacity */
  capacity?: IQuantity;

  /** Minimum volume */
  minimumVolumeQuantity?: IQuantity;

  /** Minimum volume */
  minimumVolumeString?: string;

  /** Extension for minimumVolumeString */
  _minimumVolumeString?: IElement;

  /** Additive associated with container */
  additive?: ISpecimenDefinitionTypeTestedContainerAdditive[];

  /** Specimen container preparation */
  preparation?: string;

  /** Extension for preparation */
  _preparation?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISpecimenDefinitionTypeTestedContainer>) {
    super(data);
    if (data) {
      this.assignProps(data, SPECIMEN_DEFINITION_TYPE_TESTED_CONTAINER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SpecimenDefinitionTypeTestedContainer from a JSON object
   */
  static fromJSON(json: ISpecimenDefinitionTypeTestedContainer): SpecimenDefinitionTypeTestedContainer {
    return new SpecimenDefinitionTypeTestedContainer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SpecimenDefinitionTypeTestedContainer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISpecimenDefinitionTypeTestedContainer>): SpecimenDefinitionTypeTestedContainer {
    return new SpecimenDefinitionTypeTestedContainer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SpecimenDefinitionTypeTestedContainer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISpecimenDefinitionTypeTestedContainer) => Partial<ISpecimenDefinitionTypeTestedContainer>): SpecimenDefinitionTypeTestedContainer {
    const currentData = this.toJSON();
    return new SpecimenDefinitionTypeTestedContainer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISpecimenDefinitionTypeTestedContainer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISpecimenDefinitionTypeTestedContainer {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SPECIMEN_DEFINITION_TYPE_TESTED_CONTAINER_PROPERTIES);
    return result as ISpecimenDefinitionTypeTestedContainer;
  }

  /**
   * Create a deep clone of this SpecimenDefinitionTypeTestedContainer
   */
  clone(): SpecimenDefinitionTypeTestedContainer {
    return new SpecimenDefinitionTypeTestedContainer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SpecimenDefinitionTypeTestedContainer
   */
  toString(): string {
    const parts: string[] = ['SpecimenDefinitionTypeTestedContainer'];
    return parts.join(', ');
  }
}
