import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAttachment,
  ICodeableConcept,
  IElement,
  ISubstanceSpecificationStructureRepresentation,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceSpecificationStructureRepresentation */
const SUBSTANCE_SPECIFICATION_STRUCTURE_REPRESENTATION_PROPERTIES = [
  'type',
  'representation',
  '_representation',
  'attachment',
] as const;

/**
 * SubstanceSpecificationStructureRepresentation - Molecular structural representation
 *
 * @see https://hl7.org/fhir/R4/substancespecificationstructurerepresentation.html
 *
 * @example
 * const substanceSpecificationStructureRepresentation = new SubstanceSpecificationStructureRepresentation({
 *   // ... properties
 * });
 */
export class SubstanceSpecificationStructureRepresentation extends BackboneElement implements ISubstanceSpecificationStructureRepresentation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The type of structure (e.g. Full, Partial, Representative) */
  type?: ICodeableConcept;

  /** The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX */
  representation?: string;

  /** Extension for representation */
  _representation?: IElement;

  /** An attached file with the structural representation */
  attachment?: IAttachment;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSpecificationStructureRepresentation>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SPECIFICATION_STRUCTURE_REPRESENTATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSpecificationStructureRepresentation from a JSON object
   */
  static fromJSON(json: ISubstanceSpecificationStructureRepresentation): SubstanceSpecificationStructureRepresentation {
    return new SubstanceSpecificationStructureRepresentation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSpecificationStructureRepresentation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSpecificationStructureRepresentation>): SubstanceSpecificationStructureRepresentation {
    return new SubstanceSpecificationStructureRepresentation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSpecificationStructureRepresentation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSpecificationStructureRepresentation) => Partial<ISubstanceSpecificationStructureRepresentation>): SubstanceSpecificationStructureRepresentation {
    const currentData = this.toJSON();
    return new SubstanceSpecificationStructureRepresentation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSpecificationStructureRepresentation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSpecificationStructureRepresentation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_SPECIFICATION_STRUCTURE_REPRESENTATION_PROPERTIES);
    return result as ISubstanceSpecificationStructureRepresentation;
  }

  /**
   * Create a deep clone of this SubstanceSpecificationStructureRepresentation
   */
  clone(): SubstanceSpecificationStructureRepresentation {
    return new SubstanceSpecificationStructureRepresentation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSpecificationStructureRepresentation
   */
  toString(): string {
    const parts: string[] = ['SubstanceSpecificationStructureRepresentation'];
    return parts.join(', ');
  }
}
