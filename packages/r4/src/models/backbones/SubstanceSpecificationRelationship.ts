import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IQuantity,
  IRange,
  IRatio,
  IReference,
  ISubstanceSpecificationRelationship,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstanceSpecificationRelationship */
const SUBSTANCE_SPECIFICATION_RELATIONSHIP_PROPERTIES = [
  'substanceReference',
  'substanceCodeableConcept',
  'relationship',
  'isDefining',
  '_isDefining',
  'amountQuantity',
  'amountRange',
  'amountRatio',
  'amountString',
  '_amountString',
  'amountRatioLowLimit',
  'amountType',
  'source',
] as const;

/**
 * SubstanceSpecificationRelationship - A link between this substance and another, with details of the relationship
 *
 * @see https://hl7.org/fhir/R4/substancespecificationrelationship.html
 *
 * @example
 * const substanceSpecificationRelationship = new SubstanceSpecificationRelationship({
 *   // ... properties
 * });
 */
export class SubstanceSpecificationRelationship extends BackboneElement implements ISubstanceSpecificationRelationship {

  // ============================================================================
  // Properties
  // ============================================================================

  /** A pointer to another substance, as a resource or just a representational code */
  substanceReference?: IReference;

  /** A pointer to another substance, as a resource or just a representational code */
  substanceCodeableConcept?: ICodeableConcept;

  /** For example "salt to parent", "active moiety", "starting material" */
  relationship?: ICodeableConcept;

  /** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships */
  isDefining?: boolean;

  /** Extension for isDefining */
  _isDefining?: IElement;

  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other */
  amountQuantity?: IQuantity;

  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other */
  amountRange?: IRange;

  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other */
  amountRatio?: IRatio;

  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other */
  amountString?: string;

  /** Extension for amountString */
  _amountString?: IElement;

  /** For use when the numeric */
  amountRatioLowLimit?: IRatio;

  /** An operator for the amount, for example "average", "approximately", "less than" */
  amountType?: ICodeableConcept;

  /** Supporting literature */
  source?: IReference<'DocumentReference'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceSpecificationRelationship>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_SPECIFICATION_RELATIONSHIP_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceSpecificationRelationship from a JSON object
   */
  static fromJSON(json: ISubstanceSpecificationRelationship): SubstanceSpecificationRelationship {
    return new SubstanceSpecificationRelationship(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceSpecificationRelationship with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceSpecificationRelationship>): SubstanceSpecificationRelationship {
    return new SubstanceSpecificationRelationship({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceSpecificationRelationship by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceSpecificationRelationship) => Partial<ISubstanceSpecificationRelationship>): SubstanceSpecificationRelationship {
    const currentData = this.toJSON();
    return new SubstanceSpecificationRelationship({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceSpecificationRelationship)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceSpecificationRelationship {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_SPECIFICATION_RELATIONSHIP_PROPERTIES);
    return result as ISubstanceSpecificationRelationship;
  }

  /**
   * Create a deep clone of this SubstanceSpecificationRelationship
   */
  clone(): SubstanceSpecificationRelationship {
    return new SubstanceSpecificationRelationship(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceSpecificationRelationship
   */
  toString(): string {
    const parts: string[] = ['SubstanceSpecificationRelationship'];
    return parts.join(', ');
  }
}
