import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IImplementationGuideDefinition,
  IImplementationGuideDefinitionGrouping,
  IImplementationGuideDefinitionPage,
  IImplementationGuideDefinitionParameter,
  IImplementationGuideDefinitionResource,
  IImplementationGuideDefinitionTemplate,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ImplementationGuideDefinition */
const IMPLEMENTATION_GUIDE_DEFINITION_PROPERTIES = [
  'grouping',
  'resource',
  'page',
  'parameter',
  'template',
] as const;

/**
 * ImplementationGuideDefinition - Information needed to build the IG
 *
 * @see https://hl7.org/fhir/R5/implementationguidedefinition.html
 *
 * @example
 * const implementationGuideDefinition = new ImplementationGuideDefinition({
 *   // ... properties
 * });
 */
export class ImplementationGuideDefinition extends BackboneElement implements IImplementationGuideDefinition {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Grouping used to present related resources in the IG */
  grouping?: IImplementationGuideDefinitionGrouping[];

  /** Resource in the implementation guide */
  resource?: IImplementationGuideDefinitionResource[];

  /** Page/Section in the Guide */
  page?: IImplementationGuideDefinitionPage;

  /** Defines how IG is built by tools */
  parameter?: IImplementationGuideDefinitionParameter[];

  /** A template for building resources */
  template?: IImplementationGuideDefinitionTemplate[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImplementationGuideDefinition>) {
    super(data);
    if (data) {
      this.assignProps(data, IMPLEMENTATION_GUIDE_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImplementationGuideDefinition from a JSON object
   */
  static fromJSON(json: IImplementationGuideDefinition): ImplementationGuideDefinition {
    return new ImplementationGuideDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImplementationGuideDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImplementationGuideDefinition>): ImplementationGuideDefinition {
    return new ImplementationGuideDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImplementationGuideDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImplementationGuideDefinition) => Partial<IImplementationGuideDefinition>): ImplementationGuideDefinition {
    const currentData = this.toJSON();
    return new ImplementationGuideDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImplementationGuideDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImplementationGuideDefinition {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMPLEMENTATION_GUIDE_DEFINITION_PROPERTIES);
    return result as IImplementationGuideDefinition;
  }

  /**
   * Create a deep clone of this ImplementationGuideDefinition
   */
  clone(): ImplementationGuideDefinition {
    return new ImplementationGuideDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImplementationGuideDefinition
   */
  toString(): string {
    const parts: string[] = ['ImplementationGuideDefinition'];
    return parts.join(', ');
  }
}
