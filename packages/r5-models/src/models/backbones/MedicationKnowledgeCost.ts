import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IMedicationKnowledgeCost,
  IMoney,
  IPeriod,
} from '@fhir-toolkit/r5-types';

/** Properties specific to MedicationKnowledgeCost */
const MEDICATION_KNOWLEDGE_COST_PROPERTIES = [
  'effectiveDate',
  'type',
  'source',
  '_source',
  'costMoney',
  'costCodeableConcept',
] as const;

/**
 * MedicationKnowledgeCost - The pricing of the medication
 *
 * @see https://hl7.org/fhir/R4/medicationknowledgecost.html
 *
 * @example
 * const medicationKnowledgeCost = new MedicationKnowledgeCost({
 *   // ... properties
 * });
 */
export class MedicationKnowledgeCost extends BackboneElement implements IMedicationKnowledgeCost {

  // ============================================================================
  // Properties
  // ============================================================================

  /** The date range for which the cost is effective */
  effectiveDate?: IPeriod[];

  /** The category of the cost information */
  type: ICodeableConcept;

  /** The source or owner for the price information */
  source?: string;

  /** Extension for source */
  _source?: IElement;

  /** The price or category of the cost of the medication */
  costMoney?: IMoney;

  /** The price or category of the cost of the medication */
  costCodeableConcept?: ICodeableConcept;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IMedicationKnowledgeCost>) {
    super(data);
    if (data) {
      this.assignProps(data, MEDICATION_KNOWLEDGE_COST_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create MedicationKnowledgeCost from a JSON object
   */
  static fromJSON(json: IMedicationKnowledgeCost): MedicationKnowledgeCost {
    return new MedicationKnowledgeCost(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new MedicationKnowledgeCost with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IMedicationKnowledgeCost>): MedicationKnowledgeCost {
    return new MedicationKnowledgeCost({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new MedicationKnowledgeCost by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IMedicationKnowledgeCost) => Partial<IMedicationKnowledgeCost>): MedicationKnowledgeCost {
    const currentData = this.toJSON();
    return new MedicationKnowledgeCost({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IMedicationKnowledgeCost)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IMedicationKnowledgeCost {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, MEDICATION_KNOWLEDGE_COST_PROPERTIES);
    return result as IMedicationKnowledgeCost;
  }

  /**
   * Create a deep clone of this MedicationKnowledgeCost
   */
  clone(): MedicationKnowledgeCost {
    return new MedicationKnowledgeCost(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the MedicationKnowledgeCost
   */
  toString(): string {
    const parts: string[] = ['MedicationKnowledgeCost'];
    return parts.join(', ');
  }
}
