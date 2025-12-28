import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitProcedure,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ExplanationOfBenefitProcedure */
const EXPLANATION_OF_BENEFIT_PROCEDURE_PROPERTIES = [
  'sequence',
  '_sequence',
  'type',
  'date',
  '_date',
  'procedureCodeableConcept',
  'procedureReference',
  'udi',
] as const;

/**
 * ExplanationOfBenefitProcedure - Clinical procedures performed
 *
 * @see https://hl7.org/fhir/R5/explanationofbenefitprocedure.html
 *
 * @example
 * const explanationOfBenefitProcedure = new ExplanationOfBenefitProcedure({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitProcedure extends BackboneElement implements IExplanationOfBenefitProcedure {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Procedure instance identifier */
  sequence: number;

  /** Extension for sequence */
  _sequence?: IElement;

  /** Category of Procedure */
  type?: ICodeableConcept[];

  /** When the procedure was performed */
  date?: string;

  /** Extension for date */
  _date?: IElement;

  /** Specific clinical procedure */
  procedureCodeableConcept?: ICodeableConcept;

  /** Specific clinical procedure */
  procedureReference?: IReference;

  /** Unique device identifier */
  udi?: IReference<'Device'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitProcedure>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_PROCEDURE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitProcedure from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitProcedure): ExplanationOfBenefitProcedure {
    return new ExplanationOfBenefitProcedure(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitProcedure with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitProcedure>): ExplanationOfBenefitProcedure {
    return new ExplanationOfBenefitProcedure({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitProcedure by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitProcedure) => Partial<IExplanationOfBenefitProcedure>): ExplanationOfBenefitProcedure {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitProcedure({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitProcedure)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitProcedure {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_PROCEDURE_PROPERTIES);
    return result as IExplanationOfBenefitProcedure;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitProcedure
   */
  clone(): ExplanationOfBenefitProcedure {
    return new ExplanationOfBenefitProcedure(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitProcedure
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitProcedure'];
    return parts.join(', ');
  }
}
