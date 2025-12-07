import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ISubstancePolymerMonomerSet,
  ISubstancePolymerMonomerSetStartingMaterial,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstancePolymerMonomerSet */
const SUBSTANCE_POLYMER_MONOMER_SET_PROPERTIES = [
  'ratioType',
  'startingMaterial',
] as const;

/**
 * SubstancePolymerMonomerSet - Todo
 *
 * @see https://hl7.org/fhir/R4/substancepolymermonomerset.html
 *
 * @example
 * const substancePolymerMonomerSet = new SubstancePolymerMonomerSet({
 *   // ... properties
 * });
 */
export class SubstancePolymerMonomerSet extends BackboneElement implements ISubstancePolymerMonomerSet {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Captures the type of ratio to the entire polymer, e.g. Monomer/Polymer ratio, SRU/Polymer Ratio */
  ratioType?: ICodeableConcept;

  /** The starting materials - monomer(s) used in the synthesis of the polymer */
  startingMaterial?: ISubstancePolymerMonomerSetStartingMaterial[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstancePolymerMonomerSet>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_POLYMER_MONOMER_SET_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstancePolymerMonomerSet from a JSON object
   */
  static fromJSON(json: ISubstancePolymerMonomerSet): SubstancePolymerMonomerSet {
    return new SubstancePolymerMonomerSet(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstancePolymerMonomerSet with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstancePolymerMonomerSet>): SubstancePolymerMonomerSet {
    return new SubstancePolymerMonomerSet({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstancePolymerMonomerSet by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstancePolymerMonomerSet) => Partial<ISubstancePolymerMonomerSet>): SubstancePolymerMonomerSet {
    const currentData = this.toJSON();
    return new SubstancePolymerMonomerSet({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstancePolymerMonomerSet)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstancePolymerMonomerSet {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_POLYMER_MONOMER_SET_PROPERTIES);
    return result as ISubstancePolymerMonomerSet;
  }

  /**
   * Create a deep clone of this SubstancePolymerMonomerSet
   */
  clone(): SubstancePolymerMonomerSet {
    return new SubstancePolymerMonomerSet(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstancePolymerMonomerSet
   */
  toString(): string {
    const parts: string[] = ['SubstancePolymerMonomerSet'];
    return parts.join(', ');
  }
}
