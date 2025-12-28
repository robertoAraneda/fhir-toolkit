import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IElement,
  IObservationTriggeredBy,
  IReference,
  TriggeredBytypeType,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ObservationTriggeredBy */
const OBSERVATION_TRIGGERED_BY_PROPERTIES = [
  'observation',
  'type',
  '_type',
  'reason',
  '_reason',
] as const;

/**
 * ObservationTriggeredBy - Triggering observation(s)
 *
 * @see https://hl7.org/fhir/R5/observationtriggeredby.html
 *
 * @example
 * const observationTriggeredBy = new ObservationTriggeredBy({
 *   // ... properties
 * });
 */
export class ObservationTriggeredBy extends BackboneElement implements IObservationTriggeredBy {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Triggering observation */
  observation: IReference<'Observation'>;

  /** reflex | repeat | re-run */
  type: TriggeredBytypeType;

  /** Extension for type */
  _type?: IElement;

  /** Reason that the observation was triggered */
  reason?: string;

  /** Extension for reason */
  _reason?: IElement;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IObservationTriggeredBy>) {
    super(data);
    if (data) {
      this.assignProps(data, OBSERVATION_TRIGGERED_BY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ObservationTriggeredBy from a JSON object
   */
  static fromJSON(json: IObservationTriggeredBy): ObservationTriggeredBy {
    return new ObservationTriggeredBy(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ObservationTriggeredBy with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IObservationTriggeredBy>): ObservationTriggeredBy {
    return new ObservationTriggeredBy({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ObservationTriggeredBy by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IObservationTriggeredBy) => Partial<IObservationTriggeredBy>): ObservationTriggeredBy {
    const currentData = this.toJSON();
    return new ObservationTriggeredBy({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IObservationTriggeredBy)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IObservationTriggeredBy {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, OBSERVATION_TRIGGERED_BY_PROPERTIES);
    return result as IObservationTriggeredBy;
  }

  /**
   * Create a deep clone of this ObservationTriggeredBy
   */
  clone(): ObservationTriggeredBy {
    return new ObservationTriggeredBy(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ObservationTriggeredBy
   */
  toString(): string {
    const parts: string[] = ['ObservationTriggeredBy'];
    return parts.join(', ');
  }
}
