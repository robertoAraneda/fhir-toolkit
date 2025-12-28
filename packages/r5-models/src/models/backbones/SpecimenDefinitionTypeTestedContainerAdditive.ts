import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IReference,
  ISpecimenDefinitionTypeTestedContainerAdditive,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SpecimenDefinitionTypeTestedContainerAdditive */
const SPECIMEN_DEFINITION_TYPE_TESTED_CONTAINER_ADDITIVE_PROPERTIES = [
  'additiveCodeableConcept',
  'additiveReference',
] as const;

/**
 * SpecimenDefinitionTypeTestedContainerAdditive - Additive associated with container
 *
 * @see https://hl7.org/fhir/R5/specimendefinitiontypetestedcontaineradditive.html
 *
 * @example
 * const specimenDefinitionTypeTestedContainerAdditive = new SpecimenDefinitionTypeTestedContainerAdditive({
 *   // ... properties
 * });
 */
export class SpecimenDefinitionTypeTestedContainerAdditive extends BackboneElement implements ISpecimenDefinitionTypeTestedContainerAdditive {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Additive associated with container */
  additiveCodeableConcept?: ICodeableConcept;

  /** Additive associated with container */
  additiveReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISpecimenDefinitionTypeTestedContainerAdditive>) {
    super(data);
    if (data) {
      this.assignProps(data, SPECIMEN_DEFINITION_TYPE_TESTED_CONTAINER_ADDITIVE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SpecimenDefinitionTypeTestedContainerAdditive from a JSON object
   */
  static fromJSON(json: ISpecimenDefinitionTypeTestedContainerAdditive): SpecimenDefinitionTypeTestedContainerAdditive {
    return new SpecimenDefinitionTypeTestedContainerAdditive(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SpecimenDefinitionTypeTestedContainerAdditive with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISpecimenDefinitionTypeTestedContainerAdditive>): SpecimenDefinitionTypeTestedContainerAdditive {
    return new SpecimenDefinitionTypeTestedContainerAdditive({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SpecimenDefinitionTypeTestedContainerAdditive by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISpecimenDefinitionTypeTestedContainerAdditive) => Partial<ISpecimenDefinitionTypeTestedContainerAdditive>): SpecimenDefinitionTypeTestedContainerAdditive {
    const currentData = this.toJSON();
    return new SpecimenDefinitionTypeTestedContainerAdditive({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISpecimenDefinitionTypeTestedContainerAdditive)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISpecimenDefinitionTypeTestedContainerAdditive {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SPECIMEN_DEFINITION_TYPE_TESTED_CONTAINER_ADDITIVE_PROPERTIES);
    return result as ISpecimenDefinitionTypeTestedContainerAdditive;
  }

  /**
   * Create a deep clone of this SpecimenDefinitionTypeTestedContainerAdditive
   */
  clone(): SpecimenDefinitionTypeTestedContainerAdditive {
    return new SpecimenDefinitionTypeTestedContainerAdditive(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SpecimenDefinitionTypeTestedContainerAdditive
   */
  toString(): string {
    const parts: string[] = ['SpecimenDefinitionTypeTestedContainerAdditive'];
    return parts.join(', ');
  }
}
