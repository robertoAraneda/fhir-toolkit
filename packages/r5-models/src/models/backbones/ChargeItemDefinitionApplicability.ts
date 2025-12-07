import { BackboneElement } from '../base/BackboneElement.js';
import type {
  IChargeItemDefinitionApplicability,
  IExpression,
  IPeriod,
  IRelatedArtifact,
} from '@fhir-toolkit/r5-types';

/** Properties specific to ChargeItemDefinitionApplicability */
const CHARGE_ITEM_DEFINITION_APPLICABILITY_PROPERTIES = [
  'condition',
  'effectivePeriod',
  'relatedArtifact',
] as const;

/**
 * ChargeItemDefinitionApplicability - Whether or not the billing code is applicable
 *
 * @see https://hl7.org/fhir/R4/chargeitemdefinitionapplicability.html
 *
 * @example
 * const chargeItemDefinitionApplicability = new ChargeItemDefinitionApplicability({
 *   // ... properties
 * });
 */
export class ChargeItemDefinitionApplicability extends BackboneElement implements IChargeItemDefinitionApplicability {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Boolean-valued expression */
  condition?: IExpression;

  /** When the charge item definition is expected to be used */
  effectivePeriod?: IPeriod;

  /** Reference to / quotation of the external source of the group of properties */
  relatedArtifact?: IRelatedArtifact;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IChargeItemDefinitionApplicability>) {
    super(data);
    if (data) {
      this.assignProps(data, CHARGE_ITEM_DEFINITION_APPLICABILITY_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create ChargeItemDefinitionApplicability from a JSON object
   */
  static fromJSON(json: IChargeItemDefinitionApplicability): ChargeItemDefinitionApplicability {
    return new ChargeItemDefinitionApplicability(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new ChargeItemDefinitionApplicability with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IChargeItemDefinitionApplicability>): ChargeItemDefinitionApplicability {
    return new ChargeItemDefinitionApplicability({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new ChargeItemDefinitionApplicability by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IChargeItemDefinitionApplicability) => Partial<IChargeItemDefinitionApplicability>): ChargeItemDefinitionApplicability {
    const currentData = this.toJSON();
    return new ChargeItemDefinitionApplicability({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IChargeItemDefinitionApplicability)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IChargeItemDefinitionApplicability {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, CHARGE_ITEM_DEFINITION_APPLICABILITY_PROPERTIES);
    return result as IChargeItemDefinitionApplicability;
  }

  /**
   * Create a deep clone of this ChargeItemDefinitionApplicability
   */
  clone(): ChargeItemDefinitionApplicability {
    return new ChargeItemDefinitionApplicability(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the ChargeItemDefinitionApplicability
   */
  toString(): string {
    const parts: string[] = ['ChargeItemDefinitionApplicability'];
    return parts.join(', ');
  }
}
