import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITerminologyCapabilitiesExpansion,
  ITerminologyCapabilitiesExpansionParameter,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to TerminologyCapabilitiesExpansion */
const TERMINOLOGY_CAPABILITIES_EXPANSION_PROPERTIES = [
  'hierarchical',
  '_hierarchical',
  'paging',
  '_paging',
  'incomplete',
  '_incomplete',
  'parameter',
  'textFilter',
  '_textFilter',
] as const;

/**
 * TerminologyCapabilitiesExpansion - Information about the [ValueSet/$expand](valueset-operation-expand.html) operation
 *
 * @see https://hl7.org/fhir/R4B/terminologycapabilitiesexpansion.html
 *
 * @example
 * const terminologyCapabilitiesExpansion = new TerminologyCapabilitiesExpansion({
 *   // ... properties
 * });
 */
export class TerminologyCapabilitiesExpansion extends BackboneElement implements ITerminologyCapabilitiesExpansion {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Whether the server can return nested value sets */
  hierarchical?: boolean;

  /** Extension for hierarchical */
  _hierarchical?: IElement;

  /** Whether the server supports paging on expansion */
  paging?: boolean;

  /** Extension for paging */
  _paging?: IElement;

  /** Allow request for incomplete expansions? */
  incomplete?: boolean;

  /** Extension for incomplete */
  _incomplete?: IElement;

  /** Supported expansion parameter */
  parameter?: ITerminologyCapabilitiesExpansionParameter[];

  /** Documentation about text searching works */
  textFilter?: string;

  /** Extension for textFilter */
  _textFilter?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITerminologyCapabilitiesExpansion>) {
    super(data);
    if (data) {
      this.assignProps(data, TERMINOLOGY_CAPABILITIES_EXPANSION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TerminologyCapabilitiesExpansion from a JSON object
   */
  static fromJSON(json: ITerminologyCapabilitiesExpansion): TerminologyCapabilitiesExpansion {
    return new TerminologyCapabilitiesExpansion(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TerminologyCapabilitiesExpansion with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITerminologyCapabilitiesExpansion>): TerminologyCapabilitiesExpansion {
    return new TerminologyCapabilitiesExpansion({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TerminologyCapabilitiesExpansion by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITerminologyCapabilitiesExpansion) => Partial<ITerminologyCapabilitiesExpansion>): TerminologyCapabilitiesExpansion {
    const currentData = this.toJSON();
    return new TerminologyCapabilitiesExpansion({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITerminologyCapabilitiesExpansion)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITerminologyCapabilitiesExpansion {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TERMINOLOGY_CAPABILITIES_EXPANSION_PROPERTIES);
    return result as ITerminologyCapabilitiesExpansion;
  }

  /**
   * Create a deep clone of this TerminologyCapabilitiesExpansion
   */
  clone(): TerminologyCapabilitiesExpansion {
    return new TerminologyCapabilitiesExpansion(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TerminologyCapabilitiesExpansion
   */
  toString(): string {
    const parts: string[] = ['TerminologyCapabilitiesExpansion'];
    return parts.join(', ');
  }
}
