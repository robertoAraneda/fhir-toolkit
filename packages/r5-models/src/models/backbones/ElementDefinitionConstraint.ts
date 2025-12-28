import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ConstraintSeverityType,
  IElement,
  IElementDefinitionConstraint,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ElementDefinitionConstraint */
const ELEMENT_DEFINITION_CONSTRAINT_PROPERTIES = [
  'key',
  '_key',
  'requirements',
  '_requirements',
  'severity',
  '_severity',
  'suppress',
  '_suppress',
  'human',
  '_human',
  'expression',
  '_expression',
  'source',
  '_source',
] as const;

/**
 * ElementDefinitionConstraint - Condition that must evaluate to true
 *
 * @see https://hl7.org/fhir/R5/elementdefinitionconstraint.html
 *
 * @example
 * const elementDefinitionConstraint = new ElementDefinitionConstraint({
 *   // ... properties
 * });
 */
export class ElementDefinitionConstraint extends BackboneElement implements IElementDefinitionConstraint {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Target of 'condition' reference above */
  key: string;

  /** Extension for key */
  _key?: IElement;

  /** Why this constraint is necessary or appropriate */
  requirements?: string;

  /** Extension for requirements */
  _requirements?: IElement;

  /** error | warning */
  severity: ConstraintSeverityType;

  /** Extension for severity */
  _severity?: IElement;

  /** Suppress warning or hint in profile */
  suppress?: boolean;

  /** Extension for suppress */
  _suppress?: IElement;

  /** Human description of constraint */
  human: string;

  /** Extension for human */
  _human?: IElement;

  /** FHIRPath expression of constraint */
  expression?: string;

  /** Extension for expression */
  _expression?: IElement;

  /** Reference to original source of constraint */
  source?: string;

  /** Extension for source */
  _source?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IElementDefinitionConstraint>) {
    super(data);
    if (data) {
      this.assignProps(data, ELEMENT_DEFINITION_CONSTRAINT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ElementDefinitionConstraint from a JSON object
   */
  static fromJSON(json: IElementDefinitionConstraint): ElementDefinitionConstraint {
    return new ElementDefinitionConstraint(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ElementDefinitionConstraint with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IElementDefinitionConstraint>): ElementDefinitionConstraint {
    return new ElementDefinitionConstraint({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ElementDefinitionConstraint by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IElementDefinitionConstraint) => Partial<IElementDefinitionConstraint>): ElementDefinitionConstraint {
    const currentData = this.toJSON();
    return new ElementDefinitionConstraint({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IElementDefinitionConstraint)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IElementDefinitionConstraint {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ELEMENT_DEFINITION_CONSTRAINT_PROPERTIES);
    return result as IElementDefinitionConstraint;
  }

  /**
   * Create a deep clone of this ElementDefinitionConstraint
   */
  clone(): ElementDefinitionConstraint {
    return new ElementDefinitionConstraint(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ElementDefinitionConstraint
   */
  toString(): string {
    const parts: string[] = ['ElementDefinitionConstraint'];
    return parts.join(', ');
  }
}
