import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IImmunizationEvaluation,
  IReference,
  ImmunizationEvaluationStatusType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ImmunizationEvaluation */
const IMMUNIZATION_EVALUATION_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'patient',
  'date',
  '_date',
  'authority',
  'targetDisease',
  'immunizationEvent',
  'doseStatus',
  'doseStatusReason',
  'description',
  '_description',
  'series',
  '_series',
  'doseNumber',
  '_doseNumber',
  'seriesDoses',
  '_seriesDoses',
] as const;

/**
 * ImmunizationEvaluation - Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 *
 * @see https://hl7.org/fhir/R4/immunizationevaluation.html
 *
 * @example
 * const immunizationEvaluation = new ImmunizationEvaluation({
 *   // ... properties
 * });
 */
export class ImmunizationEvaluation extends DomainResource implements IImmunizationEvaluation {
  readonly resourceType = 'ImmunizationEvaluation' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier */
  identifier?: IIdentifier[];

  /** completed | entered-in-error */
  status: ImmunizationEvaluationStatusType;

  /** Extension for status */
  _status?: IElement;

  /** Who this evaluation is for */
  patient: IReference<'Patient'>;

  /** Date evaluation was performed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Who is responsible for publishing the recommendations */
  authority?: IReference<'Organization'>;

  /** The vaccine preventable disease schedule being evaluated */
  targetDisease: ICodeableConcept;

  /** Immunization being evaluated */
  immunizationEvent: IReference<'Immunization'>;

  /** Status of the dose relative to published recommendations */
  doseStatus: ICodeableConcept;

  /** Reason why the doese is considered valid, invalid or some other status */
  doseStatusReason?: ICodeableConcept[];

  /** Evaluation notes */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** Name of vaccine series */
  series?: string;

  /** Extension for series */
  _series?: IElement;

  /** Dose number within series */
  doseNumber?: string;

  /** Extension for doseNumber */
  _doseNumber?: IElement;

  /** Recommended number of doses for immunity */
  seriesDoses?: string;

  /** Extension for seriesDoses */
  _seriesDoses?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IImmunizationEvaluation>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, IMMUNIZATION_EVALUATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImmunizationEvaluation from a JSON object
   */
  static fromJSON(json: IImmunizationEvaluation): ImmunizationEvaluation {
    return new ImmunizationEvaluation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImmunizationEvaluation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImmunizationEvaluation>): ImmunizationEvaluation {
    return new ImmunizationEvaluation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImmunizationEvaluation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImmunizationEvaluation) => Partial<IImmunizationEvaluation>): ImmunizationEvaluation {
    const currentData = this.toJSON();
    return new ImmunizationEvaluation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImmunizationEvaluation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImmunizationEvaluation {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, IMMUNIZATION_EVALUATION_PROPERTIES);
    return result as IImmunizationEvaluation;
  }

  /**
   * Create a deep clone of this ImmunizationEvaluation
   */
  clone(): ImmunizationEvaluation {
    return new ImmunizationEvaluation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImmunizationEvaluation
   */
  toString(): string {
    const parts: string[] = ['ImmunizationEvaluation'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
