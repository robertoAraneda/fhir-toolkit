import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IReference,
  ISubstanceDefinitionStructureRepresentation,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstanceDefinitionStructureRepresentation */
const SUBSTANCE_DEFINITION_STRUCTURE_REPRESENTATION_PROPERTIES = [
  'type',
  'representation',
  '_representation',
  'format',
  'document',
] as const;

/**
 * SubstanceDefinitionStructureRepresentation - A depiction of the structure of the substance
 *
 * @see https://hl7.org/fhir/R5/substancedefinitionstructurerepresentation.html
 *
 * @example
 * const substanceDefinitionStructureRepresentation = new SubstanceDefinitionStructureRepresentation({
 *   // ... properties
 * });
 */
export class SubstanceDefinitionStructureRepresentation extends BackboneElement implements ISubstanceDefinitionStructureRepresentation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The kind of structural representation (e.g. full, partial) */
  type?: ICodeableConcept;

  /** The structural representation as a text string in a standard format */
  representation?: string;

  /** Extension for representation */
  _representation?: IElement;

  /** The format of the representation e.g. InChI, SMILES, MOLFILE (note: not the physical file format) */
  format?: ICodeableConcept;

  /** An attachment with the structural representation e.g. a structure graphic or AnIML file */
  document?: IReference<'DocumentReference'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceDefinitionStructureRepresentation>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_DEFINITION_STRUCTURE_REPRESENTATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceDefinitionStructureRepresentation from a JSON object
   */
  static fromJSON(json: ISubstanceDefinitionStructureRepresentation): SubstanceDefinitionStructureRepresentation {
    return new SubstanceDefinitionStructureRepresentation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceDefinitionStructureRepresentation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceDefinitionStructureRepresentation>): SubstanceDefinitionStructureRepresentation {
    return new SubstanceDefinitionStructureRepresentation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceDefinitionStructureRepresentation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceDefinitionStructureRepresentation) => Partial<ISubstanceDefinitionStructureRepresentation>): SubstanceDefinitionStructureRepresentation {
    const currentData = this.toJSON();
    return new SubstanceDefinitionStructureRepresentation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceDefinitionStructureRepresentation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceDefinitionStructureRepresentation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_DEFINITION_STRUCTURE_REPRESENTATION_PROPERTIES);
    return result as ISubstanceDefinitionStructureRepresentation;
  }

  /**
   * Create a deep clone of this SubstanceDefinitionStructureRepresentation
   */
  clone(): SubstanceDefinitionStructureRepresentation {
    return new SubstanceDefinitionStructureRepresentation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceDefinitionStructureRepresentation
   */
  toString(): string {
    const parts: string[] = ['SubstanceDefinitionStructureRepresentation'];
    return parts.join(', ');
  }
}
