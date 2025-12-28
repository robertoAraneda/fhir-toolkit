import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDocumentReferenceContext,
  IPeriod,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to DocumentReferenceContext */
const DOCUMENT_REFERENCE_CONTEXT_PROPERTIES = [
  'encounter',
  'event',
  'period',
  'facilityType',
  'practiceSetting',
  'sourcePatientInfo',
  'related',
] as const;

/**
 * DocumentReferenceContext - Clinical context of document
 *
 * @see https://hl7.org/fhir/R4B/documentreferencecontext.html
 *
 * @example
 * const documentReferenceContext = new DocumentReferenceContext({
 *   // ... properties
 * });
 */
export class DocumentReferenceContext extends BackboneElement implements IDocumentReferenceContext {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Context of the document  content */
  encounter?: IReference<'Encounter' | 'EpisodeOfCare'>[];

  /** Main clinical acts documented */
  event?: ICodeableConcept[];

  /** Time of service that is being documented */
  period?: IPeriod;

  /** Kind of facility where patient was seen */
  facilityType?: ICodeableConcept;

  /** Additional details about where the content was created (e.g. clinical specialty) */
  practiceSetting?: ICodeableConcept;

  /** Patient demographics from source */
  sourcePatientInfo?: IReference<'Patient'>;

  /** Related identifiers or resources */
  related?: IReference<'Resource'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IDocumentReferenceContext>) {
    super(data);
    if (data) {
      this.assignProps(data, DOCUMENT_REFERENCE_CONTEXT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create DocumentReferenceContext from a JSON object
   */
  static fromJSON(json: IDocumentReferenceContext): DocumentReferenceContext {
    return new DocumentReferenceContext(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new DocumentReferenceContext with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IDocumentReferenceContext>): DocumentReferenceContext {
    return new DocumentReferenceContext({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new DocumentReferenceContext by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IDocumentReferenceContext) => Partial<IDocumentReferenceContext>): DocumentReferenceContext {
    const currentData = this.toJSON();
    return new DocumentReferenceContext({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IDocumentReferenceContext)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IDocumentReferenceContext {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, DOCUMENT_REFERENCE_CONTEXT_PROPERTIES);
    return result as IDocumentReferenceContext;
  }

  /**
   * Create a deep clone of this DocumentReferenceContext
   */
  clone(): DocumentReferenceContext {
    return new DocumentReferenceContext(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the DocumentReferenceContext
   */
  toString(): string {
    const parts: string[] = ['DocumentReferenceContext'];
    return parts.join(', ');
  }
}
