import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ConceptMapEquivalenceType,
  IConceptMapGroupElementTarget,
  IConceptMapGroupElementTargetDependsOn,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ConceptMapGroupElementTarget */
const CONCEPT_MAP_GROUP_ELEMENT_TARGET_PROPERTIES = [
  'code',
  '_code',
  'display',
  '_display',
  'equivalence',
  '_equivalence',
  'comment',
  '_comment',
  'dependsOn',
  'product',
] as const;

/**
 * ConceptMapGroupElementTarget - Concept in target system for element
 *
 * @see https://hl7.org/fhir/R4/conceptmapgroupelementtarget.html
 *
 * @example
 * const conceptMapGroupElementTarget = new ConceptMapGroupElementTarget({
 *   // ... properties
 * });
 */
export class ConceptMapGroupElementTarget extends BackboneElement implements IConceptMapGroupElementTarget {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Code that identifies the target element */
  code?: string;

  /** Extension for code */
  _code?: IElement;

  /** Display for the code */
  display?: string;

  /** Extension for display */
  _display?: IElement;

  /** relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint */
  equivalence: ConceptMapEquivalenceType;

  /** Extension for equivalence */
  _equivalence?: IElement;

  /** Description of status/issues in mapping */
  comment?: string;

  /** Extension for comment */
  _comment?: IElement;

  /** Other elements required for this mapping (from context) */
  dependsOn?: IConceptMapGroupElementTargetDependsOn[];

  /** Other concepts that this mapping also produces */
  product?: IConceptMapGroupElementTargetDependsOn[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConceptMapGroupElementTarget>) {
    super(data);
    if (data) {
      this.assignProps(data, CONCEPT_MAP_GROUP_ELEMENT_TARGET_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConceptMapGroupElementTarget from a JSON object
   */
  static fromJSON(json: IConceptMapGroupElementTarget): ConceptMapGroupElementTarget {
    return new ConceptMapGroupElementTarget(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConceptMapGroupElementTarget with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConceptMapGroupElementTarget>): ConceptMapGroupElementTarget {
    return new ConceptMapGroupElementTarget({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConceptMapGroupElementTarget by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConceptMapGroupElementTarget) => Partial<IConceptMapGroupElementTarget>): ConceptMapGroupElementTarget {
    const currentData = this.toJSON();
    return new ConceptMapGroupElementTarget({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConceptMapGroupElementTarget)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConceptMapGroupElementTarget {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONCEPT_MAP_GROUP_ELEMENT_TARGET_PROPERTIES);
    return result as IConceptMapGroupElementTarget;
  }

  /**
   * Create a deep clone of this ConceptMapGroupElementTarget
   */
  clone(): ConceptMapGroupElementTarget {
    return new ConceptMapGroupElementTarget(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConceptMapGroupElementTarget
   */
  toString(): string {
    const parts: string[] = ['ConceptMapGroupElementTarget'];
    return parts.join(', ');
  }
}
