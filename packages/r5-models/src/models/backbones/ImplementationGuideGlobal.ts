import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IImplementationGuideGlobal,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ImplementationGuideGlobal */
const IMPLEMENTATION_GUIDE_GLOBAL_PROPERTIES = [
  'type',
  '_type',
  'profile',
  '_profile',
] as const;

/**
 * ImplementationGuideGlobal - Profiles that apply globally
 *
 * @see https://hl7.org/fhir/R5/implementationguideglobal.html
 *
 * @example
 * const implementationGuideGlobal = new ImplementationGuideGlobal({
 *   // ... properties
 * });
 */
export class ImplementationGuideGlobal extends BackboneElement implements IImplementationGuideGlobal {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type this profile applies to */
  type: string;

  /** Extension for type */
  _type?: IElement;

  /** Profile that all resources must conform to */
  profile: string;

  /** Extension for profile */
  _profile?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImplementationGuideGlobal>) {
    super(data);
    if (data) {
      this.assignProps(data, IMPLEMENTATION_GUIDE_GLOBAL_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImplementationGuideGlobal from a JSON object
   */
  static fromJSON(json: IImplementationGuideGlobal): ImplementationGuideGlobal {
    return new ImplementationGuideGlobal(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImplementationGuideGlobal with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImplementationGuideGlobal>): ImplementationGuideGlobal {
    return new ImplementationGuideGlobal({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImplementationGuideGlobal by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImplementationGuideGlobal) => Partial<IImplementationGuideGlobal>): ImplementationGuideGlobal {
    const currentData = this.toJSON();
    return new ImplementationGuideGlobal({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImplementationGuideGlobal)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImplementationGuideGlobal {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMPLEMENTATION_GUIDE_GLOBAL_PROPERTIES);
    return result as IImplementationGuideGlobal;
  }

  /**
   * Create a deep clone of this ImplementationGuideGlobal
   */
  clone(): ImplementationGuideGlobal {
    return new ImplementationGuideGlobal(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImplementationGuideGlobal
   */
  toString(): string {
    const parts: string[] = ['ImplementationGuideGlobal'];
    return parts.join(', ');
  }
}
