import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IConceptMapGroup,
  IConceptMapGroupElement,
  IConceptMapGroupUnmapped,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConceptMapGroup */
const CONCEPT_MAP_GROUP_PROPERTIES = [
  'source',
  '_source',
  'target',
  '_target',
  'element',
  'unmapped',
] as const;

/**
 * ConceptMapGroup - Same source and target systems
 *
 * @see https://hl7.org/fhir/R4/conceptmapgroup.html
 *
 * @example
 * const conceptMapGroup = new ConceptMapGroup({
 *   // ... properties
 * });
 */
export class ConceptMapGroup extends BackboneElement implements IConceptMapGroup {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Source system where concepts to be mapped are defined */
  source?: string;

  /** Extension for source */
  _source?: IElement;

  /** Target system that the concepts are to be mapped to */
  target?: string;

  /** Extension for target */
  _target?: IElement;

  /** Mappings for a concept from the source set */
  element: IConceptMapGroupElement[];

  /** What to do when there is no mapping target for the source concept and ConceptMap.group.element.noMap is not true */
  unmapped?: IConceptMapGroupUnmapped;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConceptMapGroup>) {
    super(data);
    if (data) {
      this.assignProps(data, CONCEPT_MAP_GROUP_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConceptMapGroup from a JSON object
   */
  static fromJSON(json: IConceptMapGroup): ConceptMapGroup {
    return new ConceptMapGroup(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConceptMapGroup with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConceptMapGroup>): ConceptMapGroup {
    return new ConceptMapGroup({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConceptMapGroup by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConceptMapGroup) => Partial<IConceptMapGroup>): ConceptMapGroup {
    const currentData = this.toJSON();
    return new ConceptMapGroup({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConceptMapGroup)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConceptMapGroup {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONCEPT_MAP_GROUP_PROPERTIES);
    return result as IConceptMapGroup;
  }

  /**
   * Create a deep clone of this ConceptMapGroup
   */
  clone(): ConceptMapGroup {
    return new ConceptMapGroup(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConceptMapGroup
   */
  toString(): string {
    const parts: string[] = ['ConceptMapGroup'];
    return parts.join(', ');
  }
}
