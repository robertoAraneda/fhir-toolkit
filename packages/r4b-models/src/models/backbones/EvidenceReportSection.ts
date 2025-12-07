import { BackboneElement } from '../base/BackboneElement.js';
import type {
  ICodeableConcept,
  IElement,
  IEvidenceReportSection,
  INarrative,
  IQuantity,
  IReference,
  ListModeType,
} from '@fhir-toolkit/r4b-types';

/** Properties specific to EvidenceReportSection */
const EVIDENCE_REPORT_SECTION_PROPERTIES = [
  'title',
  '_title',
  'focus',
  'focusReference',
  'author',
  'text',
  'mode',
  '_mode',
  'orderedBy',
  'entryClassifier',
  'entryReference',
  'entryQuantity',
  'emptyReason',
  'section',
] as const;

/**
 * EvidenceReportSection - Composition is broken into sections
 *
 * @see https://hl7.org/fhir/R4/evidencereportsection.html
 *
 * @example
 * const evidenceReportSection = new EvidenceReportSection({
 *   // ... properties
 * });
 */
export class EvidenceReportSection extends BackboneElement implements IEvidenceReportSection {

  // ============================================================================
  // Properties
  // ============================================================================

  /** Label for section (e.g. for ToC) */
  title?: string;

  /** Extension for title */
  _title?: IElement;

  /** Classification of section (recommended) */
  focus?: ICodeableConcept;

  /** Classification of section by Resource */
  focusReference?: IReference<'Resource'>;

  /** Who and/or what authored the section */
  author?: IReference<'Person' | 'Device' | 'Group' | 'Organization'>[];

  /** Text summary of the section, for human interpretation */
  text?: INarrative;

  /** working | snapshot | changes */
  mode?: ListModeType;

  /** Extension for mode */
  _mode?: IElement;

  /** Order of section entries */
  orderedBy?: ICodeableConcept;

  /** Extensible classifiers as content */
  entryClassifier?: ICodeableConcept[];

  /** Reference to resources as content */
  entryReference?: IReference<'Resource'>[];

  /** Quantity as content */
  entryQuantity?: IQuantity[];

  /** Why the section is empty */
  emptyReason?: ICodeableConcept;

  /** Nested Section */
  section?: IEvidenceReportSection[];

  // ============================================================================
  // Constructor
  // ============================================================================

  constructor(data?: Partial<IEvidenceReportSection>) {
    super(data);
    if (data) {
      this.assignProps(data, EVIDENCE_REPORT_SECTION_PROPERTIES);
    }
  }

  // ============================================================================
  // Factory Methods
  // ============================================================================

  /**
   * Create EvidenceReportSection from a JSON object
   */
  static fromJSON(json: IEvidenceReportSection): EvidenceReportSection {
    return new EvidenceReportSection(json);
  }

  // ============================================================================
  // Functional Methods (Immutable Operations)
  // ============================================================================

  /**
   * Create a new EvidenceReportSection with the specified changes (immutable)
   * Does not modify the original instance
   */
  with(changes: Partial<IEvidenceReportSection>): EvidenceReportSection {
    return new EvidenceReportSection({ ...this.toJSON(), ...changes });
  }

  /**
   * Create a new EvidenceReportSection by applying a transformation function (immutable)
   * Does not modify the original instance
   */
  applyTransform(fn: (data: IEvidenceReportSection) => Partial<IEvidenceReportSection>): EvidenceReportSection {
    const currentData = this.toJSON();
    return new EvidenceReportSection({ ...currentData, ...fn(currentData) });
  }

  // ============================================================================
  // Serialization Methods
  // ============================================================================

  /**
   * Convert to plain JSON object (IEvidenceReportSection)
   * Properties are serialized in FHIR-defined order
   */
  toJSON(): IEvidenceReportSection {
    const result: Record<string, any> = {};
    this.serializeBackboneElementTo(result);
    this.serializePropsTo(result, EVIDENCE_REPORT_SECTION_PROPERTIES);
    return result as IEvidenceReportSection;
  }

  /**
   * Create a deep clone of this EvidenceReportSection
   */
  clone(): EvidenceReportSection {
    return new EvidenceReportSection(this.deepClone(this.toJSON()));
  }

  // ============================================================================
  // String Representation
  // ============================================================================

  /**
   * Get a string representation of the EvidenceReportSection
   */
  toString(): string {
    const parts: string[] = ['EvidenceReportSection'];
    return parts.join(', ');
  }
}
