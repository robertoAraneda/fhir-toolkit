import type { IBackboneElement, ICodeableConcept, IElement } from '../../base/index.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IRange } from '../datatypes/IRange.js';

/**
 * SpecimenDefinitionTypeTestedHandling Interface
 * 
 * Specimen handling before testing
 * 
 *
 * @see https://hl7.org/fhir/R4/specimendefinitiontypetestedhandling.html
 */
export interface ISpecimenDefinitionTypeTestedHandling extends IBackboneElement {
  /**
   * Temperature qualifier
   */
  temperatureQualifier?: ICodeableConcept;

  /**
   * Temperature range
   */
  temperatureRange?: IRange;

  /**
   * Maximum preservation time
   */
  maxDuration?: IDuration;

  /**
   * Preservation instruction
   */
  instruction?: string;
  /**
   * Extension for instruction
   */
  _instruction?: IElement;

}
