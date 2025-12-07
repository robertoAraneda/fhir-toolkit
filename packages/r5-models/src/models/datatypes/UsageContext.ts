import { Element } from '../base/Element.js';
import type {
  ICodeableConcept,
  ICoding,
  IQuantity,
  IRange,
  IReference,
  IUsageContext,
} from '@fhir-toolkit/r5-types';

/** Properties specific to UsageContext */
const USAGE_CONTEXT_PROPERTIES = [
  'code',
  'valueCodeableConcept',
  'valueQuantity',
  'valueRange',
  'valueReference',
] as const;

/**
 * UsageContext - Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).
 *
 * @see https://hl7.org/fhir/R4/usagecontext.html
 *
 * @example
 * const usageContext = new UsageContext({
 *   // ... properties
 * });
 */
export class UsageContext extends Element implements IUsageContext {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Type of context being specified */
  code: ICoding;

  /** Value that defines the context */
  valueCodeableConcept?: ICodeableConcept;

  /** Value that defines the context */
  valueQuantity?: IQuantity;

  /** Value that defines the context */
  valueRange?: IRange;

  /** Value that defines the context */
  valueReference?: IReference;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IUsageContext>) {
    super(data);
    if (data) {
      this.assignProps(data, USAGE_CONTEXT_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create UsageContext from a JSON object
   */
  static fromJSON(json: IUsageContext): UsageContext {
    return new UsageContext(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new UsageContext with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IUsageContext>): UsageContext {
    return new UsageContext({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new UsageContext by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IUsageContext) => Partial<IUsageContext>): UsageContext {
    const currentData = this.toJSON();
    return new UsageContext({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IUsageContext)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IUsageContext {
    const result: Record<string, any> = {};
    this.serializeElementTo(result);
    this.serializePropsTo(result, USAGE_CONTEXT_PROPERTIES);
    return result as IUsageContext;
  }

  /**
   * Create a deep clone of this UsageContext
   */
  clone(): UsageContext {
    return new UsageContext(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the UsageContext
   */
  toString(): string {
    const parts: string[] = ['UsageContext'];
    return parts.join(', ');
  }
}
