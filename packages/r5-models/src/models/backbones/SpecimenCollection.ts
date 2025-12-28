import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICodeableReference,
  IDuration,
  IElement,
  IPeriod,
  IQuantity,
  IReference,
  ISpecimenCollection,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SpecimenCollection */
const SPECIMEN_COLLECTION_PROPERTIES = [
  'collector',
  'collectedDateTime',
  '_collectedDateTime',
  'collectedPeriod',
  'duration',
  'quantity',
  'method',
  'device',
  'procedure',
  'bodySite',
  'fastingStatusCodeableConcept',
  'fastingStatusDuration',
] as const;

/**
 * SpecimenCollection - Collection details
 *
 * @see https://hl7.org/fhir/R5/specimencollection.html
 *
 * @example
 * const specimenCollection = new SpecimenCollection({
 *   // ... properties
 * });
 */
export class SpecimenCollection extends BackboneElement implements ISpecimenCollection {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Who collected the specimen */
  collector?: IReference<'Practitioner' | 'PractitionerRole' | 'Patient' | 'RelatedPerson'>;

  /** Collection time */
  collectedDateTime?: string;

  /** Extension for collectedDateTime */
  _collectedDateTime?: IElement;

  /** Collection time */
  collectedPeriod?: IPeriod;

  /** How long it took to collect specimen */
  duration?: IDuration;

  /** The quantity of specimen collected */
  quantity?: IQuantity;

  /** Technique used to perform collection */
  method?: ICodeableConcept;

  /** Device used to perform collection */
  device?: ICodeableReference;

  /** The procedure that collects the specimen */
  procedure?: IReference<'Procedure'>;

  /** Anatomical collection site */
  bodySite?: ICodeableReference;

  /** Whether or how long patient abstained from food and/or drink */
  fastingStatusCodeableConcept?: ICodeableConcept;

  /** Whether or how long patient abstained from food and/or drink */
  fastingStatusDuration?: IDuration;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISpecimenCollection>) {
    super(data);
    if (data) {
      this.assignProps(data, SPECIMEN_COLLECTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SpecimenCollection from a JSON object
   */
  static fromJSON(json: ISpecimenCollection): SpecimenCollection {
    return new SpecimenCollection(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SpecimenCollection with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISpecimenCollection>): SpecimenCollection {
    return new SpecimenCollection({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SpecimenCollection by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISpecimenCollection) => Partial<ISpecimenCollection>): SpecimenCollection {
    const currentData = this.toJSON();
    return new SpecimenCollection({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISpecimenCollection)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISpecimenCollection {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SPECIMEN_COLLECTION_PROPERTIES);
    return result as ISpecimenCollection;
  }

  /**
   * Create a deep clone of this SpecimenCollection
   */
  clone(): SpecimenCollection {
    return new SpecimenCollection(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SpecimenCollection
   */
  toString(): string {
    const parts: string[] = ['SpecimenCollection'];
    return parts.join(', ');
  }
}
