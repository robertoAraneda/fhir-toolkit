import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { INarrative } from '../datatypes/INarrative.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { ListModeType } from '../../valuesets/index.js';

/**
 * EvidenceReportSection Interface
 * 
 * Composition is broken into sections
 * 
 *
 * @see https://hl7.org/fhir/R5/evidencereportsection.html
 */
export interface IEvidenceReportSection extends IBackboneElement {
  /**
   * Label for section (e.g. for ToC)
   */
  title?: string;
  /**
   * Extension for title
   */
  _title?: IElement;

  /**
   * Classification of section (recommended)
   */
  focus?: ICodeableConcept;

  /**
   * Classification of section by Resource
   */
  focusReference?: IReference<'Resource'>;

  /**
   * Who and/or what authored the section
   */
  author?: IReference<'Patient' | 'Practitioner' | 'PractitionerRole' | 'RelatedPerson' | 'Device' | 'Group' | 'Organization'>[];

  /**
   * Text summary of the section, for human interpretation
   */
  text?: INarrative;

  /**
   * working | snapshot | changes
   */
  mode?: ListModeType;
  /**
   * Extension for mode
   */
  _mode?: IElement;

  /**
   * Order of section entries
   */
  orderedBy?: ICodeableConcept;

  /**
   * Extensible classifiers as content
   */
  entryClassifier?: ICodeableConcept[];

  /**
   * Reference to resources as content
   */
  entryReference?: IReference<'Resource'>[];

  /**
   * Quantity as content
   */
  entryQuantity?: IQuantity[];

  /**
   * Why the section is empty
   */
  emptyReason?: ICodeableConcept;

  /**
   * Nested Section
   */
  section?: IEvidenceReportSection[];

}
