import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IImplementationGuideManifest,
  IImplementationGuideManifestPage,
  IImplementationGuideManifestResource,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ImplementationGuideManifest */
const IMPLEMENTATION_GUIDE_MANIFEST_PROPERTIES = [
  'rendering',
  '_rendering',
  'resource',
  'page',
  'image',
  '_image',
  'other',
  '_other',
] as const;

/**
 * ImplementationGuideManifest - Information about an assembled IG
 *
 * @see https://hl7.org/fhir/R4/implementationguidemanifest.html
 *
 * @example
 * const implementationGuideManifest = new ImplementationGuideManifest({
 *   // ... properties
 * });
 */
export class ImplementationGuideManifest extends BackboneElement implements IImplementationGuideManifest {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Location of rendered implementation guide */
  rendering?: string;

  /** Extension for rendering */
  _rendering?: IElement;

  /** Resource in the implementation guide */
  resource: IImplementationGuideManifestResource[];

  /** HTML page within the parent IG */
  page?: IImplementationGuideManifestPage[];

  /** Image within the IG */
  image?: string[];

  /** Extension for image */
  _image?: IElement;

  /** Additional linkable file in IG */
  other?: string[];

  /** Extension for other */
  _other?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImplementationGuideManifest>) {
    super(data);
    if (data) {
      this.assignProps(data, IMPLEMENTATION_GUIDE_MANIFEST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImplementationGuideManifest from a JSON object
   */
  static fromJSON(json: IImplementationGuideManifest): ImplementationGuideManifest {
    return new ImplementationGuideManifest(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImplementationGuideManifest with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImplementationGuideManifest>): ImplementationGuideManifest {
    return new ImplementationGuideManifest({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImplementationGuideManifest by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImplementationGuideManifest) => Partial<IImplementationGuideManifest>): ImplementationGuideManifest {
    const currentData = this.toJSON();
    return new ImplementationGuideManifest({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImplementationGuideManifest)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImplementationGuideManifest {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMPLEMENTATION_GUIDE_MANIFEST_PROPERTIES);
    return result as IImplementationGuideManifest;
  }

  /**
   * Create a deep clone of this ImplementationGuideManifest
   */
  clone(): ImplementationGuideManifest {
    return new ImplementationGuideManifest(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImplementationGuideManifest
   */
  toString(): string {
    const parts: string[] = ['ImplementationGuideManifest'];
    return parts.join(', ');
  }
}
