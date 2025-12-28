import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITerminologyCapabilitiesTranslation,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TerminologyCapabilitiesTranslation */
const TERMINOLOGY_CAPABILITIES_TRANSLATION_PROPERTIES = [
  'needsMap',
  '_needsMap',
] as const;

/**
 * TerminologyCapabilitiesTranslation - Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation
 *
 * @see https://hl7.org/fhir/R4B/terminologycapabilitiestranslation.html
 *
 * @example
 * const terminologyCapabilitiesTranslation = new TerminologyCapabilitiesTranslation({
 *   // ... properties
 * });
 */
export class TerminologyCapabilitiesTranslation extends BackboneElement implements ITerminologyCapabilitiesTranslation {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Whether the client must identify the map */
  needsMap: boolean;

  /** Extension for needsMap */
  _needsMap?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITerminologyCapabilitiesTranslation>) {
    super(data);
    if (data) {
      this.assignProps(data, TERMINOLOGY_CAPABILITIES_TRANSLATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TerminologyCapabilitiesTranslation from a JSON object
   */
  static fromJSON(json: ITerminologyCapabilitiesTranslation): TerminologyCapabilitiesTranslation {
    return new TerminologyCapabilitiesTranslation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TerminologyCapabilitiesTranslation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITerminologyCapabilitiesTranslation>): TerminologyCapabilitiesTranslation {
    return new TerminologyCapabilitiesTranslation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TerminologyCapabilitiesTranslation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITerminologyCapabilitiesTranslation) => Partial<ITerminologyCapabilitiesTranslation>): TerminologyCapabilitiesTranslation {
    const currentData = this.toJSON();
    return new TerminologyCapabilitiesTranslation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITerminologyCapabilitiesTranslation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITerminologyCapabilitiesTranslation {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TERMINOLOGY_CAPABILITIES_TRANSLATION_PROPERTIES);
    return result as ITerminologyCapabilitiesTranslation;
  }

  /**
   * Create a deep clone of this TerminologyCapabilitiesTranslation
   */
  clone(): TerminologyCapabilitiesTranslation {
    return new TerminologyCapabilitiesTranslation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TerminologyCapabilitiesTranslation
   */
  toString(): string {
    const parts: string[] = ['TerminologyCapabilitiesTranslation'];
    return parts.join(', ');
  }
}
