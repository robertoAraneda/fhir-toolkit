import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IConceptMapGroupElement,
  IConceptMapGroupElementTarget,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConceptMapGroupElement */
const CONCEPT_MAP_GROUP_ELEMENT_PROPERTIES = [
  'code',
  '_code',
  'display',
  '_display',
  'valueSet',
  '_valueSet',
  'noMap',
  '_noMap',
  'target',
] as const;

/**
 * ConceptMapGroupElement - Mappings for a concept from the source set
 *
 * @see https://hl7.org/fhir/R5/conceptmapgroupelement.html
 *
 * @example
 * const conceptMapGroupElement = new ConceptMapGroupElement({
 *   // ... properties
 * });
 */
export class ConceptMapGroupElement extends BackboneElement implements IConceptMapGroupElement {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identifies element being mapped */
  code?: string;

  /** Extension for code */
  _code?: IElement;

  /** Display for the code */
  display?: string;

  /** Extension for display */
  _display?: IElement;

  /** Identifies the set of concepts being mapped */
  valueSet?: string;

  /** Extension for valueSet */
  _valueSet?: IElement;

  /** No mapping to a target concept for this source concept */
  noMap?: boolean;

  /** Extension for noMap */
  _noMap?: IElement;

  /** Concept in target system for element */
  target?: IConceptMapGroupElementTarget[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConceptMapGroupElement>) {
    super(data);
    if (data) {
      this.assignProps(data, CONCEPT_MAP_GROUP_ELEMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConceptMapGroupElement from a JSON object
   */
  static fromJSON(json: IConceptMapGroupElement): ConceptMapGroupElement {
    return new ConceptMapGroupElement(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConceptMapGroupElement with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConceptMapGroupElement>): ConceptMapGroupElement {
    return new ConceptMapGroupElement({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConceptMapGroupElement by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConceptMapGroupElement) => Partial<IConceptMapGroupElement>): ConceptMapGroupElement {
    const currentData = this.toJSON();
    return new ConceptMapGroupElement({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConceptMapGroupElement)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConceptMapGroupElement {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONCEPT_MAP_GROUP_ELEMENT_PROPERTIES);
    return result as IConceptMapGroupElement;
  }

  /**
   * Create a deep clone of this ConceptMapGroupElement
   */
  clone(): ConceptMapGroupElement {
    return new ConceptMapGroupElement(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConceptMapGroupElement
   */
  toString(): string {
    const parts: string[] = ['ConceptMapGroupElement'];
    return parts.join(', ');
  }
}
