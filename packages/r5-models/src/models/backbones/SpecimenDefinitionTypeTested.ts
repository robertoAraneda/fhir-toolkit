import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IDuration,
  IElement,
  ISpecimenDefinitionTypeTested,
  ISpecimenDefinitionTypeTestedContainer,
  ISpecimenDefinitionTypeTestedHandling,
  SpecimenContainedPreferenceType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SpecimenDefinitionTypeTested */
const SPECIMEN_DEFINITION_TYPE_TESTED_PROPERTIES = [
  'isDerived',
  '_isDerived',
  'type',
  'preference',
  '_preference',
  'container',
  'requirement',
  '_requirement',
  'retentionTime',
  'singleUse',
  '_singleUse',
  'rejectionCriterion',
  'handling',
  'testingDestination',
] as const;

/**
 * SpecimenDefinitionTypeTested - Specimen in container intended for testing by lab
 *
 * @see https://hl7.org/fhir/R5/specimendefinitiontypetested.html
 *
 * @example
 * const specimenDefinitionTypeTested = new SpecimenDefinitionTypeTested({
 *   // ... properties
 * });
 */
export class SpecimenDefinitionTypeTested extends BackboneElement implements ISpecimenDefinitionTypeTested {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Primary or secondary specimen */
  isDerived?: boolean;

  /** Extension for isDerived */
  _isDerived?: IElement;

  /** Type of intended specimen */
  type?: ICodeableConcept;

  /** preferred | alternate */
  preference: SpecimenContainedPreferenceType;

  /** Extension for preference */
  _preference?: IElement;

  /** The specimen's container */
  container?: ISpecimenDefinitionTypeTestedContainer;

  /** Requirements for specimen delivery and special handling */
  requirement?: string;

  /** Extension for requirement */
  _requirement?: IElement;

  /** The usual time for retaining this kind of specimen */
  retentionTime?: IDuration;

  /** Specimen for single use only */
  singleUse?: boolean;

  /** Extension for singleUse */
  _singleUse?: IElement;

  /** Criterion specified for specimen rejection */
  rejectionCriterion?: ICodeableConcept[];

  /** Specimen handling before testing */
  handling?: ISpecimenDefinitionTypeTestedHandling[];

  /** Where the specimen will be tested */
  testingDestination?: ICodeableConcept[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISpecimenDefinitionTypeTested>) {
    super(data);
    if (data) {
      this.assignProps(data, SPECIMEN_DEFINITION_TYPE_TESTED_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SpecimenDefinitionTypeTested from a JSON object
   */
  static fromJSON(json: ISpecimenDefinitionTypeTested): SpecimenDefinitionTypeTested {
    return new SpecimenDefinitionTypeTested(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SpecimenDefinitionTypeTested with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISpecimenDefinitionTypeTested>): SpecimenDefinitionTypeTested {
    return new SpecimenDefinitionTypeTested({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SpecimenDefinitionTypeTested by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISpecimenDefinitionTypeTested) => Partial<ISpecimenDefinitionTypeTested>): SpecimenDefinitionTypeTested {
    const currentData = this.toJSON();
    return new SpecimenDefinitionTypeTested({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISpecimenDefinitionTypeTested)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISpecimenDefinitionTypeTested {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SPECIMEN_DEFINITION_TYPE_TESTED_PROPERTIES);
    return result as ISpecimenDefinitionTypeTested;
  }

  /**
   * Create a deep clone of this SpecimenDefinitionTypeTested
   */
  clone(): SpecimenDefinitionTypeTested {
    return new SpecimenDefinitionTypeTested(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SpecimenDefinitionTypeTested
   */
  toString(): string {
    const parts: string[] = ['SpecimenDefinitionTypeTested'];
    return parts.join(', ');
  }
}
