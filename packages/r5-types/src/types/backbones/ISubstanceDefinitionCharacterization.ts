import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IAttachment } from '../datatypes/IAttachment.js';

/**
 * SubstanceDefinitionCharacterization Interface
 * 
 * General specifications for this substance
 * 
 *
 * @see https://hl7.org/fhir/R4/substancedefinitioncharacterization.html
 */
export interface ISubstanceDefinitionCharacterization extends IBackboneElement {
  /**
   * The method used to find the characterization e.g. HPLC
   */
  technique?: ICodeableConcept;

  /**
   * Describes the nature of the chemical entity and explains, for instance, whether this is a base or a salt form
   */
  form?: ICodeableConcept;

  /**
   * The description or justification in support of the interpretation of the data file
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * The data produced by the analytical instrument or a pictorial representation of that data. Examples: a JCAMP, JDX, or ADX file, or a chromatogram or spectrum analysis
   */
  file?: IAttachment[];

}
