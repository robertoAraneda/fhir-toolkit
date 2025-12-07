import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ConceptMapGroupUnmappedModeType,
  IConceptMapGroupUnmapped,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ConceptMapGroupUnmapped */
const CONCEPT_MAP_GROUP_UNMAPPED_PROPERTIES = [
  'mode',
  '_mode',
  'code',
  '_code',
  'display',
  '_display',
  'url',
  '_url',
] as const;

/**
 * ConceptMapGroupUnmapped - What to do when there is no mapping for the source concept
 *
 * @see https://hl7.org/fhir/R4/conceptmapgroupunmapped.html
 *
 * @example
 * const conceptMapGroupUnmapped = new ConceptMapGroupUnmapped({
 *   // ... properties
 * });
 */
export class ConceptMapGroupUnmapped extends BackboneElement implements IConceptMapGroupUnmapped {

  // ============================================================================
  // Properties
  // ============================================================================

  /** provided | fixed | other-map */
  mode: ConceptMapGroupUnmappedModeType;

  /** Extension for mode */
  _mode?: IElement;

  /** Fixed code when mode = fixed */
  code?: string;

  /** Extension for code */
  _code?: IElement;

  /** Display for the code */
  display?: string;

  /** Extension for display */
  _display?: IElement;

  /** canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped */
  url?: string;

  /** Extension for url */
  _url?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConceptMapGroupUnmapped>) {
    super(data);
    if (data) {
      this.assignProps(data, CONCEPT_MAP_GROUP_UNMAPPED_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConceptMapGroupUnmapped from a JSON object
   */
  static fromJSON(json: IConceptMapGroupUnmapped): ConceptMapGroupUnmapped {
    return new ConceptMapGroupUnmapped(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConceptMapGroupUnmapped with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConceptMapGroupUnmapped>): ConceptMapGroupUnmapped {
    return new ConceptMapGroupUnmapped({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConceptMapGroupUnmapped by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConceptMapGroupUnmapped) => Partial<IConceptMapGroupUnmapped>): ConceptMapGroupUnmapped {
    const currentData = this.toJSON();
    return new ConceptMapGroupUnmapped({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConceptMapGroupUnmapped)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConceptMapGroupUnmapped {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONCEPT_MAP_GROUP_UNMAPPED_PROPERTIES);
    return result as IConceptMapGroupUnmapped;
  }

  /**
   * Create a deep clone of this ConceptMapGroupUnmapped
   */
  clone(): ConceptMapGroupUnmapped {
    return new ConceptMapGroupUnmapped(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConceptMapGroupUnmapped
   */
  toString(): string {
    const parts: string[] = ['ConceptMapGroupUnmapped'];
    return parts.join(', ');
  }
}
