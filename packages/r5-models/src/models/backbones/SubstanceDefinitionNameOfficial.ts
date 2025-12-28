import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  ISubstanceDefinitionNameOfficial,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstanceDefinitionNameOfficial */
const SUBSTANCE_DEFINITION_NAME_OFFICIAL_PROPERTIES = [
  'authority',
  'status',
  'date',
  '_date',
] as const;

/**
 * SubstanceDefinitionNameOfficial - Details of the official nature of this name
 *
 * @see https://hl7.org/fhir/R5/substancedefinitionnameofficial.html
 *
 * @example
 * const substanceDefinitionNameOfficial = new SubstanceDefinitionNameOfficial({
 *   // ... properties
 * });
 */
export class SubstanceDefinitionNameOfficial extends BackboneElement implements ISubstanceDefinitionNameOfficial {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Which authority uses this official name */
  authority?: ICodeableConcept;

  /** The status of the official name, for example 'draft', 'active' */
  status?: ICodeableConcept;

  /** Date of official name change */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceDefinitionNameOfficial>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_DEFINITION_NAME_OFFICIAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceDefinitionNameOfficial from a JSON object
   */
  static fromJSON(json: ISubstanceDefinitionNameOfficial): SubstanceDefinitionNameOfficial {
    return new SubstanceDefinitionNameOfficial(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceDefinitionNameOfficial with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceDefinitionNameOfficial>): SubstanceDefinitionNameOfficial {
    return new SubstanceDefinitionNameOfficial({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceDefinitionNameOfficial by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceDefinitionNameOfficial) => Partial<ISubstanceDefinitionNameOfficial>): SubstanceDefinitionNameOfficial {
    const currentData = this.toJSON();
    return new SubstanceDefinitionNameOfficial({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceDefinitionNameOfficial)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceDefinitionNameOfficial {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_DEFINITION_NAME_OFFICIAL_PROPERTIES);
    return result as ISubstanceDefinitionNameOfficial;
  }

  /**
   * Create a deep clone of this SubstanceDefinitionNameOfficial
   */
  clone(): SubstanceDefinitionNameOfficial {
    return new SubstanceDefinitionNameOfficial(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceDefinitionNameOfficial
   */
  toString(): string {
    const parts: string[] = ['SubstanceDefinitionNameOfficial'];
    return parts.join(', ');
  }
}
