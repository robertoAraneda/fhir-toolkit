import { DomainResource } from '../base/DomainResource.js';
import type {
  CompositionStatusType,
  ICodeableConcept,
  IComposition,
  ICompositionAttester,
  ICompositionEvent,
  ICompositionRelatesTo,
  ICompositionSection,
  IElement,
  IIdentifier,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Composition */
const COMPOSITION_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'type',
  'category',
  'subject',
  'encounter',
  'date',
  '_date',
  'author',
  'title',
  '_title',
  'confidentiality',
  '_confidentiality',
  'attester',
  'custodian',
  'relatesTo',
  'event',
  'section',
] as const;

/**
 * Composition - A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 *
 * @see https://hl7.org/fhir/R4B/composition.html
 *
 * @example
 * const composition = new Composition({
 *   // ... properties
 * });
 */
export class Composition extends DomainResource implements IComposition {
  readonly resourceType = 'Composition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Version-independent identifier for the Composition */
  identifier?: IIdentifier;

  /** preliminary | final | amended | entered-in-error */
  status: CompositionStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Kind of composition (LOINC if possible) */
  type: ICodeableConcept;

  /** Categorization of Composition */
  category?: ICodeableConcept[];

  /** Who and/or what the composition is about */
  subject?: IReference<'Resource'>;

  /** Context of the Composition */
  encounter?: IReference<'Encounter'>;

  /** Composition editing time */
  date: string;

  /** Extension for date */
  _date?: IElement;

  /** Who and/or what authored the composition */
  author: IReference<'Practitioner' | 'PractitionerRole' | 'Device' | 'Patient' | 'RelatedPerson' | 'Organization'>[];

  /** Human Readable name/title */
  title: string;

  /** Extension for title */
  _title?: IElement;

  /** As defined by affinity domain */
  confidentiality?: string;

  /** Extension for confidentiality */
  _confidentiality?: IElement;

  /** Attests to accuracy of composition */
  attester?: ICompositionAttester[];

  /** Organization which maintains the composition */
  custodian?: IReference<'Organization'>;

  /** Relationships to other compositions/documents */
  relatesTo?: ICompositionRelatesTo[];

  /** The clinical service(s) being documented */
  event?: ICompositionEvent[];

  /** Composition is broken into sections */
  section?: ICompositionSection[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IComposition>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, COMPOSITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Composition from a JSON object
   */
  static fromJSON(json: IComposition): Composition {
    return new Composition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Composition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IComposition>): Composition {
    return new Composition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Composition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IComposition) => Partial<IComposition>): Composition {
    const currentData = this.toJSON();
    return new Composition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IComposition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IComposition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, COMPOSITION_PROPERTIES);
    return result as IComposition;
  }

  /**
   * Create a deep clone of this Composition
   */
  clone(): Composition {
    return new Composition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Composition
   */
  toString(): string {
    const parts: string[] = ['Composition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
