import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IAnnotation } from '../datatypes/IAnnotation.js';
import type { IExpression } from '../datatypes/IExpression.js';
import type { IQuantity } from '../datatypes/IQuantity.js';
import type { IRange } from '../datatypes/IRange.js';
import type { IEvidenceVariableCharacteristicDefinitionByCombination } from './IEvidenceVariableCharacteristicDefinitionByCombination.js';
import type { IEvidenceVariableCharacteristicDefinitionByTypeAndValue } from './IEvidenceVariableCharacteristicDefinitionByTypeAndValue.js';
import type { IEvidenceVariableCharacteristicTimeFromEvent } from './IEvidenceVariableCharacteristicTimeFromEvent.js';

/**
 * EvidenceVariableCharacteristic Interface
 * 
 * A defining factor of the EvidenceVariable
 * 
 *
 * @see https://hl7.org/fhir/R4/evidencevariablecharacteristic.html
 */
export interface IEvidenceVariableCharacteristic extends IBackboneElement {
  /**
   * Label for internal linking
   */
  linkId?: string;
  /**
   * Extension for linkId
   */
  _linkId?: IElement;

  /**
   * Natural language description of the characteristic
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * Used for footnotes or explanatory notes
   */
  note?: IAnnotation[];

  /**
   * Whether the characteristic is an inclusion criterion or exclusion criterion
   */
  exclude?: boolean;
  /**
   * Extension for exclude
   */
  _exclude?: IElement;

  /**
   * Defines the characteristic (without using type and value) by a Reference
   */
  definitionReference?: IReference<'EvidenceVariable' | 'Group' | 'Evidence'>;

  /**
   * Defines the characteristic (without using type and value) by a Canonical
   */
  definitionCanonical?: string;
  /**
   * Extension for definitionCanonical
   */
  _definitionCanonical?: IElement;

  /**
   * Defines the characteristic (without using type and value) by a CodeableConcept
   */
  definitionCodeableConcept?: ICodeableConcept;

  /**
   * Defines the characteristic (without using type and value) by an expression
   */
  definitionExpression?: IExpression;

  /**
   * Defines the characteristic (without using type and value) by an id
   */
  definitionId?: string;
  /**
   * Extension for definitionId
   */
  _definitionId?: IElement;

  /**
   * Defines the characteristic using type and value
   */
  definitionByTypeAndValue?: IEvidenceVariableCharacteristicDefinitionByTypeAndValue;

  /**
   * Used to specify how two or more characteristics are combined
   */
  definitionByCombination?: IEvidenceVariableCharacteristicDefinitionByCombination;

  /**
   * Number of occurrences meeting the characteristic
   */
  instancesQuantity?: IQuantity;

  /**
   * Number of occurrences meeting the characteristic
   */
  instancesRange?: IRange;

  /**
   * Length of time in which the characteristic is met
   */
  durationQuantity?: IQuantity;

  /**
   * Length of time in which the characteristic is met
   */
  durationRange?: IRange;

  /**
   * Timing in which the characteristic is determined
   */
  timeFromEvent?: IEvidenceVariableCharacteristicTimeFromEvent[];

}
