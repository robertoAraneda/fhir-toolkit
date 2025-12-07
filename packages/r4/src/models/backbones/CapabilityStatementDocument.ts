import { BackboneElement } from '../base/BackboneElement.js';
import type {
  DocumentModeType,
  ICapabilityStatementDocument,
  IElement,
} from '@fhir-toolkit/r4-types';

/** Properties specific to CapabilityStatementDocument */
const CAPABILITY_STATEMENT_DOCUMENT_PROPERTIES = [
  'mode',
  '_mode',
  'documentation',
  '_documentation',
  'profile',
  '_profile',
] as const;

/**
 * CapabilityStatementDocument - Document definition
 *
 * @see https://hl7.org/fhir/R4/capabilitystatementdocument.html
 *
 * @example
 * const capabilityStatementDocument = new CapabilityStatementDocument({
 *   // ... properties
 * });
 */
export class CapabilityStatementDocument extends BackboneElement implements ICapabilityStatementDocument {

  // ============================================================================
  // Properties
  // ============================================================================

  /** producer | consumer */
  mode: DocumentModeType;

  /** Extension for mode */
  _mode?: IElement;

  /** Description of document support */
  documentation?: string;

  /** Extension for documentation */
  _documentation?: IElement;

  /** Constraint on the resources used in the document */
  profile: string;

  /** Extension for profile */
  _profile?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICapabilityStatementDocument>) {
    super(data);
    if (data) {
      this.assignProps(data, CAPABILITY_STATEMENT_DOCUMENT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CapabilityStatementDocument from a JSON object
   */
  static fromJSON(json: ICapabilityStatementDocument): CapabilityStatementDocument {
    return new CapabilityStatementDocument(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CapabilityStatementDocument with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICapabilityStatementDocument>): CapabilityStatementDocument {
    return new CapabilityStatementDocument({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CapabilityStatementDocument by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICapabilityStatementDocument) => Partial<ICapabilityStatementDocument>): CapabilityStatementDocument {
    const currentData = this.toJSON();
    return new CapabilityStatementDocument({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICapabilityStatementDocument)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICapabilityStatementDocument {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CAPABILITY_STATEMENT_DOCUMENT_PROPERTIES);
    return result as ICapabilityStatementDocument;
  }

  /**
   * Create a deep clone of this CapabilityStatementDocument
   */
  clone(): CapabilityStatementDocument {
    return new CapabilityStatementDocument(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CapabilityStatementDocument
   */
  toString(): string {
    const parts: string[] = ['CapabilityStatementDocument'];
    return parts.join(', ');
  }
}
