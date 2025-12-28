import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { EvidenceVariableHandlingType } from '../../valuesets/index.js';

/**
 * EvidenceStatisticModelCharacteristicVariable Interface
 * 
 * A variable adjusted for in the adjusted analysis
 * 
 *
 * @see https://hl7.org/fhir/R5/evidencestatisticmodelcharacteristicvariable.html
 */
export interface IEvidenceStatisticModelCharacteristicVariable extends IBackboneElement {
  /**
   * Description of the variable
   */
  variableDefinition: IReference<'Group' | 'EvidenceVariable'>;

  /**
   * continuous | dichotomous | ordinal | polychotomous
   */
  handling?: EvidenceVariableHandlingType;
  /**
   * Extension for handling
   */
  _handling?: IElement;

  /**
   * Description for grouping of ordinal or polychotomous variables
   */
  valueCategory?: ICodeableConcept[];

  /**
   * Discrete value for grouping of ordinal or polychotomous variables
   */
  valueQuantity?: IQuantity[];

  /**
   * Range of values for grouping of ordinal or polychotomous variables
   */
  valueRange?: IRange[];

}
