import { DomainResource } from '../base/DomainResource.js';
import type {
  ICodeableConcept,
  IElement,
  ISubstancePolymer,
  ISubstancePolymerMonomerSet,
  ISubstancePolymerRepeat,
} from '@fhir-toolkit/r4-types';

/** Properties specific to SubstancePolymer */
const SUBSTANCE_POLYMER_PROPERTIES = [
  'class',
  'geometry',
  'copolymerConnectivity',
  'modification',
  '_modification',
  'monomerSet',
  'repeat',
] as const;

/**
 * SubstancePolymer - Todo.
 *
 * @see https://hl7.org/fhir/R4/substancepolymer.html
 *
 * @example
 * const substancePolymer = new SubstancePolymer({
 *   resourceType: 'SubstancePolymer',
 *   // ... properties
 * });
 */
export class SubstancePolymer extends DomainResource implements ISubstancePolymer {
  readonly resourceType = 'SubstancePolymer' as const;

  // ============================================================================
  // Properties
  // ============================================================================

  /** Todo */
  class?: ICodeableConcept;

  /** Todo */
  geometry?: ICodeableConcept;

  /** Todo */
  copolymerConnectivity?: ICodeableConcept[];

  /** Todo */
  modification?: string[];

  /** Extension for modification */
  _modification?: IElement;

  /** Todo */
  monomerSet?: ISubstancePolymerMonomerSet[];

  /** Todo */
  repeat?: ISubstancePolymerRepeat[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ISubstancePolymer>) {
    super(data);
    if (data) {
      this.assignProps(data, SUBSTANCE_POLYMER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create SubstancePolymer from a JSON object
   */
  static fromJSON(json: ISubstancePolymer): SubstancePolymer {
    return new SubstancePolymer(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new SubstancePolymer with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ISubstancePolymer>): SubstancePolymer {
    return new SubstancePolymer({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new SubstancePolymer by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ISubstancePolymer) => Partial<ISubstancePolymer>): SubstancePolymer {
    const currentData = this.toJSON();
    return new SubstancePolymer({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ISubstancePolymer)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ISubstancePolymer {
    const result: Record<string, any> = { resourceType: this.resourceType };
    this.serializeDomainResourceTo(result);
    this.serializePropsTo(result, SUBSTANCE_POLYMER_PROPERTIES);
    return result as ISubstancePolymer;
  }

  /**
   * Create a deep clone of this SubstancePolymer
   */
  clone(): SubstancePolymer {
    return new SubstancePolymer(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the SubstancePolymer
   */
  toString(): string {
    const parts: string[] = ['SubstancePolymer'];
    if (this.id) parts.push(`id=${this.id}`);
    return parts.join(', ');
  }
}
