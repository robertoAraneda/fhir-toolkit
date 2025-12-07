import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IList,
  IListEntry,
  IReference,
  ListModeType,
  ListStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to List */
const LIST_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'mode',
  '_mode',
  'title',
  '_title',
  'code',
  'subject',
  'encounter',
  'date',
  '_date',
  'source',
  'orderedBy',
  'note',
  'entry',
  'emptyReason',
] as const;

/**
 * List - A list is a curated collection of resources.
 *
 * @see https://hl7.org/fhir/R4/list.html
 *
 * @example
 * const list = new List({
 *   resourceType: 'List',
 *   // ... properties
 * });
 */
export class List extends DomainResource implements IList {
  readonly resourceType = 'List' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier */
  identifier?: IIdentifier[];

  /** current | retired | entered-in-error */
  status: ListStatusType;

  /** Extension for status */
  _status?: IElement;

  /** working | snapshot | changes */
  mode: ListModeType;

  /** Extension for mode */
  _mode?: IElement;

  /** Descriptive name for the list */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** What the purpose of this list is */
  code?: ICodeableConcept;

  /** If all resources have the same subject */
  subject?: IReference<'Patient' | 'Group' | 'Device' | 'Location'>;

  /** Context in which list created */
  encounter?: IReference<'Encounter'>;

  /** When the list was prepared */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Who and/or what defined the list contents (aka Author) */
  source?: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'Device'>;

  /** What order the list has */
  orderedBy?: ICodeableConcept;

  /** Comments about the list */
  note?: IAnnotation[];

  /** Entries in the list */
  entry?: IListEntry[];

  /** Why list is empty */
  emptyReason?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IList>) {
    super(data);
    if (data) {
      this.assignProps(data, LIST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create List from a JSON object
   */
  static fromJSON(json: IList): List {
    return new List(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new List with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IList>): List {
    return new List({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new List by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IList) => Partial<IList>): List {
    const currentData = this.toJSON();
    return new List({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IList)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IList {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, LIST_PROPERTIES);
    return result as IList;
  }

  /**
   * Create a deep clone of this List
   */
  clone(): List {
    return new List(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the List
   */
  toString(): string {
    const parts: string[] = ['List'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
