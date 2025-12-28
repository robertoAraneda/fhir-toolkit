import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICompartmentDefinitionResource,
  IElement,
} from '@fhir-toolkit/r5-types';

/** Properties specific to CompartmentDefinitionResource */
const COMPARTMENT_DEFINITION_RESOURCE_PROPERTIES = [
  'code',
  '_code',
  'param',
  '_param',
  'documentation',
  '_documentation',
  'startParam',
  '_startParam',
  'endParam',
  '_endParam',
] as const;

/**
 * CompartmentDefinitionResource - How a resource is related to the compartment
 *
 * @see https://hl7.org/fhir/R5/compartmentdefinitionresource.html
 *
 * @example
 * const compartmentDefinitionResource = new CompartmentDefinitionResource({
 *   // ... properties
 * });
 */
export class CompartmentDefinitionResource extends BackboneElement implements ICompartmentDefinitionResource {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Name of resource type */
  code: string;

  /** Extension for code */
  _code?: IElement;

  /** Search Parameter Name, or chained parameters */
  param?: string[];

  /** Extension for param */
  _param?: IElement;

  /** Additional documentation about the resource and compartment */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  /** Search Param for interpreting $everything.start */
  startParam?: string;

  /** Extension for startParam */
  _startParam?: IElement;

  /** Search Param for interpreting $everything.end */
  endParam?: string;

  /** Extension for endParam */
  _endParam?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICompartmentDefinitionResource>) {
    super(data);
    if (data) {
      this.assignProps(data, COMPARTMENT_DEFINITION_RESOURCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CompartmentDefinitionResource from a JSON object
   */
  static fromJSON(json: ICompartmentDefinitionResource): CompartmentDefinitionResource {
    return new CompartmentDefinitionResource(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CompartmentDefinitionResource with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICompartmentDefinitionResource>): CompartmentDefinitionResource {
    return new CompartmentDefinitionResource({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CompartmentDefinitionResource by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICompartmentDefinitionResource) => Partial<ICompartmentDefinitionResource>): CompartmentDefinitionResource {
    const currentData = this.toJSON();
    return new CompartmentDefinitionResource({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICompartmentDefinitionResource)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICompartmentDefinitionResource {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COMPARTMENT_DEFINITION_RESOURCE_PROPERTIES);
    return result as ICompartmentDefinitionResource;
  }

  /**
   * Create a deep clone of this CompartmentDefinitionResource
   */
  clone(): CompartmentDefinitionResource {
    return new CompartmentDefinitionResource(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CompartmentDefinitionResource
   */
  toString(): string {
    const parts: string[] = ['CompartmentDefinitionResource'];
    return parts.join(', ');
  }
}
