import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IClaimCareTeam,
  ICodeableConcept,
  IElement,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ClaimCareTeam */
const CLAIM_CARE_TEAM_PROPERTIES = [
  'sequence',
  '_sequence',
  'provider',
  'responsible',
  '_responsible',
  'role',
  'qualification',
] as const;

/**
 * ClaimCareTeam - Members of the care team
 *
 * @see https://hl7.org/fhir/R4/claimcareteam.html
 *
 * @example
 * const claimCareTeam = new ClaimCareTeam({
 *   // ... properties
 * });
 */
export class ClaimCareTeam extends BackboneElement implements IClaimCareTeam {

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

  constructor(data?: Partial<IClaimCareTeam>) {
    super(data);
    if (data) {
      this.assignProps(data, CLAIM_CARE_TEAM_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ClaimCareTeam from a JSON object
   */
  static fromJSON(json: IClaimCareTeam): ClaimCareTeam {
    return new ClaimCareTeam(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ClaimCareTeam with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IClaimCareTeam>): ClaimCareTeam {
    return new ClaimCareTeam({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ClaimCareTeam by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IClaimCareTeam) => Partial<IClaimCareTeam>): ClaimCareTeam {
    const currentData = this.toJSON();
    return new ClaimCareTeam({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IClaimCareTeam)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IClaimCareTeam {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CLAIM_CARE_TEAM_PROPERTIES);
    return result as IClaimCareTeam;
  }

  /**
   * Create a deep clone of this ClaimCareTeam
   */
  clone(): ClaimCareTeam {
    return new ClaimCareTeam(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ClaimCareTeam
   */
  toString(): string {
    const parts: string[] = ['ClaimCareTeam'];
    return parts.join(', ');
  }
}
