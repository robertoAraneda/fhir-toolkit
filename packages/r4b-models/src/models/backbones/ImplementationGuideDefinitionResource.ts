import { BackboneElement } from '../base/BackboneElement.js';
import type {
  FHIRVersionType,
  IElement,
  IImplementationGuideDefinitionResource,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ImplementationGuideDefinitionResource */
const IMPLEMENTATION_GUIDE_DEFINITION_RESOURCE_PROPERTIES = [
  'reference',
  'fhirVersion',
  '_fhirVersion',
  'name',
  '_name',
  'description',
  '_description',
  'exampleBoolean',
  '_exampleBoolean',
  'exampleCanonical',
  '_exampleCanonical',
  'groupingId',
  '_groupingId',
] as const;

/**
 * ImplementationGuideDefinitionResource - Resource in the implementation guide
 *
 * @see https://hl7.org/fhir/R4B/implementationguidedefinitionresource.html
 *
 * @example
 * const implementationGuideDefinitionResource = new ImplementationGuideDefinitionResource({
 *   // ... properties
 * });
 */
export class ImplementationGuideDefinitionResource extends BackboneElement implements IImplementationGuideDefinitionResource {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Location of the resource */
  reference: IReference<'Resource'>;

  /** Versions this applies to (if different to IG) */
  fhirVersion?: FHIRVersionType[];

  /** Extension for fhirVersion */
  _fhirVersion?: IElement;

  /** Human Name for the resource */
  name?: string;

  /** Extension for name */
  _name?: IElement;

  /** Reason why included in guide */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Is an example/What is this an example of? */
  exampleBoolean?: boolean;

  /** Extension for exampleBoolean */
  _exampleBoolean?: IElement;

  /** Is an example/What is this an example of? */
  exampleCanonical?: string;

  /** Extension for exampleCanonical */
  _exampleCanonical?: IElement;

  /** Grouping this is part of */
  groupingId?: string;

  /** Extension for groupingId */
  _groupingId?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImplementationGuideDefinitionResource>) {
    super(data);
    if (data) {
      this.assignProps(data, IMPLEMENTATION_GUIDE_DEFINITION_RESOURCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImplementationGuideDefinitionResource from a JSON object
   */
  static fromJSON(json: IImplementationGuideDefinitionResource): ImplementationGuideDefinitionResource {
    return new ImplementationGuideDefinitionResource(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImplementationGuideDefinitionResource with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImplementationGuideDefinitionResource>): ImplementationGuideDefinitionResource {
    return new ImplementationGuideDefinitionResource({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImplementationGuideDefinitionResource by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImplementationGuideDefinitionResource) => Partial<IImplementationGuideDefinitionResource>): ImplementationGuideDefinitionResource {
    const currentData = this.toJSON();
    return new ImplementationGuideDefinitionResource({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImplementationGuideDefinitionResource)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImplementationGuideDefinitionResource {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMPLEMENTATION_GUIDE_DEFINITION_RESOURCE_PROPERTIES);
    return result as IImplementationGuideDefinitionResource;
  }

  /**
   * Create a deep clone of this ImplementationGuideDefinitionResource
   */
  clone(): ImplementationGuideDefinitionResource {
    return new ImplementationGuideDefinitionResource(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImplementationGuideDefinitionResource
   */
  toString(): string {
    const parts: string[] = ['ImplementationGuideDefinitionResource'];
    return parts.join(', ');
  }
}
