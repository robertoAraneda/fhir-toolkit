import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  ISpecimenDefinition,
  ISpecimenDefinitionTypeTested,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SpecimenDefinition */
const SPECIMEN_DEFINITION_PROPERTIES = [
  'identifier',
  'typeCollected',
  'patientPreparation',
  'timeAspect',
  '_timeAspect',
  'collection',
  'typeTested',
] as const;

/**
 * SpecimenDefinition - A kind of specimen with associated set of requirements.
 *
 * @see https://hl7.org/fhir/R4/specimendefinition.html
 *
 * @example
 * const specimenDefinition = new SpecimenDefinition({
 *   // ... properties
 * });
 */
export class SpecimenDefinition extends DomainResource implements ISpecimenDefinition {
  readonly resourceType = 'SpecimenDefinition' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier of a kind of specimen */
  identifier?: IIdentifier;

  /** Kind of material to collect */
  typeCollected?: ICodeableConcept;

  /** Patient preparation for collection */
  patientPreparation?: ICodeableConcept[];

  /** Time aspect for collection */
  timeAspect?: string;

  /** Extension for timeAspect */
  _timeAspect?: IElement;

  /** Specimen collection procedure */
  collection?: ICodeableConcept[];

  /** Specimen in container intended for testing by lab */
  typeTested?: ISpecimenDefinitionTypeTested[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ISpecimenDefinition>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, SPECIMEN_DEFINITION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SpecimenDefinition from a JSON object
   */
  static fromJSON(json: ISpecimenDefinition): SpecimenDefinition {
    return new SpecimenDefinition(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SpecimenDefinition with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISpecimenDefinition>): SpecimenDefinition {
    return new SpecimenDefinition({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SpecimenDefinition by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISpecimenDefinition) => Partial<ISpecimenDefinition>): SpecimenDefinition {
    const currentData = this.toJSON();
    return new SpecimenDefinition({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISpecimenDefinition)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISpecimenDefinition {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SPECIMEN_DEFINITION_PROPERTIES);
    return result as ISpecimenDefinition;
  }

  /**
   * Create a deep clone of this SpecimenDefinition
   */
  clone(): SpecimenDefinition {
    return new SpecimenDefinition(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SpecimenDefinition
   */
  toString(): string {
    const parts: string[] = ['SpecimenDefinition'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
