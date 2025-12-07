import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { INarrative } from '../datatypes/INarrative.js';

/**
 * CompositionSection Interface
 * 
 * Composition is broken into sections
 * 
 *
 * @see https://hl7.org/fhir/R4/compositionsection.html
 */
export interface ICompositionSection extends IBackboneElement {
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
  code?: ICodeableConcept;

  /**
   * Who and/or what authored the section
   */
  author?: IReference<'Practitioner' | 'PractitionerRole' | 'Device' | 'Patient' | 'RelatedPerson' | 'Organization'>[];

  /**
   * Who/what the section is about, when it is not about the subject of composition
   */
  focus?: IReference<'Resource'>;

  /**
   * Text summary of the section, for human interpretation
   */
  text?: INarrative;

  /**
   * Order of section entries
   */
  orderedBy?: ICodeableConcept;

  /**
   * A reference to data that supports this section
   */
  entry?: IReference<'Resource'>[];

  /**
   * Why the section is empty
   */
  emptyReason?: ICodeableConcept;

  /**
   * Nested Section
   */
  section?: ICompositionSection[];

}
