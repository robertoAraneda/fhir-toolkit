import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  ISubstancePolymerRepeatRepeatUnit,
  ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation,
  ISubstancePolymerRepeatRepeatUnitStructuralRepresentation,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstancePolymerRepeatRepeatUnit */
const SUBSTANCE_POLYMER_REPEAT_REPEAT_UNIT_PROPERTIES = [
  'unit',
  '_unit',
  'orientation',
  'amount',
  '_amount',
  'degreeOfPolymerisation',
  'structuralRepresentation',
] as const;

/**
 * SubstancePolymerRepeatRepeatUnit - An SRU - Structural Repeat Unit
 *
 * @see https://hl7.org/fhir/R4/substancepolymerrepeatrepeatunit.html
 *
 * @example
 * const substancePolymerRepeatRepeatUnit = new SubstancePolymerRepeatRepeatUnit({
 *   // ... properties
 * });
 */
export class SubstancePolymerRepeatRepeatUnit extends BackboneElement implements ISubstancePolymerRepeatRepeatUnit {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Structural repeat units are essential elements for defining polymers */
  unit?: string;

  /** Extension for unit */
  _unit?: IElement;

  /** The orientation of the polymerisation, e.g. head-tail, head-head, random */
  orientation?: ICodeableConcept;

  /** Number of repeats of this unit */
  amount?: number;

  /** Extension for amount */
  _amount?: IElement;

  /** Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described */
  degreeOfPolymerisation?: ISubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[];

  /** A graphical structure for this SRU */
  structuralRepresentation?: ISubstancePolymerRepeatRepeatUnitStructuralRepresentation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstancePolymerRepeatRepeatUnit>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_POLYMER_REPEAT_REPEAT_UNIT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstancePolymerRepeatRepeatUnit from a JSON object
   */
  static fromJSON(json: ISubstancePolymerRepeatRepeatUnit): SubstancePolymerRepeatRepeatUnit {
    return new SubstancePolymerRepeatRepeatUnit(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstancePolymerRepeatRepeatUnit with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstancePolymerRepeatRepeatUnit>): SubstancePolymerRepeatRepeatUnit {
    return new SubstancePolymerRepeatRepeatUnit({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstancePolymerRepeatRepeatUnit by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstancePolymerRepeatRepeatUnit) => Partial<ISubstancePolymerRepeatRepeatUnit>): SubstancePolymerRepeatRepeatUnit {
    const currentData = this.toJSON();
    return new SubstancePolymerRepeatRepeatUnit({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstancePolymerRepeatRepeatUnit)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstancePolymerRepeatRepeatUnit {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_POLYMER_REPEAT_REPEAT_UNIT_PROPERTIES);
    return result as ISubstancePolymerRepeatRepeatUnit;
  }

  /**
   * Create a deep clone of this SubstancePolymerRepeatRepeatUnit
   */
  clone(): SubstancePolymerRepeatRepeatUnit {
    return new SubstancePolymerRepeatRepeatUnit(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstancePolymerRepeatRepeatUnit
   */
  toString(): string {
    const parts: string[] = ['SubstancePolymerRepeatRepeatUnit'];
    return parts.join(', ');
  }
}
