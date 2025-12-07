import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICodeableConcept,
  IElement,
  ISubstancePolymerRepeatRepeatUnitStructuralRepresentation,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstancePolymerRepeatRepeatUnitStructuralRepresentation */
const SUBSTANCE_POLYMER_REPEAT_REPEAT_UNIT_STRUCTURAL_REPRESENTATION_PROPERTIES = [
  'type',
  'representation',
  '_representation',
  'attachment',
] as const;

/**
 * SubstancePolymerRepeatRepeatUnitStructuralRepresentation - Todo
 *
 * @see https://hl7.org/fhir/R4/substancepolymerrepeatrepeatunitstructuralrepresentation.html
 *
 * @example
 * const substancePolymerRepeatRepeatUnitStructuralRepresentation = new SubstancePolymerRepeatRepeatUnitStructuralRepresentation({
 *   // ... properties
 * });
 */
export class SubstancePolymerRepeatRepeatUnitStructuralRepresentation extends BackboneElement implements ISubstancePolymerRepeatRepeatUnitStructuralRepresentation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Todo */
  type?: ICodeableConcept;

  /** Todo */
  representation?: string;

  /** Extension for representation */
  _representation?: IElement;

  /** Todo */
  attachment?: IAttachment;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstancePolymerRepeatRepeatUnitStructuralRepresentation>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_POLYMER_REPEAT_REPEAT_UNIT_STRUCTURAL_REPRESENTATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstancePolymerRepeatRepeatUnitStructuralRepresentation from a JSON object
   */
  static fromJSON(json: ISubstancePolymerRepeatRepeatUnitStructuralRepresentation): SubstancePolymerRepeatRepeatUnitStructuralRepresentation {
    return new SubstancePolymerRepeatRepeatUnitStructuralRepresentation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstancePolymerRepeatRepeatUnitStructuralRepresentation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstancePolymerRepeatRepeatUnitStructuralRepresentation>): SubstancePolymerRepeatRepeatUnitStructuralRepresentation {
    return new SubstancePolymerRepeatRepeatUnitStructuralRepresentation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstancePolymerRepeatRepeatUnitStructuralRepresentation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstancePolymerRepeatRepeatUnitStructuralRepresentation) => Partial<ISubstancePolymerRepeatRepeatUnitStructuralRepresentation>): SubstancePolymerRepeatRepeatUnitStructuralRepresentation {
    const currentData = this.toJSON();
    return new SubstancePolymerRepeatRepeatUnitStructuralRepresentation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstancePolymerRepeatRepeatUnitStructuralRepresentation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstancePolymerRepeatRepeatUnitStructuralRepresentation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_POLYMER_REPEAT_REPEAT_UNIT_STRUCTURAL_REPRESENTATION_PROPERTIES);
    return result as ISubstancePolymerRepeatRepeatUnitStructuralRepresentation;
  }

  /**
   * Create a deep clone of this SubstancePolymerRepeatRepeatUnitStructuralRepresentation
   */
  clone(): SubstancePolymerRepeatRepeatUnitStructuralRepresentation {
    return new SubstancePolymerRepeatRepeatUnitStructuralRepresentation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstancePolymerRepeatRepeatUnitStructuralRepresentation
   */
  toString(): string {
    const parts: string[] = ['SubstancePolymerRepeatRepeatUnitStructuralRepresentation'];
    return parts.join(', ');
  }
}
