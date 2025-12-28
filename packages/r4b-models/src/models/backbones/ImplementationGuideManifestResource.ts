import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IImplementationGuideManifestResource,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ImplementationGuideManifestResource */
const IMPLEMENTATION_GUIDE_MANIFEST_RESOURCE_PROPERTIES = [
  'reference',
  'exampleBoolean',
  '_exampleBoolean',
  'exampleCanonical',
  '_exampleCanonical',
  'relativePath',
  '_relativePath',
] as const;

/**
 * ImplementationGuideManifestResource - Resource in the implementation guide
 *
 * @see https://hl7.org/fhir/R4B/implementationguidemanifestresource.html
 *
 * @example
 * const implementationGuideManifestResource = new ImplementationGuideManifestResource({
 *   // ... properties
 * });
 */
export class ImplementationGuideManifestResource extends BackboneElement implements IImplementationGuideManifestResource {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Location of the resource */
  reference: IReference<'Resource'>;

  /** Is an example/What is this an example of? */
  exampleBoolean?: boolean;

  /** Extension for exampleBoolean */
  _exampleBoolean?: IElement;

  /** Is an example/What is this an example of? */
  exampleCanonical?: string;

  /** Extension for exampleCanonical */
  _exampleCanonical?: IElement;

  /** Relative path for page in IG */
  relativePath?: string;

  /** Extension for relativePath */
  _relativePath?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImplementationGuideManifestResource>) {
    super(data);
    if (data) {
      this.assignProps(data, IMPLEMENTATION_GUIDE_MANIFEST_RESOURCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImplementationGuideManifestResource from a JSON object
   */
  static fromJSON(json: IImplementationGuideManifestResource): ImplementationGuideManifestResource {
    return new ImplementationGuideManifestResource(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImplementationGuideManifestResource with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImplementationGuideManifestResource>): ImplementationGuideManifestResource {
    return new ImplementationGuideManifestResource({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImplementationGuideManifestResource by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImplementationGuideManifestResource) => Partial<IImplementationGuideManifestResource>): ImplementationGuideManifestResource {
    const currentData = this.toJSON();
    return new ImplementationGuideManifestResource({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImplementationGuideManifestResource)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImplementationGuideManifestResource {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMPLEMENTATION_GUIDE_MANIFEST_RESOURCE_PROPERTIES);
    return result as IImplementationGuideManifestResource;
  }

  /**
   * Create a deep clone of this ImplementationGuideManifestResource
   */
  clone(): ImplementationGuideManifestResource {
    return new ImplementationGuideManifestResource(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImplementationGuideManifestResource
   */
  toString(): string {
    const parts: string[] = ['ImplementationGuideManifestResource'];
    return parts.join(', ');
  }
}
