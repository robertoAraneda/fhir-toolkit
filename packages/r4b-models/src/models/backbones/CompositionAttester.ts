import { BackboneElement } from '../base/BackboneElement.js';
import type {
  CompositionAttestationModeType,
  ICompositionAttester,
  IElement,
  IReference,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CompositionAttester */
const COMPOSITION_ATTESTER_PROPERTIES = [
  'mode',
  '_mode',
  'time',
  '_time',
  'party',
] as const;

/**
 * CompositionAttester - Attests to accuracy of composition
 *
 * @see https://hl7.org/fhir/R4B/compositionattester.html
 *
 * @example
 * const compositionAttester = new CompositionAttester({
 *   // ... properties
 * });
 */
export class CompositionAttester extends BackboneElement implements ICompositionAttester {

  // ============================================================================
  // Properties
  // ============================================================================

  /** personal | professional | legal | official */
  mode: CompositionAttestationModeType;

  /** Extension for mode */
  _mode?: IElement;

  /** When the composition was attested */
  time?: string;

  /** Extension for time */
  _time?: IElement;

  /** Who attested the composition */
  party?: IReference<'Patient' | 'RelatedPerson' | 'Practitioner' | 'PractitionerRole' | 'Organization'>;

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICompositionAttester>) {
    super(data);
    if (data) {
      this.assignProps(data, COMPOSITION_ATTESTER_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CompositionAttester from a JSON object
   */
  static fromJSON(json: ICompositionAttester): CompositionAttester {
    return new CompositionAttester(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CompositionAttester with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICompositionAttester>): CompositionAttester {
    return new CompositionAttester({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CompositionAttester by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICompositionAttester) => Partial<ICompositionAttester>): CompositionAttester {
    const currentData = this.toJSON();
    return new CompositionAttester({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICompositionAttester)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICompositionAttester {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COMPOSITION_ATTESTER_PROPERTIES);
    return result as ICompositionAttester;
  }

  /**
   * Create a deep clone of this CompositionAttester
   */
  clone(): CompositionAttester {
    return new CompositionAttester(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CompositionAttester
   */
  toString(): string {
    const parts: string[] = ['CompositionAttester'];
    return parts.join(', ');
  }
}
