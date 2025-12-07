import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IImplementationGuideDependsOn,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ImplementationGuideDependsOn */
const IMPLEMENTATION_GUIDE_DEPENDS_ON_PROPERTIES = [
  'uri',
  '_uri',
  'packageId',
  '_packageId',
  'version',
  '_version',
] as const;

/**
 * ImplementationGuideDependsOn - Another Implementation guide this depends on
 *
 * @see https://hl7.org/fhir/R4/implementationguidedependson.html
 *
 * @example
 * const implementationGuideDependsOn = new ImplementationGuideDependsOn({
 *   // ... properties
 * });
 */
export class ImplementationGuideDependsOn extends BackboneElement implements IImplementationGuideDependsOn {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Identity of the IG that this depends on */
  uri: string;

  /** Extension for uri */
  _uri?: IElement;

  /** NPM Package name for IG this depends on */
  packageId?: string;

  /** Extension for packageId */
  _packageId?: IElement;

  /** Version of the IG */
  version?: string;

  /** Extension for version */
  _version?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImplementationGuideDependsOn>) {
    super(data);
    if (data) {
      this.assignProps(data, IMPLEMENTATION_GUIDE_DEPENDS_ON_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImplementationGuideDependsOn from a JSON object
   */
  static fromJSON(json: IImplementationGuideDependsOn): ImplementationGuideDependsOn {
    return new ImplementationGuideDependsOn(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImplementationGuideDependsOn with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImplementationGuideDependsOn>): ImplementationGuideDependsOn {
    return new ImplementationGuideDependsOn({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImplementationGuideDependsOn by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImplementationGuideDependsOn) => Partial<IImplementationGuideDependsOn>): ImplementationGuideDependsOn {
    const currentData = this.toJSON();
    return new ImplementationGuideDependsOn({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImplementationGuideDependsOn)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImplementationGuideDependsOn {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMPLEMENTATION_GUIDE_DEPENDS_ON_PROPERTIES);
    return result as IImplementationGuideDependsOn;
  }

  /**
   * Create a deep clone of this ImplementationGuideDependsOn
   */
  clone(): ImplementationGuideDependsOn {
    return new ImplementationGuideDependsOn(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImplementationGuideDependsOn
   */
  toString(): string {
    const parts: string[] = ['ImplementationGuideDependsOn'];
    return parts.join(', ');
  }
}
