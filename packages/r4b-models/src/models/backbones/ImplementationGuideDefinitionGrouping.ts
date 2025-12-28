import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IImplementationGuideDefinitionGrouping,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ImplementationGuideDefinitionGrouping */
const IMPLEMENTATION_GUIDE_DEFINITION_GROUPING_PROPERTIES = [
  'name',
  '_name',
  'description',
  '_description',
] as const;

/**
 * ImplementationGuideDefinitionGrouping - Grouping used to present related resources in the IG
 *
 * @see https://hl7.org/fhir/R4B/implementationguidedefinitiongrouping.html
 *
 * @example
 * const implementationGuideDefinitionGrouping = new ImplementationGuideDefinitionGrouping({
 *   // ... properties
 * });
 */
export class ImplementationGuideDefinitionGrouping extends BackboneElement implements IImplementationGuideDefinitionGrouping {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Descriptive name for the package */
  name: string;

  /** Extension for name */
  _name?: IElement;

  /** Human readable text describing the package */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IImplementationGuideDefinitionGrouping>) {
    super(data);
    if (data) {
      this.assignProps(data, IMPLEMENTATION_GUIDE_DEFINITION_GROUPING_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImplementationGuideDefinitionGrouping from a JSON object
   */
  static fromJSON(json: IImplementationGuideDefinitionGrouping): ImplementationGuideDefinitionGrouping {
    return new ImplementationGuideDefinitionGrouping(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImplementationGuideDefinitionGrouping with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImplementationGuideDefinitionGrouping>): ImplementationGuideDefinitionGrouping {
    return new ImplementationGuideDefinitionGrouping({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImplementationGuideDefinitionGrouping by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImplementationGuideDefinitionGrouping) => Partial<IImplementationGuideDefinitionGrouping>): ImplementationGuideDefinitionGrouping {
    const currentData = this.toJSON();
    return new ImplementationGuideDefinitionGrouping({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImplementationGuideDefinitionGrouping)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImplementationGuideDefinitionGrouping {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, IMPLEMENTATION_GUIDE_DEFINITION_GROUPING_PROPERTIES);
    return result as IImplementationGuideDefinitionGrouping;
  }

  /**
   * Create a deep clone of this ImplementationGuideDefinitionGrouping
   */
  clone(): ImplementationGuideDefinitionGrouping {
    return new ImplementationGuideDefinitionGrouping(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImplementationGuideDefinitionGrouping
   */
  toString(): string {
    const parts: string[] = ['ImplementationGuideDefinitionGrouping'];
    return parts.join(', ');
  }
}
