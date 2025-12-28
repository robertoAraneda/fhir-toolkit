import { DomainResource } from '../base/DomainResource.js';
import type {
  FHIRSubstanceStatusType,
  ICodeableConcept,
  ICodeableReference,
  IElement,
  IIdentifier,
  IQuantity,
  ISubstance,
  ISubstanceIngredient,
} from '@fhir-toolkit/r5-types';

/** Properties specific to Substance */
const SUBSTANCE_PROPERTIES = [
  'identifier',
  'instance',
  '_instance',
  'status',
  '_status',
  'category',
  'code',
  'description',
  '_description',
  'expiry',
  '_expiry',
  'quantity',
  'ingredient',
] as const;

/**
 * Substance - A homogeneous material with a definite composition.
 *
 * @see https://hl7.org/fhir/R5/substance.html
 *
 * @example
 * const substance = new Substance({
 *   // ... properties
 * });
 */
export class Substance extends DomainResource implements ISubstance {
  readonly resourceType = 'Substance' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Unique identifier */
  identifier?: IIdentifier[];

  /** Is this an instance of a substance or a kind of one */
  instance: boolean;

  /** Extension for instance */
  _instance?: IElement;

  /** active | inactive | entered-in-error */
  status?: FHIRSubstanceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** What class/type of substance this is */
  category?: ICodeableConcept[];

  /** What substance this is */
  code: ICodeableReference;

  /** Textual description of the substance, comments */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** When no longer valid to use */
  expiry?: string;

  /** Extension for expiry */
  _expiry?: IElement;

  /** Amount of substance in the package */
  quantity?: IQuantity;

  /** Composition information about the substance */
  ingredient?: ISubstanceIngredient[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Omit<Partial<ISubstance>, 'resourceType'>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create Substance from a JSON object
   */
  static fromJSON(json: ISubstance): Substance {
    return new Substance(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new Substance with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstance>): Substance {
    return new Substance({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new Substance by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstance) => Partial<ISubstance>): Substance {
    const currentData = this.toJSON();
    return new Substance({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstance)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstance {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SUBSTANCE_PROPERTIES);
    return result as ISubstance;
  }

  /**
   * Create a deep clone of this Substance
   */
  clone(): Substance {
    return new Substance(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the Substance
   */
  toString(): string {
    const parts: string[] = ['Substance'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
