import type { IBackboneElement, ICodeableConcept, IElement, IReference } from '../../base/index.js';
import type { IDataRequirement } from '../datatypes/IDataRequirement.js';
import type { IDuration } from '../datatypes/IDuration.js';
import type { IExpression } from '../datatypes/IExpression.js';
import type { IPeriod } from '../datatypes/IPeriod.js';
import type { ITiming } from '../datatypes/ITiming.js';
import type { ITriggerDefinition } from '../datatypes/ITriggerDefinition.js';
import type { IUsageContext } from '../datatypes/IUsageContext.js';
import type { GroupMeasureType } from '../../valuesets/index.js';

/**
 * EvidenceVariableCharacteristic Interface
 * 
 * What defines the members of the evidence element
 * 
 *
 * @see https://hl7.org/fhir/R4/evidencevariablecharacteristic.html
 */
export interface IEvidenceVariableCharacteristic extends IBackboneElement {
  /**
   * Natural language description of the characteristic
   */
  description?: string;
  /**
   * Extension for description
   */
  _description?: IElement;

  /**
   * What code or expression defines members?
   */
  definitionReference?: IReference;

  /**
   * What code or expression defines members?
   */
  definitionCanonical?: string;
  /**
   * Extension for definitionCanonical
   */
  _definitionCanonical?: IElement;

  /**
   * What code or expression defines members?
   */
  definitionCodeableConcept?: ICodeableConcept;

  /**
   * What code or expression defines members?
   */
  definitionExpression?: IExpression;

  /**
   * What code or expression defines members?
   */
  definitionDataRequirement?: IDataRequirement;

  /**
   * What code or expression defines members?
   */
  definitionTriggerDefinition?: ITriggerDefinition;

  /**
   * What code/value pairs define members?
   */
  usageContext?: IUsageContext[];

  /**
   * Whether the characteristic includes or excludes members
   */
  exclude?: boolean;
  /**
   * Extension for exclude
   */
  _exclude?: IElement;

  /**
   * What time period do participants cover
   */
  participantEffectiveDateTime?: string;
  /**
   * Extension for participantEffectiveDateTime
   */
  _participantEffectiveDateTime?: IElement;

  /**
   * What time period do participants cover
   */
  participantEffectivePeriod?: IPeriod;

  /**
   * What time period do participants cover
   */
  participantEffectiveDuration?: IDuration;

  /**
   * What time period do participants cover
   */
  participantEffectiveTiming?: ITiming;

  /**
   * Observation time from study start
   */
  timeFromStart?: IDuration;

  /**
   * mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median
   */
  groupMeasure?: GroupMeasureType;
  /**
   * Extension for groupMeasure
   */
  _groupMeasure?: IElement;

}
