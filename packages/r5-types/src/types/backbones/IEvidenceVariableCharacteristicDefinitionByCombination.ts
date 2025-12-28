import type { IBackboneElement, IElement } from '../../base/index.js';
import type { IEvidenceVariableCharacteristic } from './IEvidenceVariableCharacteristic.js';
import type { CharacteristicCombinationType } from '../../valuesets/index.js';

/**
 * EvidenceVariableCharacteristicDefinitionByCombination Interface
 * 
 * Used to specify how two or more characteristics are combined
 * 
 *
 * @see https://hl7.org/fhir/R5/evidencevariablecharacteristicdefinitionbycombination.html
 */
export interface IEvidenceVariableCharacteristicDefinitionByCombination extends IBackboneElement {
  /**
   * all-of | any-of | at-least | at-most | statistical | net-effect | dataset
   */
  code: CharacteristicCombinationType;
  /**
   * Extension for code
   */
  _code?: IElement;

  /**
   * Provides the value of "n" when "at-least" or "at-most" codes are used
   */
  threshold?: number;
  /**
   * Extension for threshold
   */
  _threshold?: IElement;

  /**
   * A defining factor of the characteristic
   */
  characteristic: IEvidenceVariableCharacteristic[];

}
