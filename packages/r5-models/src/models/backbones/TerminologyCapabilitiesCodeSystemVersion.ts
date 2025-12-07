import { BackboneElement } from '../base/BackboneElement.js';
import type {
  CommonLanguagesType,
  IElement,
  ITerminologyCapabilitiesCodeSystemVersion,
  ITerminologyCapabilitiesCodeSystemVersionFilter,
} from '@fhir-toolkit/r5-types';

/** Properties specific to TerminologyCapabilitiesCodeSystemVersion */
const TERMINOLOGY_CAPABILITIES_CODE_SYSTEM_VERSION_PROPERTIES = [
  'code',
  '_code',
  'isDefault',
  '_isDefault',
  'compositional',
  '_compositional',
  'language',
  '_language',
  'filter',
  'property',
  '_property',
] as const;

/**
 * TerminologyCapabilitiesCodeSystemVersion - Version of Code System supported
 *
 * @see https://hl7.org/fhir/R4/terminologycapabilitiescodesystemversion.html
 *
 * @example
 * const terminologyCapabilitiesCodeSystemVersion = new TerminologyCapabilitiesCodeSystemVersion({
 *   // ... properties
 * });
 */
export class TerminologyCapabilitiesCodeSystemVersion extends BackboneElement implements ITerminologyCapabilitiesCodeSystemVersion {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Version identifier for this version */
  code?: string;

  /** Extension for code */
  _code?: IElement;

  /** If this is the default version for this code system */
  isDefault?: boolean;

  /** Extension for isDefault */
  _isDefault?: IElement;

  /** If compositional grammar is supported */
  compositional?: boolean;

  /** Extension for compositional */
  _compositional?: IElement;

  /** Language Displays supported */
  language?: CommonLanguagesType[];

  /** Extension for language */
  _language?: IElement;

  /** Filter Properties supported */
  filter?: ITerminologyCapabilitiesCodeSystemVersionFilter[];

  /** Properties supported for $lookup */
  property?: string[];

  /** Extension for property */
  _property?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ITerminologyCapabilitiesCodeSystemVersion>) {
    super(data);
    if (data) {
      this.assignProps(data, TERMINOLOGY_CAPABILITIES_CODE_SYSTEM_VERSION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create TerminologyCapabilitiesCodeSystemVersion from a JSON object
   */
  static fromJSON(json: ITerminologyCapabilitiesCodeSystemVersion): TerminologyCapabilitiesCodeSystemVersion {
    return new TerminologyCapabilitiesCodeSystemVersion(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new TerminologyCapabilitiesCodeSystemVersion with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ITerminologyCapabilitiesCodeSystemVersion>): TerminologyCapabilitiesCodeSystemVersion {
    return new TerminologyCapabilitiesCodeSystemVersion({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new TerminologyCapabilitiesCodeSystemVersion by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ITerminologyCapabilitiesCodeSystemVersion) => Partial<ITerminologyCapabilitiesCodeSystemVersion>): TerminologyCapabilitiesCodeSystemVersion {
    const currentData = this.toJSON();
    return new TerminologyCapabilitiesCodeSystemVersion({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ITerminologyCapabilitiesCodeSystemVersion)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ITerminologyCapabilitiesCodeSystemVersion {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, TERMINOLOGY_CAPABILITIES_CODE_SYSTEM_VERSION_PROPERTIES);
    return result as ITerminologyCapabilitiesCodeSystemVersion;
  }

  /**
   * Create a deep clone of this TerminologyCapabilitiesCodeSystemVersion
   */
  clone(): TerminologyCapabilitiesCodeSystemVersion {
    return new TerminologyCapabilitiesCodeSystemVersion(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the TerminologyCapabilitiesCodeSystemVersion
   */
  toString(): string {
    const parts: string[] = ['TerminologyCapabilitiesCodeSystemVersion'];
    return parts.join(', ');
  }
}
