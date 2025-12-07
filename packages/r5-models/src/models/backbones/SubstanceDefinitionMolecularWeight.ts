import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IQuantity,
  ISubstanceDefinitionMolecularWeight,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstanceDefinitionMolecularWeight */
const SUBSTANCE_DEFINITION_MOLECULAR_WEIGHT_PROPERTIES = [
  'method',
  'type',
  'amount',
] as const;

/**
 * SubstanceDefinitionMolecularWeight - The average mass of a molecule of a compound
 *
 * @see https://hl7.org/fhir/R4/substancedefinitionmolecularweight.html
 *
 * @example
 * const substanceDefinitionMolecularWeight = new SubstanceDefinitionMolecularWeight({
 *   // ... properties
 * });
 */
export class SubstanceDefinitionMolecularWeight extends BackboneElement implements ISubstanceDefinitionMolecularWeight {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The method by which the weight was determined */
  method?: ICodeableConcept;

  /** Type of molecular weight e.g. exact, average, weight average */
  type?: ICodeableConcept;

  /** Used to capture quantitative values for a variety of elements */
  amount: IQuantity;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceDefinitionMolecularWeight>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_DEFINITION_MOLECULAR_WEIGHT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceDefinitionMolecularWeight from a JSON object
   */
  static fromJSON(json: ISubstanceDefinitionMolecularWeight): SubstanceDefinitionMolecularWeight {
    return new SubstanceDefinitionMolecularWeight(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceDefinitionMolecularWeight with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceDefinitionMolecularWeight>): SubstanceDefinitionMolecularWeight {
    return new SubstanceDefinitionMolecularWeight({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceDefinitionMolecularWeight by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceDefinitionMolecularWeight) => Partial<ISubstanceDefinitionMolecularWeight>): SubstanceDefinitionMolecularWeight {
    const currentData = this.toJSON();
    return new SubstanceDefinitionMolecularWeight({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceDefinitionMolecularWeight)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceDefinitionMolecularWeight {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_DEFINITION_MOLECULAR_WEIGHT_PROPERTIES);
    return result as ISubstanceDefinitionMolecularWeight;
  }

  /**
   * Create a deep clone of this SubstanceDefinitionMolecularWeight
   */
  clone(): SubstanceDefinitionMolecularWeight {
    return new SubstanceDefinitionMolecularWeight(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceDefinitionMolecularWeight
   */
  toString(): string {
    const parts: string[] = ['SubstanceDefinitionMolecularWeight'];
    return parts.join(', ');
  }
}
