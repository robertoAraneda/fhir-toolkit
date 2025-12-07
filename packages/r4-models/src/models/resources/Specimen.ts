import { DomainResource } from '../base/DomainResource.js';
import type {
  IAnnotation,
  ICodeableConcept,
  IElement,
  IIdentifier,
  IReference,
  ISpecimen,
  ISpecimenCollection,
  ISpecimenContainer,
  ISpecimenProcessing,
  SpecimenStatusType,
} from '@fhir-toolkit/r4-types';

/** Properties specific to Specimen */
const SPECIMEN_PROPERTIES = [
  'identifier',
  'accessionIdentifier',
  'status',
  '_status',
  'type',
  'subject',
  'receivedTime',
  '_receivedTime',
  'parent',
  'request',
  'collection',
  'processing',
  'container',
  'condition',
  'note',
] as const;

/**
 * Specimen - A sample to be used for analysis.
 *
 * @see https://hl7.org/fhir/R4/specimen.html
 *
 * @example
 * const specimen = new Specimen({
 *   // ... properties
 * });
 */
export class Specimen extends DomainResource implements ISpecimen {
  readonly resourceType = 'Specimen' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** External Identifier */
  identifier?: IIdentifier[];

  /** Identifier assigned by the lab */
  accessionIdentifier?: IIdentifier;

  /** available | unavailable | unsatisfactory | entered-in-error */
  status?: SpecimenStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Kind of material that forms the specimen */
  type?: ICodeableConcept;

  /** Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device */
  subject?: IReference<'Patient' | 'Group' | 'Device' | 'Substance' | 'Location'>;

  /** The time when specimen was received for processing */
  receivedTime?: string;

  /** Extension for receivedTime */
  _receivedTime?: IElement;

  /** Specimen from which this specimen originated */
  parent?: IReference<'Specimen'>[];

  /** Why the specimen was collected */
  request?: IReference<'ServiceRequest'>[];

  /** Collection details */
  collection?: ISpecimenCollection;

  /** Processing and processing step details */
  processing?: ISpecimenProcessing[];

  /** Direct container of specimen (tube/slide, etc.) */
  container?: ISpecimenContainer[];

  /** State of the specimen */
  condition?: ICodeableConcept[];

  /** Comments */
  note?: IAnnotation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ISpecimen>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, SPECIMEN_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Specimen from a JSON object
   */
  static fromJSON(json: ISpecimen): Specimen {
    return new Specimen(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Specimen with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISpecimen>): Specimen {
    return new Specimen({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Specimen by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISpecimen) => Partial<ISpecimen>): Specimen {
    const currentData = this.toJSON();
    return new Specimen({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISpecimen)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISpecimen {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SPECIMEN_PROPERTIES);
    return result as ISpecimen;
  }

  /**
   * Create a deep clone of this Specimen
   */
  clone(): Specimen {
    return new Specimen(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Specimen
   */
  toString(): string {
    const parts: string[] = ['Specimen'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
