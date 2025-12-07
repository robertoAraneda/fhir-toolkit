import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ExtensionContextTypeType,
  IElement,
  IStructureDefinitionContext,
} from '@fhir-toolkit/r5-types';

/** Properties specific to StructureDefinitionContext */
const STRUCTURE_DEFINITION_CONTEXT_PROPERTIES = [
  'type',
  '_type',
  'expression',
  '_expression',
] as const;

/**
 * StructureDefinitionContext - If an extension, where it can be used in instances
 *
 * @see https://hl7.org/fhir/R4/structuredefinitioncontext.html
 *
 * @example
 * const structureDefinitionContext = new StructureDefinitionContext({
 *   // ... properties
 * });
 */
export class StructureDefinitionContext extends BackboneElement implements IStructureDefinitionContext {

  // ============================================================================
  // Properties
  // ============================================================================

  /** fhirpath | element | extension */
  type: ExtensionContextTypeType;

  /** Extension for type */
  _type?: IElement;

  /** Where the extension can be used in instances */
  expression: string;

  /** Extension for expression */
  _expression?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IStructureDefinitionContext>) {
    super(data);
    if (data) {
      this.assignProps(data, STRUCTURE_DEFINITION_CONTEXT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create StructureDefinitionContext from a JSON object
   */
  static fromJSON(json: IStructureDefinitionContext): StructureDefinitionContext {
    return new StructureDefinitionContext(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new StructureDefinitionContext with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IStructureDefinitionContext>): StructureDefinitionContext {
    return new StructureDefinitionContext({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new StructureDefinitionContext by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IStructureDefinitionContext) => Partial<IStructureDefinitionContext>): StructureDefinitionContext {
    const currentData = this.toJSON();
    return new StructureDefinitionContext({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IStructureDefinitionContext)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IStructureDefinitionContext {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, STRUCTURE_DEFINITION_CONTEXT_PROPERTIES);
    return result as IStructureDefinitionContext;
  }

  /**
   * Create a deep clone of this StructureDefinitionContext
   */
  clone(): StructureDefinitionContext {
    return new StructureDefinitionContext(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the StructureDefinitionContext
   */
  toString(): string {
    const parts: string[] = ['StructureDefinitionContext'];
    return parts.join(', ');
  }
}
