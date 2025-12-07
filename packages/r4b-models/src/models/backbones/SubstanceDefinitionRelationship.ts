import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IQuantity,
  IRatio,
  IReference,
  ISubstanceDefinitionRelationship,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to SubstanceDefinitionRelationship */
const SUBSTANCE_DEFINITION_RELATIONSHIP_PROPERTIES = [
  'substanceDefinitionReference',
  'substanceDefinitionCodeableConcept',
  'type',
  'isDefining',
  '_isDefining',
  'amountQuantity',
  'amountRatio',
  'amountString',
  '_amountString',
  'ratioHighLimitAmount',
  'comparator',
  'source',
] as const;

/**
 * SubstanceDefinitionRelationship - A link between this substance and another
 *
 * @see https://hl7.org/fhir/R4/substancedefinitionrelationship.html
 *
 * @example
 * const substanceDefinitionRelationship = new SubstanceDefinitionRelationship({
 *   // ... properties
 * });
 */
export class SubstanceDefinitionRelationship extends BackboneElement implements ISubstanceDefinitionRelationship {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A pointer to another substance, as a resource or a representational code */
  substanceDefinitionReference?: IReference;

  /** A pointer to another substance, as a resource or a representational code */
  substanceDefinitionCodeableConcept?: ICodeableConcept;

  /** For example "salt to parent", "active moiety" */
  type: ICodeableConcept;

  /** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible relationships */
  isDefining?: boolean;

  /** Extension for isDefining */
  _isDefining?: IElement;

  /** A numeric factor for the relationship, e.g. that a substance salt has some percentage of active substance in relation to some other */
  amountQuantity?: IQuantity;

  /** A numeric factor for the relationship, e.g. that a substance salt has some percentage of active substance in relation to some other */
  amountRatio?: IRatio;

  /** A numeric factor for the relationship, e.g. that a substance salt has some percentage of active substance in relation to some other */
  amountString?: string;

  /** Extension for amountString */
  _amountString?: IElement;

  /** For use when the numeric has an uncertain range */
  ratioHighLimitAmount?: IRatio;

  /** An operator for the amount, for example "average", "approximately", "less than" */
  comparator?: ICodeableConcept;

  /** Supporting literature */
  source?: IReference<'DocumentReference'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceDefinitionRelationship>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_DEFINITION_RELATIONSHIP_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceDefinitionRelationship from a JSON object
   */
  static fromJSON(json: ISubstanceDefinitionRelationship): SubstanceDefinitionRelationship {
    return new SubstanceDefinitionRelationship(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceDefinitionRelationship with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceDefinitionRelationship>): SubstanceDefinitionRelationship {
    return new SubstanceDefinitionRelationship({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceDefinitionRelationship by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceDefinitionRelationship) => Partial<ISubstanceDefinitionRelationship>): SubstanceDefinitionRelationship {
    const currentData = this.toJSON();
    return new SubstanceDefinitionRelationship({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceDefinitionRelationship)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceDefinitionRelationship {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_DEFINITION_RELATIONSHIP_PROPERTIES);
    return result as ISubstanceDefinitionRelationship;
  }

  /**
   * Create a deep clone of this SubstanceDefinitionRelationship
   */
  clone(): SubstanceDefinitionRelationship {
    return new SubstanceDefinitionRelationship(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceDefinitionRelationship
   */
  toString(): string {
    const parts: string[] = ['SubstanceDefinitionRelationship'];
    return parts.join(', ');
  }
}
