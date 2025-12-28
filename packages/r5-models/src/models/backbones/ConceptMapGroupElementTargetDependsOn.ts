import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICoding,
  IConceptMapGroupElementTargetDependsOn,
  IElement,
  IQuantity,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ConceptMapGroupElementTargetDependsOn */
const CONCEPT_MAP_GROUP_ELEMENT_TARGET_DEPENDS_ON_PROPERTIES = [
  'attribute',
  '_attribute',
  'valueCode',
  '_valueCode',
  'valueCoding',
  'valueString',
  '_valueString',
  'valueBoolean',
  '_valueBoolean',
  'valueQuantity',
  'valueSet',
  '_valueSet',
] as const;

/**
 * ConceptMapGroupElementTargetDependsOn - Other properties required for this mapping
 *
 * @see https://hl7.org/fhir/R5/conceptmapgroupelementtargetdependson.html
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

  /** A reference to a mapping attribute defined in ConceptMap.additionalAttribute */
  attribute: string;

  /** Extension for attribute */
  _attribute?: IElement;

  /** Value of the referenced data element */
  valueCode?: string;

  /** Extension for valueCode */
  _valueCode?: IElement;

  /** Value of the referenced data element */
  valueCoding?: ICoding;

  /** Value of the referenced data element */
  valueString?: string;

  /** Extension for valueString */
  _valueString?: IElement;

  /** Value of the referenced data element */
  valueBoolean?: boolean;

  /** Extension for valueBoolean */
  _valueBoolean?: IElement;

  /** Value of the referenced data element */
  valueQuantity?: IQuantity;

  /** The mapping depends on a data element with a value from this value set */
  valueSet?: string;

  /** Extension for valueSet */
  _valueSet?: IElement;

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
