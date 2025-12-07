import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IConceptMapGroupElementTargetDependsOn,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to ConceptMapGroupElementTargetDependsOn */
const CONCEPT_MAP_GROUP_ELEMENT_TARGET_DEPENDS_ON_PROPERTIES = [
  'property',
  '_property',
  'system',
  '_system',
  'value',
  '_value',
  'display',
  '_display',
] as const;

/**
 * ConceptMapGroupElementTargetDependsOn - Other elements required for this mapping (from context)
 *
 * @see https://hl7.org/fhir/R4/conceptmapgroupelementtargetdependson.html
 *
 * @example
 * const conceptMapGroupElementTargetDependsOn = new ConceptMapGroupElementTargetDependsOn({
 *   // ... properties
 * });
 */
export class ConceptMapGroupElementTargetDependsOn extends BackboneElement implements IConceptMapGroupElementTargetDependsOn {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Reference to property mapping depends on */
  property: string;

  /** Extension for property */
  _property?: IElement;

  /** Code System (if necessary) */
  system?: string;

  /** Extension for system */
  _system?: IElement;

  /** Value of the referenced element */
  value: string;

  /** Extension for value */
  _value?: IElement;

  /** Display for the code (if value is a code) */
  display?: string;

  /** Extension for display */
  _display?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IConceptMapGroupElementTargetDependsOn>) {
    super(data);
    if (data) {
      this.assignProps(data, CONCEPT_MAP_GROUP_ELEMENT_TARGET_DEPENDS_ON_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ConceptMapGroupElementTargetDependsOn from a JSON object
   */
  static fromJSON(json: IConceptMapGroupElementTargetDependsOn): ConceptMapGroupElementTargetDependsOn {
    return new ConceptMapGroupElementTargetDependsOn(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ConceptMapGroupElementTargetDependsOn with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IConceptMapGroupElementTargetDependsOn>): ConceptMapGroupElementTargetDependsOn {
    return new ConceptMapGroupElementTargetDependsOn({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ConceptMapGroupElementTargetDependsOn by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IConceptMapGroupElementTargetDependsOn) => Partial<IConceptMapGroupElementTargetDependsOn>): ConceptMapGroupElementTargetDependsOn {
    const currentData = this.toJSON();
    return new ConceptMapGroupElementTargetDependsOn({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IConceptMapGroupElementTargetDependsOn)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IConceptMapGroupElementTargetDependsOn {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CONCEPT_MAP_GROUP_ELEMENT_TARGET_DEPENDS_ON_PROPERTIES);
    return result as IConceptMapGroupElementTargetDependsOn;
  }

  /**
   * Create a deep clone of this ConceptMapGroupElementTargetDependsOn
   */
  clone(): ConceptMapGroupElementTargetDependsOn {
    return new ConceptMapGroupElementTargetDependsOn(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ConceptMapGroupElementTargetDependsOn
   */
  toString(): string {
    const parts: string[] = ['ConceptMapGroupElementTargetDependsOn'];
    return parts.join(', ');
  }
}
