import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IImplementationGuideDefinitionTemplate,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ImplementationGuideDefinitionTemplate */
const IMPLEMENTATION_GUIDE_DEFINITION_TEMPLATE_PROPERTIES = [
  'code',
  '_code',
  'source',
  '_source',
  'scope',
  '_scope',
] as const;

/**
 * ImplementationGuideDefinitionTemplate - A template for building resources
 *
 * @see https://hl7.org/fhir/R4B/implementationguidedefinitiontemplate.html
 *
 * @example
 * const implementationGuideDefinitionTemplate = new ImplementationGuideDefinitionTemplate({
 *   // ... properties
 * });
 */
export class ImplementationGuideDefinitionTemplate extends BackboneElement implements IImplementationGuideDefinitionTemplate {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of template specified */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** The source location for the template */
  source: string;

  /** Extension for source */
  _source?: IElement;

  /** The scope in which the template applies */
  scope?: string;

  /** Extension for scope */
  _scope?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImplementationGuideDefinitionTemplate>) {
    super(data);
    if (data) {
      this.assignProps(data, IMPLEMENTATION_GUIDE_DEFINITION_TEMPLATE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImplementationGuideDefinitionTemplate from a JSON object
   */
  static fromJSON(json: IImplementationGuideDefinitionTemplate): ImplementationGuideDefinitionTemplate {
    return new ImplementationGuideDefinitionTemplate(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImplementationGuideDefinitionTemplate with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImplementationGuideDefinitionTemplate>): ImplementationGuideDefinitionTemplate {
    return new ImplementationGuideDefinitionTemplate({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImplementationGuideDefinitionTemplate by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImplementationGuideDefinitionTemplate) => Partial<IImplementationGuideDefinitionTemplate>): ImplementationGuideDefinitionTemplate {
    const currentData = this.toJSON();
    return new ImplementationGuideDefinitionTemplate({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImplementationGuideDefinitionTemplate)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImplementationGuideDefinitionTemplate {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMPLEMENTATION_GUIDE_DEFINITION_TEMPLATE_PROPERTIES);
    return result as IImplementationGuideDefinitionTemplate;
  }

  /**
   * Create a deep clone of this ImplementationGuideDefinitionTemplate
   */
  clone(): ImplementationGuideDefinitionTemplate {
    return new ImplementationGuideDefinitionTemplate(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImplementationGuideDefinitionTemplate
   */
  toString(): string {
    const parts: string[] = ['ImplementationGuideDefinitionTemplate'];
    return parts.join(', ');
  }
}
