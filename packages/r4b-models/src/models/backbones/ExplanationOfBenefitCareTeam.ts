import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IExplanationOfBenefitCareTeam,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ExplanationOfBenefitCareTeam */
const EXPLANATION_OF_BENEFIT_CARE_TEAM_PROPERTIES = [
  'sequence',
  '_sequence',
  'provider',
  'responsible',
  '_responsible',
  'role',
  'qualification',
] as const;

/**
 * ExplanationOfBenefitCareTeam - Care Team members
 *
 * @see https://hl7.org/fhir/R4B/explanationofbenefitcareteam.html
 *
 * @example
 * const explanationOfBenefitCareTeam = new ExplanationOfBenefitCareTeam({
 *   // ... properties
 * });
 */
export class ExplanationOfBenefitCareTeam extends BackboneElement implements IExplanationOfBenefitCareTeam {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Order of care team */
  sequence: number;

  /** Extension for sequence */
  _sequence?: IElement;

  /** Practitioner or organization */
  provider: IReference<'Practitioner' | 'PractitionerRole' | 'Organization'>;

  /** Indicator of the lead practitioner */
  responsible?: boolean;

  /** Extension for responsible */
  _responsible?: IElement;

  /** Function within the team */
  role?: ICodeableConcept;

  /** Practitioner credential or specialization */
  qualification?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IExplanationOfBenefitCareTeam>) {
    super(data);
    if (data) {
      this.assignProps(data, EXPLANATION_OF_BENEFIT_CARE_TEAM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ExplanationOfBenefitCareTeam from a JSON object
   */
  static fromJSON(json: IExplanationOfBenefitCareTeam): ExplanationOfBenefitCareTeam {
    return new ExplanationOfBenefitCareTeam(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ExplanationOfBenefitCareTeam with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IExplanationOfBenefitCareTeam>): ExplanationOfBenefitCareTeam {
    return new ExplanationOfBenefitCareTeam({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ExplanationOfBenefitCareTeam by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IExplanationOfBenefitCareTeam) => Partial<IExplanationOfBenefitCareTeam>): ExplanationOfBenefitCareTeam {
    const currentData = this.toJSON();
    return new ExplanationOfBenefitCareTeam({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IExplanationOfBenefitCareTeam)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IExplanationOfBenefitCareTeam {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EXPLANATION_OF_BENEFIT_CARE_TEAM_PROPERTIES);
    return result as IExplanationOfBenefitCareTeam;
  }

  /**
   * Create a deep clone of this ExplanationOfBenefitCareTeam
   */
  clone(): ExplanationOfBenefitCareTeam {
    return new ExplanationOfBenefitCareTeam(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ExplanationOfBenefitCareTeam
   */
  toString(): string {
    const parts: string[] = ['ExplanationOfBenefitCareTeam'];
    return parts.join(', ');
  }
}
