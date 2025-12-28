import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IAdverseEventContributingFactor,
  ICodeableConcept,
  IReference,
} from '@fhir-toolkit/r5-types';

/** Properties specific to AdverseEventContributingFactor */
const ADVERSE_EVENT_CONTRIBUTING_FACTOR_PROPERTIES = [
  'itemReference',
  'itemCodeableConcept',
] as const;

/**
 * AdverseEventContributingFactor - Contributing factors suspected to have increased the probability or severity of the adverse event
 *
 * @see https://hl7.org/fhir/R5/adverseeventcontributingfactor.html
 *
 * @example
 * const adverseEventContributingFactor = new AdverseEventContributingFactor({
 *   // ... properties
 * });
 */
export class AdverseEventContributingFactor extends BackboneElement implements IAdverseEventContributingFactor {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Item suspected to have increased the probability or severity of the adverse event */
  itemReference?: IReference;

  /** Item suspected to have increased the probability or severity of the adverse event */
  itemCodeableConcept?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IAdverseEventContributingFactor>) {
    super(data);
    if (data) {
      this.assignProps(data, ADVERSE_EVENT_CONTRIBUTING_FACTOR_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create AdverseEventContributingFactor from a JSON object
   */
  static fromJSON(json: IAdverseEventContributingFactor): AdverseEventContributingFactor {
    return new AdverseEventContributingFactor(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new AdverseEventContributingFactor with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IAdverseEventContributingFactor>): AdverseEventContributingFactor {
    return new AdverseEventContributingFactor({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new AdverseEventContributingFactor by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IAdverseEventContributingFactor) => Partial<IAdverseEventContributingFactor>): AdverseEventContributingFactor {
    const currentData = this.toJSON();
    return new AdverseEventContributingFactor({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IAdverseEventContributingFactor)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IAdverseEventContributingFactor {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, ADVERSE_EVENT_CONTRIBUTING_FACTOR_PROPERTIES);
    return result as IAdverseEventContributingFactor;
  }

  /**
   * Create a deep clone of this AdverseEventContributingFactor
   */
  clone(): AdverseEventContributingFactor {
    return new AdverseEventContributingFactor(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the AdverseEventContributingFactor
   */
  toString(): string {
    const parts: string[] = ['AdverseEventContributingFactor'];
    return parts.join(', ');
  }
}
