import { DomainResource } from '../base/DomainResource.js';
import type {
  FHIRSubstanceStatusType,
  ICodeableConcept,
  IElement,
  IIdentifier,
  ISubstance,
  ISubstanceIngredient,
  ISubstanceInstance,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to Substance */
const SUBSTANCE_PROPERTIES = [
  'identifier',
  'status',
  '_status',
  'category',
  'code',
  'description',
  '_description',
  'instance',
  'ingredient',
] as const;

/**
 * Substance - A homogeneous material with a definite composition.
 *
 * @see https://hl7.org/fhir/R4B/substance.html
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

  /** active | inactive | entered-in-error */
  status?: FHIRSubstanceStatusType;

  /** Extension for status */
  _status?: IElement;

  /** What class/type of substance this is */
  category?: ICodeableConcept[];

  /** What substance this is */
  code: ICodeableConcept;

  /** Textual description of the substance, comments */
  description?: string;

  /** Extension for description */
  _description?: IElement;

  /** If this describes a specific package/container of the substance */
  instance?: ISubstanceInstance[];

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
