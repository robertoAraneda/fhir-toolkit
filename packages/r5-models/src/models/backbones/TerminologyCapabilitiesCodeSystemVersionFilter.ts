import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ITerminologyCapabilitiesCodeSystemVersionFilter,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TerminologyCapabilitiesCodeSystemVersionFilter */
const TERMINOLOGY_CAPABILITIES_CODE_SYSTEM_VERSION_FILTER_PROPERTIES = [
  'code',
  '_code',
  'op',
  '_op',
] as const;

/**
 * TerminologyCapabilitiesCodeSystemVersionFilter - Filter Properties supported
 *
 * @see https://hl7.org/fhir/R5/terminologycapabilitiescodesystemversionfilter.html
 *
 * @example
 * const terminologyCapabilitiesCodeSystemVersionFilter = new TerminologyCapabilitiesCodeSystemVersionFilter({
 *   // ... properties
 * });
 */
export class TerminologyCapabilitiesCodeSystemVersionFilter extends BackboneElement implements ITerminologyCapabilitiesCodeSystemVersionFilter {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Code of the property supported */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** Operations supported for the property */
  op: string[];

  /** Extension for op */
  _op?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITerminologyCapabilitiesCodeSystemVersionFilter>) {
    super(data);
    if (data) {
      this.assignProps(data, TERMINOLOGY_CAPABILITIES_CODE_SYSTEM_VERSION_FILTER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TerminologyCapabilitiesCodeSystemVersionFilter from a JSON object
   */
  static fromJSON(json: ITerminologyCapabilitiesCodeSystemVersionFilter): TerminologyCapabilitiesCodeSystemVersionFilter {
    return new TerminologyCapabilitiesCodeSystemVersionFilter(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TerminologyCapabilitiesCodeSystemVersionFilter with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITerminologyCapabilitiesCodeSystemVersionFilter>): TerminologyCapabilitiesCodeSystemVersionFilter {
    return new TerminologyCapabilitiesCodeSystemVersionFilter({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TerminologyCapabilitiesCodeSystemVersionFilter by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITerminologyCapabilitiesCodeSystemVersionFilter) => Partial<ITerminologyCapabilitiesCodeSystemVersionFilter>): TerminologyCapabilitiesCodeSystemVersionFilter {
    const currentData = this.toJSON();
    return new TerminologyCapabilitiesCodeSystemVersionFilter({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITerminologyCapabilitiesCodeSystemVersionFilter)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITerminologyCapabilitiesCodeSystemVersionFilter {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TERMINOLOGY_CAPABILITIES_CODE_SYSTEM_VERSION_FILTER_PROPERTIES);
    return result as ITerminologyCapabilitiesCodeSystemVersionFilter;
  }

  /**
   * Create a deep clone of this TerminologyCapabilitiesCodeSystemVersionFilter
   */
  clone(): TerminologyCapabilitiesCodeSystemVersionFilter {
    return new TerminologyCapabilitiesCodeSystemVersionFilter(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TerminologyCapabilitiesCodeSystemVersionFilter
   */
  toString(): string {
    const parts: string[] = ['TerminologyCapabilitiesCodeSystemVersionFilter'];
    return parts.join(', ');
  }
}
