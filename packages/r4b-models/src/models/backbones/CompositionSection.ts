import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  ICompositionSection,
  IElement,
  INarrative,
  IReference,
  ListModeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to CompositionSection */
const COMPOSITION_SECTION_PROPERTIES = [
  'title',
  '_title',
  'code',
  'author',
  'focus',
  'text',
  'mode',
  '_mode',
  'orderedBy',
  'entry',
  'emptyReason',
  'section',
] as const;

/**
 * CompositionSection - Composition is broken into sections
 *
 * @see https://hl7.org/fhir/R4B/compositionsection.html
 *
 * @example
 * const compositionSection = new CompositionSection({
 *   // ... properties
 * });
 */
export class CompositionSection extends BackboneElement implements ICompositionSection {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Label for section (e.g. for ToC) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Classification of section (recommended) */
  code?: ICodeableConcept;

  /** Who and/or what authored the section */
  author?: IReference<'Practitioner' | 'PractitionerRole' | 'Device' | 'Patient' | 'RelatedPerson' | 'Organization'>[];

  /** Who/what the section is about, when it is not about the subject of composition */
  focus?: IReference<'Resource'>;

  /** Text summary of the section, for human interpretation */
  text?: INarrative;

  /** working | snapshot | changes */
  mode?: ListModeType;

  /** Extension for mode */
  _mode?: IElement;

  /** Order of section entries */
  orderedBy?: ICodeableConcept;

  /** A reference to data that supports this section */
  entry?: IReference<'Resource'>[];

  /** Why the section is empty */
  emptyReason?: ICodeableConcept;

  /** Nested Section */
  section?: ICompositionSection[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<ICompositionSection>) {
    super(data);
    if (data) {
      this.assignProps(data, COMPOSITION_SECTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create CompositionSection from a JSON object
   */
  static fromJSON(json: ICompositionSection): CompositionSection {
    return new CompositionSection(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new CompositionSection with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<ICompositionSection>): CompositionSection {
    return new CompositionSection({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new CompositionSection by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: ICompositionSection) => Partial<ICompositionSection>): CompositionSection {
    const currentData = this.toJSON();
    return new CompositionSection({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (ICompositionSection)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): ICompositionSection {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, COMPOSITION_SECTION_PROPERTIES);
    return result as ICompositionSection;
  }

  /**
   * Create a deep clone of this CompositionSection
   */
  clone(): CompositionSection {
    return new CompositionSection(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the CompositionSection
   */
  toString(): string {
    const parts: string[] = ['CompositionSection'];
    return parts.join(', ');
  }
}
