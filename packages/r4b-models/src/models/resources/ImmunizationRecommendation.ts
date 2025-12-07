import { DomainResource } from '../base/DomainResource.js';
import type {
  IElement,
  IIdentifier,
  IImmunizationRecommendation,
  IImmunizationRecommendationRecommendation,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to ImmunizationRecommendation */
const IMMUNIZATION_RECOMMENDATION_PROPERTIES = [
  'identifier',
  'patient',
  'date',
  '_date',
  'authority',
  'recommendation',
] as const;

/**
 * ImmunizationRecommendation - A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 *
 * @see https://hl7.org/fhir/R4/immunizationrecommendation.html
 *
 * @example
 * const immunizationRecommendation = new ImmunizationRecommendation({
 *   // ... properties
 * });
 */
export class ImmunizationRecommendation extends DomainResource implements IImmunizationRecommendation {
  readonly resourceType = 'ImmunizationRecommendation' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Business identifier */
  identifier?: IIdentifier[];

  /** Who this profile is for */
  patient: IReference<'Patient'>;

  /** Date recommendation(s) created */
  date: string;

  /** Extension for date */
  _date?: IElement;

  /** Who is responsible for protocol */
  authority?: IReference<'Organization'>;

  /** Vaccine administration recommendations */
  recommendation: IImmunizationRecommendationRecommendation[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<IImmunizationRecommendation>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, IMMUNIZATION_RECOMMENDATION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ImmunizationRecommendation from a JSON object
   */
  static fromJSON(json: IImmunizationRecommendation): ImmunizationRecommendation {
    return new ImmunizationRecommendation(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ImmunizationRecommendation with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IImmunizationRecommendation>): ImmunizationRecommendation {
    return new ImmunizationRecommendation({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ImmunizationRecommendation by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IImmunizationRecommendation) => Partial<IImmunizationRecommendation>): ImmunizationRecommendation {
    const currentData = this.toJSON();
    return new ImmunizationRecommendation({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IImmunizationRecommendation)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IImmunizationRecommendation {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, IMMUNIZATION_RECOMMENDATION_PROPERTIES);
    return result as IImmunizationRecommendation;
  }

  /**
   * Create a deep clone of this ImmunizationRecommendation
   */
  clone(): ImmunizationRecommendation {
    return new ImmunizationRecommendation(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ImmunizationRecommendation
   */
  toString(): string {
    const parts: string[] = ['ImmunizationRecommendation'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
