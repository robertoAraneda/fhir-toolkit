import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITerminologyCapabilitiesClosure,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TerminologyCapabilitiesClosure */
const TERMINOLOGY_CAPABILITIES_CLOSURE_PROPERTIES = [
  'translation',
  '_translation',
] as const;

/**
 * TerminologyCapabilitiesClosure - Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation
 *
 * @see https://hl7.org/fhir/R4/terminologycapabilitiesclosure.html
 *
 * @example
 * const terminologyCapabilitiesClosure = new TerminologyCapabilitiesClosure({
 *   // ... properties
 * });
 */
export class TerminologyCapabilitiesClosure extends BackboneElement implements ITerminologyCapabilitiesClosure {

  // ============================================================================
  // Properties
  // ============================================================================

  /** If cross-system closure is supported */
  translation?: boolean;

  /** Extension for translation */
  _translation?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITerminologyCapabilitiesClosure>) {
    super(data);
    if (data) {
      this.assignProps(data, TERMINOLOGY_CAPABILITIES_CLOSURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TerminologyCapabilitiesClosure from a JSON object
   */
  static fromJSON(json: ITerminologyCapabilitiesClosure): TerminologyCapabilitiesClosure {
    return new TerminologyCapabilitiesClosure(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TerminologyCapabilitiesClosure with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITerminologyCapabilitiesClosure>): TerminologyCapabilitiesClosure {
    return new TerminologyCapabilitiesClosure({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TerminologyCapabilitiesClosure by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITerminologyCapabilitiesClosure) => Partial<ITerminologyCapabilitiesClosure>): TerminologyCapabilitiesClosure {
    const currentData = this.toJSON();
    return new TerminologyCapabilitiesClosure({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITerminologyCapabilitiesClosure)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITerminologyCapabilitiesClosure {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TERMINOLOGY_CAPABILITIES_CLOSURE_PROPERTIES);
    return result as ITerminologyCapabilitiesClosure;
  }

  /**
   * Create a deep clone of this TerminologyCapabilitiesClosure
   */
  clone(): TerminologyCapabilitiesClosure {
    return new TerminologyCapabilitiesClosure(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TerminologyCapabilitiesClosure
   */
  toString(): string {
    const parts: string[] = ['TerminologyCapabilitiesClosure'];
    return parts.join(', ');
  }
}
