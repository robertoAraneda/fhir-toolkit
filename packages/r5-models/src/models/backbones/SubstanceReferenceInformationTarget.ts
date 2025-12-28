import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IIdentifier,
  IQuantity,
  IRange,
  IReference,
  ISubstanceReferenceInformationTarget,
} from '@fhir-toolkit/r5-types';

/** Properties specific to SubstanceReferenceInformationTarget */
const SUBSTANCE_REFERENCE_INFORMATION_TARGET_PROPERTIES = [
  'target',
  'type',
  'interaction',
  'organism',
  'organismType',
  'amountQuantity',
  'amountRange',
  'amountString',
  '_amountString',
  'amountType',
  'source',
] as const;

/**
 * SubstanceReferenceInformationTarget - Todo
 *
 * @see https://hl7.org/fhir/R5/substancereferenceinformationtarget.html
 *
 * @example
 * const substanceReferenceInformationTarget = new SubstanceReferenceInformationTarget({
 *   // ... properties
 * });
 */
export class SubstanceReferenceInformationTarget extends BackboneElement implements ISubstanceReferenceInformationTarget {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Todo */
  target?: IIdentifier;

  /** Todo */
  type?: ICodeableConcept;

  /** Todo */
  interaction?: ICodeableConcept;

  /** Todo */
  organism?: ICodeableConcept;

  /** Todo */
  organismType?: ICodeableConcept;

  /** Todo */
  amountQuantity?: IQuantity;

  /** Todo */
  amountRange?: IRange;

  /** Todo */
  amountString?: string;

  /** Extension for amountString */
  _amountString?: IElement;

  /** Todo */
  amountType?: ICodeableConcept;

  /** Todo */
  source?: IReference<'DocumentReference'>[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstanceReferenceInformationTarget>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_REFERENCE_INFORMATION_TARGET_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstanceReferenceInformationTarget from a JSON object
   */
  static fromJSON(json: ISubstanceReferenceInformationTarget): SubstanceReferenceInformationTarget {
    return new SubstanceReferenceInformationTarget(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstanceReferenceInformationTarget with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstanceReferenceInformationTarget>): SubstanceReferenceInformationTarget {
    return new SubstanceReferenceInformationTarget({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstanceReferenceInformationTarget by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstanceReferenceInformationTarget) => Partial<ISubstanceReferenceInformationTarget>): SubstanceReferenceInformationTarget {
    const currentData = this.toJSON();
    return new SubstanceReferenceInformationTarget({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstanceReferenceInformationTarget)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstanceReferenceInformationTarget {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, SUBSTANCE_REFERENCE_INFORMATION_TARGET_PROPERTIES);
    return result as ISubstanceReferenceInformationTarget;
  }

  /**
   * Create a deep clone of this SubstanceReferenceInformationTarget
   */
  clone(): SubstanceReferenceInformationTarget {
    return new SubstanceReferenceInformationTarget(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstanceReferenceInformationTarget
   */
  toString(): string {
    const parts: string[] = ['SubstanceReferenceInformationTarget'];
    return parts.join(', ');
  }
}
