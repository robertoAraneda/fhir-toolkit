import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IImplementationGuideManifestPage,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ImplementationGuideManifestPage */
const IMPLEMENTATION_GUIDE_MANIFEST_PAGE_PROPERTIES = [
  'name',
  '_name',
  'title',
  '_title',
  'anchor',
  '_anchor',
] as const;

/**
 * ImplementationGuideManifestPage - HTML page within the parent IG
 *
 * @see https://hl7.org/fhir/R4/implementationguidemanifestpage.html
 *
 * @example
 * const implementationGuideManifestPage = new ImplementationGuideManifestPage({
 *   // ... properties
 * });
 */
export class ImplementationGuideManifestPage extends BackboneElement implements IImplementationGuideManifestPage {

  // ============================================================================
  // Properties
  // ============================================================================

  /** HTML page name */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Title of the page, for references */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Anchor available on the page */
  anchor?: string[];

  /** Extension for anchor */
  _anchor?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImplementationGuideManifestPage>) {
    super(data);
    if (data) {
      this.assignProps(data, IMPLEMENTATION_GUIDE_MANIFEST_PAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImplementationGuideManifestPage from a JSON object
   */
  static fromJSON(json: IImplementationGuideManifestPage): ImplementationGuideManifestPage {
    return new ImplementationGuideManifestPage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImplementationGuideManifestPage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImplementationGuideManifestPage>): ImplementationGuideManifestPage {
    return new ImplementationGuideManifestPage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImplementationGuideManifestPage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImplementationGuideManifestPage) => Partial<IImplementationGuideManifestPage>): ImplementationGuideManifestPage {
    const currentData = this.toJSON();
    return new ImplementationGuideManifestPage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImplementationGuideManifestPage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImplementationGuideManifestPage {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMPLEMENTATION_GUIDE_MANIFEST_PAGE_PROPERTIES);
    return result as IImplementationGuideManifestPage;
  }

  /**
   * Create a deep clone of this ImplementationGuideManifestPage
   */
  clone(): ImplementationGuideManifestPage {
    return new ImplementationGuideManifestPage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImplementationGuideManifestPage
   */
  toString(): string {
    const parts: string[] = ['ImplementationGuideManifestPage'];
    return parts.join(', ');
  }
}
