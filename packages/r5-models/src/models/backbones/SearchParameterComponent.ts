import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  ISearchParameterComponent,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SearchParameterComponent */
const SEARCH_PARAMETER_COMPONENT_PROPERTIES = [
  'definition',
  '_definition',
  'expression',
  '_expression',
] as const;

/**
 * SearchParameterComponent - For Composite resources to define the parts
 *
 * @see https://hl7.org/fhir/R5/searchparametercomponent.html
 *
 * @example
 * const searchParameterComponent = new SearchParameterComponent({
 *   // ... properties
 * });
 */
export class SearchParameterComponent extends BackboneElement implements ISearchParameterComponent {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Defines how the part works */
  definition: string;

  /** Extension for definition */
  _definition?: IElement;

  /** Subexpression relative to main expression */
  expression: string;

  /** Extension for expression */
  _expression?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISearchParameterComponent>) {
    super(data);
    if (data) {
      this.assignProps(data, SEARCH_PARAMETER_COMPONENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SearchParameterComponent from a JSON object
   */
  static fromJSON(json: ISearchParameterComponent): SearchParameterComponent {
    return new SearchParameterComponent(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SearchParameterComponent with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISearchParameterComponent>): SearchParameterComponent {
    return new SearchParameterComponent({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SearchParameterComponent by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISearchParameterComponent) => Partial<ISearchParameterComponent>): SearchParameterComponent {
    const currentData = this.toJSON();
    return new SearchParameterComponent({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISearchParameterComponent)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISearchParameterComponent {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SEARCH_PARAMETER_COMPONENT_PROPERTIES);
    return result as ISearchParameterComponent;
  }

  /**
   * Create a deep clone of this SearchParameterComponent
   */
  clone(): SearchParameterComponent {
    return new SearchParameterComponent(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SearchParameterComponent
   */
  toString(): string {
    const parts: string[] = ['SearchParameterComponent'];
    return parts.join(', ');
  }
}
