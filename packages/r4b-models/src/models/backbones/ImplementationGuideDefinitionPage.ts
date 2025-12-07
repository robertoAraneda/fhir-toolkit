import { BackboneElement } from '../base/BackboneElement.js';
import type {
  GuidePageGenerationType,
  IElement,
  IImplementationGuideDefinitionPage,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ImplementationGuideDefinitionPage */
const IMPLEMENTATION_GUIDE_DEFINITION_PAGE_PROPERTIES = [
  'nameUrl',
  '_nameUrl',
  'nameReference',
  'title',
  '_title',
  'generation',
  '_generation',
  'page',
] as const;

/**
 * ImplementationGuideDefinitionPage - Page/Section in the Guide
 *
 * @see https://hl7.org/fhir/R4/implementationguidedefinitionpage.html
 *
 * @example
 * const implementationGuideDefinitionPage = new ImplementationGuideDefinitionPage({
 *   // ... properties
 * });
 */
export class ImplementationGuideDefinitionPage extends BackboneElement implements IImplementationGuideDefinitionPage {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Where to find that page */
  nameUrl?: string;

  /** Extension for nameUrl */
  _nameUrl?: IElement;

  /** Where to find that page */
  nameReference?: IReference;

  /** Short title shown for navigational assistance */
  title: string;

  /** Extension for title */
  _title?: IElement;

  /** html | markdown | xml | generated */
  generation: GuidePageGenerationType;

  /** Extension for generation */
  _generation?: IElement;

  /** Nested Pages / Sections */
  page?: IImplementationGuideDefinitionPage[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImplementationGuideDefinitionPage>) {
    super(data);
    if (data) {
      this.assignProps(data, IMPLEMENTATION_GUIDE_DEFINITION_PAGE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImplementationGuideDefinitionPage from a JSON object
   */
  static fromJSON(json: IImplementationGuideDefinitionPage): ImplementationGuideDefinitionPage {
    return new ImplementationGuideDefinitionPage(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImplementationGuideDefinitionPage with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImplementationGuideDefinitionPage>): ImplementationGuideDefinitionPage {
    return new ImplementationGuideDefinitionPage({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImplementationGuideDefinitionPage by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImplementationGuideDefinitionPage) => Partial<IImplementationGuideDefinitionPage>): ImplementationGuideDefinitionPage {
    const currentData = this.toJSON();
    return new ImplementationGuideDefinitionPage({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImplementationGuideDefinitionPage)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImplementationGuideDefinitionPage {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMPLEMENTATION_GUIDE_DEFINITION_PAGE_PROPERTIES);
    return result as IImplementationGuideDefinitionPage;
  }

  /**
   * Create a deep clone of this ImplementationGuideDefinitionPage
   */
  clone(): ImplementationGuideDefinitionPage {
    return new ImplementationGuideDefinitionPage(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImplementationGuideDefinitionPage
   */
  toString(): string {
    const parts: string[] = ['ImplementationGuideDefinitionPage'];
    return parts.join(', ');
  }
}
